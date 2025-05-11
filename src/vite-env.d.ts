/// <reference types="vite/client" />

declare module "*.md" {
  const metadata: {
    title?: string;
  };
  const html: string;
  export { metadata };
  export default html;
}