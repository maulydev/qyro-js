type Route = {
    path: string;
    doc: () => Promise<{ default: string }>;
    meta?: { title?: string };
  };
  
  const pages = import.meta.glob("./docs/*.md", { eager: true }) as Record<
    string,
    { metadata?: { title?: string }; default: string }
  >;
  
  let routes: Route[] = [];
  
  for (const path in pages) {
    const file = pages[path];
    routes.push({
      path: path.replace("./docs/", "/").replace(".md", ""),
      doc: async () => ({ default: file.default }),
      meta: file.metadata,
    });
  }
  
  export default routes;
  