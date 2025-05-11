// On page load or when changing themes, best to add inline in `head` to avoid FOUC
document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
);

document.getElementById("theme-button")?.addEventListener("click", () => {
  if (document.documentElement.classList.value == "dark") {
    localStorage.theme = "light";
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }
});
