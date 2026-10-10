const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((carousel) => {
  const rail = carousel.querySelector<HTMLElement>("[data-carousel-rail]");
  const previousButton = carousel.querySelector<HTMLButtonElement>("[data-carousel-previous]");
  const nextButton = carousel.querySelector<HTMLButtonElement>("[data-carousel-next]");
  const status = carousel.querySelector<HTMLElement>("[data-carousel-status]");
  const slides = Array.from(carousel.querySelectorAll<HTMLElement>("[data-carousel-slide]"));

  if (!rail || !previousButton || !nextButton || !status || slides.length === 0) return;

  let activeIndex = 0;
  let animationFrame = 0;

  const findActiveSlide = () => {
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
    previousButton.disabled = activeIndex === 0;
    nextButton.disabled = activeIndex === slides.length - 1;
  };

  const showSlide = (index: number) => {
    const destination = slides[Math.max(0, Math.min(index, slides.length - 1))];
    rail.scrollTo({
      left: destination.offsetLeft - (rail.clientWidth - destination.clientWidth) / 2,
      behavior: reducedMotion.matches ? "auto" : "smooth",
    });
  };

  previousButton.addEventListener("click", () => showSlide(activeIndex - 1));
  nextButton.addEventListener("click", () => showSlide(activeIndex + 1));

  rail.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    showSlide(activeIndex + (event.key === "ArrowRight" ? 1 : -1));
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
  updateControls();
});
