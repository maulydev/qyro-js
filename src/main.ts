// import routes from "./router";
// import { renderPage } from "./render";
// import config from "./qyro.config";

// const sidebar = document.getElementById("menu")!;
// const headerTitle = document.querySelector("header h2");
// const sidebarTitle = document.querySelector("aside h1");
// const pageTitle = document.getElementById('page-title');

// if (headerTitle) headerTitle.textContent = config.headerTitle;
// if (sidebarTitle) sidebarTitle.textContent = config.sidebarTitle;
// if (pageTitle) pageTitle.textContent = config.title;

// renderPage(location.pathname);
// renderMenu(sidebar);

// // Handle browser navigation (back/forward)
// window.addEventListener("popstate", () => {
//   renderPage(location.pathname);
// });

// function renderMenu(menuElement: HTMLElement): void {
//   menuElement.innerHTML = ""; // Clear existing menu items

//   routes.sort((a, b) => (a.meta?.order || 999) - (b.meta?.order || 999)).forEach((route) => {
//     const linkText =
//       route.meta?.title ||
//       route.path.replace("/", "").replace(/-/g, " ") || "Home";

//     const li = document.createElement("li");
//     li.innerHTML = `<a href="${route.path}" class="menu-link">${linkText}</a>`;

//     li.querySelector("a")?.addEventListener("click", (e) => {
//       e.preventDefault();
//       history.pushState(null, "", route.path);
//       renderPage(route.path);
//     });

//     menuElement.appendChild(li);
//   });
// }

import routes from "./router";
import { renderPage } from "./render";
import config from "./qyro.config";
import { renderStudio } from "./studio";

const sidebar = document.getElementById("menu")!;
const headerTitle = document.querySelector("header h2");
const sidebarTitle = document.querySelector("aside h1");
const pageTitle = document.getElementById("page-title");

if (headerTitle) headerTitle.textContent = config.headerTitle;
if (sidebarTitle) sidebarTitle.textContent = config.sidebarTitle;
if (pageTitle) pageTitle.textContent = config.title;

renderPage(location.pathname);
renderMenu(sidebar);

// Handle browser navigation (back/forward)
window.addEventListener("popstate", () => {
  const path = location.pathname;
  if (path === "/studio") {
    const docElement = document.getElementById("doc");
    if (docElement) {
      renderStudio(docElement);
    }
  } else {
    renderPage(path);
  }
});

function renderMenu(menuElement: HTMLElement): void {
  menuElement.innerHTML = ""; // Clear existing menu items

  // Render markdown doc routes
  routes
    .sort((a, b) => (a.meta?.order || 999) - (b.meta?.order || 999))
    .forEach((route) => {
      const linkText =
        route.meta?.title ||
        route.path.replace("/", "").replace(/-/g, " ") ||
        "Home";

      const li = document.createElement("li");
      li.innerHTML = `<a href="${route.path}" class="menu-link">${linkText}</a>`;

      li.querySelector("a")?.addEventListener("click", (e) => {
        e.preventDefault();
        history.pushState(null, "", route.path);
        renderPage(route.path);
      });

      menuElement.appendChild(li);
    });

  // ✅ Inject MD Studio link in development only
  if (import.meta.env.DEV) {
    const studioLink = document.getElementById("studio");
    const docElement = document.getElementById("doc");
    if (!studioLink || !docElement) return;

    studioLink.innerHTML = `<a href="/studio" class="menu-link">MD Studio</a>`;

    studioLink.querySelector("a")?.addEventListener("click", (e) => {
      e.preventDefault();
      history.pushState(null, "", "/studio");
      renderStudio(docElement);
    });
  }
}
