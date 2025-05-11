import routes from "./router";

const appElement = document.getElementById("doc");

export async function renderPage(pathname: string) {
  const route = routes.find((r) => r.path === pathname);
  if (!route || !appElement) {
    appElement!.innerHTML = "<h1>404 - Page Not Found</h1>";
    return;
  }

  const mod = await route.doc();
  const { default: html, metadata } = mod as {
    default: string;
    metadata?: { title?: string };
  };

  appElement.innerHTML = html;
  document.title = metadata?.title ? `${metadata.title} | Qyro JS` : "Qyro JS";
}
