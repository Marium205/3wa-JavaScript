import { user } from "./data.js";
import { fillArticle } from "./render.js";
window.addEventListener("DOMContentLoaded", () => {
  fillArticle("user-profile", user);
});