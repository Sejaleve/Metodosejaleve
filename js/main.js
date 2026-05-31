const grid = document.querySelector("[data-modules]");
const menuButton = document.querySelector("[data-menu-button]");
const menu = document.querySelector("[data-menu]");

if (grid) {
  grid.innerHTML = modules.map((item) => {
    const coverContent = item.image
      ? `<img class="module-image" src="${item.image}" alt="${item.title}" loading="lazy">`
      : "";

    return `
      <a class="module-card" href="${item.url}">
        <div class="module-cover">${coverContent}</div>
        <p class="module-category">${item.category}</p>
        <h2 class="module-title">${item.title}</h2>
        <p class="module-description">${item.description}</p>
      </a>
    `;
  }).join("");
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}
