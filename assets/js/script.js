/**
 * #PRELOAD
 */
const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * #SIDEBAR
 */
const body = document.querySelector("body");
const sidebar = body.querySelector(".sidebar");
const toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

const change = document.getElementById("myIcon");

change.addEventListener("click", () => {
  // Toggle between "menu-outline" and "close-outline"
  const currentName = change.getAttribute("name");
  change.setAttribute(
    "name",
    currentName === "menu-outline" ? "close-outline" : "menu-outline"
  );
});

const menuItems = document.querySelectorAll(".nav-link");

menuItems.forEach((item) => {
  const link = item.querySelector("a");

  // Check if the link's href matches the current page URL
  if (link.href === window.location.href) {
    item.classList.add("active");
  }

  link.addEventListener("click", (event) => {
    // Remove 'active' class from all items
    menuItems.forEach((innerItem) => {
      innerItem.classList.remove("active");
    });

    // Add 'active' class to the clicked item
    item.classList.add("active");
  });
});
