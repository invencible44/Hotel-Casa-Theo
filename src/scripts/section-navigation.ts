const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const startAlignedTargets = new Set(["inicio", "contenido"]);

const scrollToHash = (hash: string, updateHistory: boolean) => {
  const targetId = decodeURIComponent(hash.replace(/^#/, ""));
  const target = document.getElementById(targetId);

  if (!target) return;

  target.scrollIntoView({
    behavior: reducedMotion.matches ? "auto" : "smooth",
    block: startAlignedTargets.has(targetId) ? "start" : "center",
  });

  if (updateHistory) window.history.pushState(null, "", hash);
};

document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (!link.hash || link.hash === "#") return;

    event.preventDefault();
    scrollToHash(link.hash, true);
  });
});

window.addEventListener("popstate", () => {
  if (window.location.hash) scrollToHash(window.location.hash, false);
});

window.addEventListener("load", () => {
  if (window.location.hash) scrollToHash(window.location.hash, false);
});
