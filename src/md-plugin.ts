import MarkdownIt from "markdown-it";
import matter from "gray-matter";

export default function mdPlugin() {
  const md = new MarkdownIt();

  return {
    name: "md-transform",
    transform(src: string, id: string) {
      if (!id.endsWith(".md")) return null;

      const { content, data } = matter(src);
      const html = md.render(content);

      return {
        code: `export default ${JSON.stringify(html)};
               export const metadata = ${JSON.stringify(data)};`,
      };
    },
  };
}
