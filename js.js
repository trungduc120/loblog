// Theme toggle
const root = document.documentElement;
const key = "blog_lo_theme";
function toggleTheme() {
  const dark = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", dark ? "light" : "dark");
  localStorage.setItem(key, dark ? "light" : "dark");
  document.getElementById("themeBtn").textContent = dark ? "🌙 Dark" : "🌞 Light";
}
(function initTheme() {
  const saved = localStorage.getItem(key);
  if (saved === "dark") root.setAttribute("data-theme", "dark");
  document.getElementById("themeBtn").textContent =
    root.getAttribute("data-theme") === "dark" ? "🌞 Light" : "🌙 Dark";
})();

// Pages
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Comments
function addComment() {
  const input = document.getElementById("commentInput");
  const list = document.getElementById("commentList");
  const text = input.value.trim();
  if (!text) return;
  const div = document.createElement("div");
  div.className = "comment";
  div.textContent = text;
  list.prepend(div);
  input.value = "";
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

