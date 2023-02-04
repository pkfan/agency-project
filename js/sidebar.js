const sidebar = document.querySelector("#sidebar");
const html = document.querySelector("html");
const sidebarIcon = document.querySelector("#sidebar-icon");
const closeSidebar = document.querySelector("#close-sidebar");
const bodyOverlayDark = document.querySelector("#body-overlay-dark");

sidebarIcon.addEventListener("click", () => {
  sidebar.classList.remove("-left-[330px]");
  sidebar.classList.add("left-0");
  closeSidebar.classList.remove("-left-[330px]");
  closeSidebar.classList.add("left-[260px]");

  html.classList.add("overflow-hidden-html");
  bodyOverlayDark.classList.remove("hidden");
});
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("left-0");
  sidebar.classList.add("-left-[330px]");
  closeSidebar.classList.add("-left-[330px]");
  closeSidebar.classList.remove("left-[260px]");
  html.classList.remove("overflow-hidden-html");
  bodyOverlayDark.classList.add("hidden");
});
