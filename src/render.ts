import routes from "./router";
import config from "./qyro.config";
import { renderStudio } from "./studio";

const docElement = document.getElementById("doc");

export async function renderPage(pathname: string) {
  const route = routes.find((r) => r.path === pathname);
  if (!route || !docElement) {
    docElement!.innerHTML = "<h1>404 - Page Not Found</h1>";
    return;
  }

  if (window.location.pathname === "/studio") {
    renderStudio(docElement);
  }

  const mod = await route.doc();
  const { default: html, metadata } = mod as {
    default: string;
    metadata?: { title?: string };
  };

  docElement.innerHTML = html;
  document.title = metadata?.title
    ? `${metadata.title} | ${config.title}`
    : config.title;
}
