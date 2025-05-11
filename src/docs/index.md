---
title: Getting Started
---

# ✅ 1. Install Tailwind CSS & Dependencies

From your project root, run:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This will create two new files:

* `tailwind.config.js`
* `postcss.config.js`

---

### ✅ 2. Configure Tailwind

**Edit `tailwind.config.js`:**

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,ts,js,md}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

This tells Tailwind to scan all relevant files (HTML, TypeScript, Markdown) in your `src/` directory.

---

### ✅ 3. Create Your CSS File

Inside `src/styles/main.css`, replace its contents with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You’ve already linked this file in `index.html`:

```html
<link rel="stylesheet" href="/styles/main.css" />
```

So you’re all set.

---

### ✅ 4. Test Tailwind

Now try this inside your `index.html` or `main.ts`:

```html
<div class="text-2xl text-blue-600 font-bold">Tailwind is working!</div>
```

Or in `main.ts`:

```ts
document.getElementById("app")!.innerHTML = `
  <h1 class="text-3xl font-bold text-indigo-500">Hello from Qyro JS!</h1>
`;
```

---

Let me know when you're done with this, and we’ll proceed to style the layout or render markdown beautifully.
