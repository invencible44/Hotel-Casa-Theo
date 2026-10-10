type Theme = "light" | "dark";
type Language = "es" | "en";

const storageKey = "casa-theo-theme";
const root = document.documentElement;
const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
const toggles = document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]");

const labels: Record<Language, { light: string; dark: string }> = {
  es: { light: "Activar modo claro", dark: "Activar modo oscuro" },
  en: { light: "Switch to light mode", dark: "Switch to dark mode" },
};

const getLanguage = (): Language => (root.dataset.language === "en" ? "en" : "es");

const updateToggle = (toggle: HTMLButtonElement, theme: Theme) => {
  const isDark = theme === "dark";
  const lightIcon = toggle.querySelector<HTMLElement>("[data-theme-light-icon]");
  const darkIcon = toggle.querySelector<HTMLElement>("[data-theme-dark-icon]");

  toggle.setAttribute("aria-pressed", String(isDark));
  const currentLabels = labels[getLanguage()];
  toggle.setAttribute("aria-label", isDark ? currentLabels.light : currentLabels.dark);
  lightIcon?.classList.toggle("hidden", isDark);
  darkIcon?.classList.toggle("hidden", !isDark);
};

const applyTheme = (theme: Theme, persist = false) => {
  root.dataset.theme = theme;
  themeColor?.setAttribute("content", theme === "dark" ? "#0d1511" : "#20382f");
  toggles.forEach((toggle) => updateToggle(toggle, theme));

  if (persist) localStorage.setItem(storageKey, theme);
};

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark", true);
  });
});

applyTheme(root.dataset.theme === "dark" ? "dark" : "light");

window.addEventListener("languagechange", () => {
  const theme = root.dataset.theme === "dark" ? "dark" : "light";
  toggles.forEach((toggle) => updateToggle(toggle, theme));
});
