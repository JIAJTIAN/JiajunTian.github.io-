(() => {
  const storageKey = "portfolio-theme";
  const themes = ["professional", "cyber", "elden"];

  const storedTheme = window.localStorage.getItem(storageKey);
  const initialTheme = themes.includes(storedTheme) ? storedTheme : "professional";
  document.documentElement.dataset.portfolioTheme = initialTheme;

  const updateHero = (theme) => {
    const profileImage = document.querySelector(".profile img");
    if (!profileImage) return;

    const picture = profileImage.closest("picture");
    const source = picture?.querySelector("source");
    const useElden = theme === "elden";

    if (!profileImage.dataset.cyberSrc) {
      profileImage.dataset.cyberSrc = profileImage.getAttribute("src") || "";
      profileImage.dataset.cyberAlt = profileImage.getAttribute("alt") || "";
      if (source) source.dataset.cyberSrcset = source.getAttribute("srcset") || "";
    }

    if (useElden) {
      profileImage.src = profileImage.dataset.cyberSrc.replace(/asaxs-cyber-hero\.png(?:\?[^#]*)?/, "elden-scattering-rune.png");
      profileImage.alt = "Golden scientific scattering rune";
      if (source?.dataset.cyberSrcset) {
        source.srcset = source.dataset.cyberSrcset.replaceAll("asaxs-cyber-hero", "elden-scattering-rune");
      }
    } else {
      profileImage.src = profileImage.dataset.cyberSrc;
      profileImage.alt = profileImage.dataset.cyberAlt;
      if (source?.dataset.cyberSrcset) source.srcset = source.dataset.cyberSrcset;
    }
  };

  const applyTheme = (theme) => {
    document.documentElement.dataset.portfolioTheme = theme;
    window.localStorage.setItem(storageKey, theme);
    updateHero(theme);

    document.querySelectorAll("[data-theme-choice]").forEach((button) => {
      const selected = button.dataset.themeChoice === theme;
      button.setAttribute("aria-pressed", String(selected));
    });
  };

  const mountSelector = () => {
    if (document.querySelector(".portfolio-theme-switcher")) return;

    const switcher = document.createElement("div");
    switcher.className = "portfolio-theme-switcher";
    switcher.setAttribute("role", "group");
    switcher.setAttribute("aria-label", "Choose portfolio appearance");
    switcher.innerHTML = `
      <span class="theme-switcher-label">APPEARANCE</span>
      <button type="button" data-theme-choice="professional">PROFESSIONAL</button>
      <button type="button" data-theme-choice="cyber">CYBERPUNK</button>
      <button type="button" data-theme-choice="elden">ELDEN ARCHIVE</button>
    `;

    switcher.addEventListener("click", (event) => {
      const button = event.target.closest("[data-theme-choice]");
      if (button) applyTheme(button.dataset.themeChoice);
    });

    document.body.appendChild(switcher);
    applyTheme(document.documentElement.dataset.portfolioTheme || initialTheme);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountSelector, { once: true });
  } else {
    mountSelector();
  }
})();
