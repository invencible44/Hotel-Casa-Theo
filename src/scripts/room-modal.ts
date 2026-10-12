type Language = "es" | "en";

const root = document.documentElement;
const modal = document.querySelector<HTMLDialogElement>("[data-room-modal]");
const openButtons = document.querySelectorAll<HTMLButtonElement>("[data-room-open]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (modal) {
  const image = modal.querySelector<HTMLImageElement>("[data-room-modal-image]");
  const title = modal.querySelector<HTMLElement>("[data-room-modal-title]");
  const detail = modal.querySelector<HTMLElement>("[data-room-modal-detail]");
  const description = modal.querySelector<HTMLElement>("[data-room-modal-description]");
  const closeButton = modal.querySelector<HTMLButtonElement>("[data-room-modal-close]");
  const reserveLink = modal.querySelector<HTMLAnchorElement>("[data-room-modal-reserve]");
  let activeButton: HTMLButtonElement | null = null;
  let closeTimer = 0;

  const getLanguage = (): Language => (root.dataset.language === "en" ? "en" : "es");

  const getRoomValue = (button: HTMLButtonElement, field: string) => {
    const suffix = getLanguage() === "en" ? "En" : "Es";
    return button.dataset[`${field}${suffix}`] ?? "";
  };

  const updateOpenButtonLabels = () => {
    const isEnglish = getLanguage() === "en";

    openButtons.forEach((button) => {
      const roomName = getRoomValue(button, "roomName");
      const label = isEnglish ? `View details for the ${roomName} room` : `Ver detalles de la habitación ${roomName}`;
      button.setAttribute("aria-label", label);
      const accessibleText = button.querySelector<HTMLElement>(".sr-only");
      if (accessibleText) accessibleText.textContent = label;
    });
  };

  const updateModalContent = (button: HTMLButtonElement) => {
    if (!image || !title || !detail || !description) return;

    image.src = button.dataset.roomImage ?? "";
    image.alt = getRoomValue(button, "roomAlt");
    title.textContent = getRoomValue(button, "roomName");
    detail.textContent = getRoomValue(button, "roomDetail");
    description.textContent = getRoomValue(button, "roomDescription");
  };

  const finishClosing = () => {
    modal.close();
    modal.removeAttribute("data-state");
    activeButton?.focus();
  };

  const closeModal = (immediate = false) => {
    window.clearTimeout(closeTimer);
    modal.dataset.state = "closing";

    if (immediate || reducedMotion.matches) {
      finishClosing();
      return;
    }

    closeTimer = window.setTimeout(finishClosing, 250);
  };

  const openModal = (button: HTMLButtonElement) => {
    window.clearTimeout(closeTimer);
    activeButton = button;
    updateModalContent(button);
    modal.removeAttribute("data-state");
    modal.showModal();

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        modal.dataset.state = "open";
      });
    });
  };

  openButtons.forEach((button) => button.addEventListener("click", () => openModal(button)));
  closeButton?.addEventListener("click", () => closeModal());
  reserveLink?.addEventListener("click", () => closeModal(true));

  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });

  modal.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeModal();
  });

  window.addEventListener("languagechange", () => {
    updateOpenButtonLabels();
    if (activeButton && modal.open) updateModalContent(activeButton);
  });

  updateOpenButtonLabels();
}
