---
title:  Installation
---

Great! Let's now **configure Vite** to use our custom Markdown plugin (`mdPlugin`) in the `vite.config.ts` file.

---

## 🛠️ Step 2: Configure Vite with Our Markdown Plugin

We'll create and set up the `vite.config.ts` file to:

1. Define Vite settings like root folder and dev port.
2. Use the Markdown plugin we created.
3. Specify how to build the site.

---

### 📄 `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import path from 'path';
import mdPlugin from './src/md-plugin';

export default defineConfig({
  root: 'src', // this tells Vite to look inside the src folder
  plugins: [mdPlugin()],
  server: {
    port: 5174
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'public/index.html')
    }
  }
});
```

---

### ✅ What’s Happening Here:

| Part                    | Description                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| `root: 'src'`           | We're treating `src/` as the source folder, so Vite serves files from here. |
| `plugins: [mdPlugin()]` | We're injecting our custom Markdown-to-HTML plugin.                         |
| `server.port`           | Dev server will run at [http://localhost:5174](http://localhost:5174)       |
| `build.outDir`          | Final static site goes into `dist/` when you run `vite build`.              |
| `rollupOptions.input`   | We specify the main HTML entry (from the `public/` folder).                 |

---

**✅ Next Step:**
Now that Vite is configured with our plugin, the next thing we’ll do is set up the HTML template in `public/index.html`.

Shall we proceed to that?



Perfect — thanks for confirming!

Let’s now continue with building **Qyro JS** from scratch, step by step, in TypeScript — and we’ll make sure `index.html` lives inside the `src/` directory so Vite can process it properly.

---

### ✅ **Step 1: Project Initialization**

Let’s first set up a new TypeScript + Vite project structure manually.

#### 1. Create the folder and initialize the project:

```bash
mkdir qyro
cd qyro
npm init -y
```

#### 2. Install required dependencies:

```bash
npm install vite markdown-it
npm install --save-dev typescript @types/node
```

> We’re using:
>
> * `vite`: to serve the dev app and build static files
> * `markdown-it`: to convert `.md` files into HTML

#### 3. Set up TypeScript configuration:

Create a `tsconfig.json` file at the root:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "jsx": "preserve",
    "resolveJsonModule": true,
    "baseUrl": "./src",
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

---

### 📁 Folder Structure at This Stage:

```
qyro/
├── src/
│   └── index.html       ← will create next
├── tsconfig.json
├── package.json
```

---

✅ **Let me know once you've done this setup**, and then we’ll move to:

> 🔜 **Step 2: Create `src/index.html` with a basic structure and placeholder for sidebar + main content.**



Perfect — thanks for confirming!

Let’s now continue with building **Qyro JS** from scratch, step by step, in TypeScript — and we’ll make sure `index.html` lives inside the `src/` directory so Vite can process it properly.

---

### ✅ **Step 1: Project Initialization**

Let’s first set up a new TypeScript + Vite project structure manually.

#### 1. Create the folder and initialize the project:

```bash
mkdir qyro
cd qyro
npm init -y
```

#### 2. Install required dependencies:

```bash
npm install vite markdown-it
npm install --save-dev typescript @types/node
```

> We’re using:
>
> * `vite`: to serve the dev app and build static files
> * `markdown-it`: to convert `.md` files into HTML

#### 3. Set up TypeScript configuration:

Create a `tsconfig.json` file at the root:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true,
    "jsx": "preserve",
    "resolveJsonModule": true,
    "baseUrl": "./src",
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

---

### 📁 Folder Structure at This Stage:

```
qyro/
├── src/
│   └── index.html       ← will create next
├── tsconfig.json
├── package.json
```

---

✅ **Let me know once you've done this setup**, and then we’ll move to:

> 🔜 **Step 2: Create `src/index.html` with a basic structure and placeholder for sidebar + main content.**
