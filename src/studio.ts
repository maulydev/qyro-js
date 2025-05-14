// src/studio.ts
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export function renderStudio(container: HTMLElement) {
  container.innerHTML = `
    <div class="flex items-center justify-between mb-4">
        <p class="block text-2xl font-bold">MD Studio</p>
        <button id="save-btn" class="cursor-pointer px-4 py-2 bg-blue-600 text-white rounded">Save Markdown</button>
    </div>
    <div id="editor"></div>
  `;

  const editorEl = document.getElementById("editor")!;
  const saveBtn = document.getElementById("save-btn")!;

  const editor = new Editor({
    el: editorEl,
    height: "800px",
    initialEditType: "markdown",
    previewStyle: "vertical",
  });

  saveBtn.addEventListener("click", () => {
    const markdown = editor.getMarkdown();
    console.log("📝 Markdown content:", markdown);

    // In future step: Save to file (during dev only)
  });
}
