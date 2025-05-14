// import MarkdownIt from "markdown-it";
// import matter from "gray-matter";

// export default function mdPlugin() {
//   const md = new MarkdownIt();

//   return {
//     name: "md-transform",
//     transform(src: string, id: string) {
//       if (!id.endsWith(".md")) return null;

//       const { content, data } = matter(src);
//       const html = md.render(content);

//       return {
//         code: `export default ${JSON.stringify(html)};
//                export const metadata = ${JSON.stringify(data)};`,
//       };
//     },
//   };
// }


import MarkdownIt from "markdown-it";
import hljs from "highlight.js";
import matter from "gray-matter";

export default function mdPlugin() {
  const md = new MarkdownIt({
    highlight(code, lang) {
      if (lang && hljs.getLanguage(lang)) {
        return hljs.highlight(code, { language: lang }).value;
      }
      return ''; // Fallback for unknown languages
    },
    langPrefix: 'hljs language-', // required for highlight.js CSS to apply
  });

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
