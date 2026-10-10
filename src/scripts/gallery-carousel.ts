const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((carousel) => {
  const rail = carousel.querySelector<HTMLElement>("[data-carousel-rail]");
  const previousButton = carousel.querySelector<HTMLButtonElement>("[data-carousel-previous]");
  const nextButton = carousel.querySelector<HTMLButtonElement>("[data-carousel-next]");
  const toggleButton = carousel.querySelector<HTMLButtonElement>("[data-carousel-toggle]");
  const toggleIcon = carousel.querySelector<HTMLElement>("[data-carousel-toggle-icon]");
  const status = carousel.querySelector<HTMLElement>("[data-carousel-status]");
  const slides = Array.from(carousel.querySelectorAll<HTMLElement>("[data-carousel-slide]"));

  if (!rail || !previousButton || !nextButton || !toggleButton || !toggleIcon || !status || slides.length === 0) return;

  let activeIndex = 0;
  let animationFrame = 0;
  let autoplayTimer = 0;
  let autoplayDirection: 1 | -1 = 1;
  let isVisible = false;
  let isUserPaused = false;
  let isInteractionPaused = false;

  const stopAutoplay = () => {
    window.clearInterval(autoplayTimer);
    autoplayTimer = 0;
  };

  const findActiveSlide = () => {
    const maximumScroll = rail.scrollWidth - rail.clientWidth;
    const edgeTolerance = 2;

    if (rail.scrollLeft <= edgeTolerance) return 0;
    if (maximumScroll - rail.scrollLeft <= edgeTolerance) return slides.length - 1;

    return slides.reduce((closestIndex, slide, index) => {
      const railCenter = rail.scrollLeft + rail.clientWidth / 2;
      const currentDistance = Math.abs(slide.offsetLeft + slide.clientWidth / 2 - railCenter);
      const closestSlide = slides[closestIndex];
      const closestDistance = Math.abs(closestSlide.offsetLeft + closestSlide.clientWidth / 2 - railCenter);
      return currentDistance < closestDistance ? index : closestIndex;
    }, 0);
  };

  const updateControls = () => {
    activeIndex = findActiveSlide();
    status.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  };

  const showSlide = (index: number) => {
    const normalizedIndex = (index + slides.length) % slides.length;
    const destination = slides[normalizedIndex];
    activeIndex = normalizedIndex;
    status.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    rail.scrollTo({
      left: destination.offsetLeft - (rail.clientWidth - destination.clientWidth) / 2,
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (!isVisible || isUserPaused || isInteractionPaused || reducedMotion.matches || document.hidden) return;

    autoplayTimer = window.setInterval(() => {
      if (activeIndex === slides.length - 1) autoplayDirection = -1;
      if (activeIndex === 0) autoplayDirection = 1;
      showSlide(activeIndex + autoplayDirection);
    }, 2500);
  };

  const updateAutoplayButton = () => {
    toggleButton.setAttribute("aria-pressed", String(isUserPaused));
    toggleButton.setAttribute("aria-label", isUserPaused ? "Reanudar carrusel automático" : "Pausar carrusel automático");
    toggleIcon.textContent = isUserPaused ? "▶" : "Ⅱ";
  };

  previousButton.addEventListener("click", () => {
    showSlide(activeIndex - 1);
    startAutoplay();
  });
  nextButton.addEventListener("click", () => {
    showSlide(activeIndex + 1);
    startAutoplay();
  });
  toggleButton.addEventListener("click", () => {
    isUserPaused = !isUserPaused;
    updateAutoplayButton();
    startAutoplay();
  });

  rail.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    showSlide(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
    startAutoplay();
  });

  rail.addEventListener("mouseenter", () => {
    isInteractionPaused = true;
    stopAutoplay();
  });
  rail.addEventListener("mouseleave", () => {
    isInteractionPaused = false;
    startAutoplay();
  });
  rail.addEventListener("focusin", () => {
    isInteractionPaused = true;
    stopAutoplay();
  });
  rail.addEventListener("focusout", () => {
    isInteractionPaused = false;
    startAutoplay();
  });

  rail.addEventListener(
    "scroll",
    () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateControls);
    },
    { passive: true },
  );

  window.addEventListener("resize", updateControls, { passive: true });
  document.addEventListener("visibilitychange", startAutoplay);
  reducedMotion.addEventListener("change", startAutoplay);

  const visibilityObserver = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting;
      startAutoplay();
    },
    { threshold: 0.35 },
  );

  visibilityObserver.observe(carousel);
  updateAutoplayButton();
  updateControls();
});
