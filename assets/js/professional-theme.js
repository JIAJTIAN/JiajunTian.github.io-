(() => {
  // Start in dark mode once after this default reset, then remember new choices.
  const storageKey = "portfolio-theme-v2";
  const darkTheme = "professional";
  const lightTheme = "professional-light";
  const validThemes = new Set([darkTheme, lightTheme]);

  let initialTheme = darkTheme;
  try {
    const storedTheme = window.localStorage.getItem(storageKey);
    if (validThemes.has(storedTheme)) initialTheme = storedTheme;
  } catch {
    // Continue with the dark professional theme when storage is unavailable.
  }

  document.documentElement.dataset.portfolioTheme = initialTheme;

  const applyTheme = (theme) => {
    const nextTheme = validThemes.has(theme) ? theme : darkTheme;
    const isLight = nextTheme === lightTheme;
    document.documentElement.dataset.portfolioTheme = nextTheme;

    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch {
      // The switch still works for the current page without persistence.
    }

    const toggle = document.querySelector(".professional-theme-toggle");
    if (toggle) {
      toggle.dataset.activeTheme = isLight ? "light" : "dark";
      toggle.setAttribute("aria-pressed", String(isLight));
      toggle.setAttribute("aria-label", `Switch to ${isLight ? "dark" : "light"} theme`);
      toggle.querySelector(".theme-toggle-label").textContent = isLight ? "DARK" : "LIGHT";
      toggle.querySelector(".theme-toggle-icon").textContent = isLight ? "◐" : "○";
    }
  };

  const mountToggle = () => {
    if (document.querySelector(".professional-theme-toggle")) return;

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "professional-theme-toggle";
    toggle.innerHTML = '<span class="theme-toggle-icon" aria-hidden="true"></span><span class="theme-toggle-label"></span>';
    toggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.dataset.portfolioTheme;
      applyTheme(currentTheme === lightTheme ? darkTheme : lightTheme);
    });
    document.body.appendChild(toggle);
    applyTheme(document.documentElement.dataset.portfolioTheme);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountToggle, { once: true });
  } else {
    mountToggle();
  }
})();
