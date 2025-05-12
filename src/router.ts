type Route = {
  path: string;
  doc: () => Promise<{ default: string }>;
  meta?: { title?: string; order: number };
};

const pages = import.meta.glob("./docs/*.md", { eager: true }) as Record<
  string,
  { metadata?: { title?: string; order: number }; default: string }
>;

let routes: Route[] = [];

for (const path in pages) {
  const file = pages[path];
  const routePath = path.replace("./docs/", "/").replace(".md", "");
  routes.push({
    path: routePath === "/index" ? "/" : routePath,
    doc: async () => ({ default: file.default }),
    meta: {
      title: file.metadata?.title,
      order: file.metadata?.order || 0,
    },
  });
  console.log("path:", path.replace("./docs/", "/").replace(".md", ""));
}

export default routes;
