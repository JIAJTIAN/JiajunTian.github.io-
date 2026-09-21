(() => {
  const initializeGallery = () => {
    const gallery = document.querySelector("[data-gallery]");
    if (!gallery) return;

    const cards = [...gallery.querySelectorAll("[data-gallery-category]")];
    const filters = [...document.querySelectorAll("[data-gallery-filter]")];
    const count = document.querySelector("[data-gallery-count]");

    const applyFilter = (category) => {
      let visible = 0;

      cards.forEach((card) => {
        const show = category === "all" || card.dataset.galleryCategory === category;
        card.hidden = !show;
        if (show) visible += 1;
      });

      filters.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.galleryFilter === category));
      });

      if (count) count.textContent = `${visible} ${visible === 1 ? "entry" : "entries"}`;
    };

    filters.forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.galleryFilter));
    });

    applyFilter("all");
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeGallery, { once: true });
  } else {
    initializeGallery();
  }
})();
