import routes from "./router";
import { renderPage } from "./render";

const sidebar = document.getElementById("menu")!;
renderPage(location.pathname);
renderMenu(sidebar);

// Handle browser navigation (back/forward)
window.addEventListener("popstate", () => {
  renderPage(location.pathname);
});

function renderMenu(menuElement: HTMLElement): void {
  menuElement.innerHTML = ""; // Clear existing menu items

  routes.forEach((route) => {
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
}
