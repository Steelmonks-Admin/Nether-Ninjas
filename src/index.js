// ! Webpack
import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());

// ! Siema
import Siema from "siema";
new Siema({
  selector: ".siema",
  duration: 200,
  easing: "ease-out",
  perPage: 1,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: false,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

// ! Header - open menu modal
const headerMenu = document.querySelector(".header__navigation--mobile");
const headerMenuButton = document.querySelector(".header__menu");
const headerMenuCloseButton = document.querySelector(
  ".header__navigation--mobile button"
);
headerMenuButton.addEventListener("click", () => {
  headerMenu.style.right = 0;
});
headerMenuCloseButton.addEventListener("click", () => {
  headerMenu.style.right = "100%";
});

// ! Header - hero section observer
// Select the header element
const header = document.querySelector(".header");
if (homepage) {
  header.classList.remove("header--default");
}

// Function to handle scroll events
const handleScroll = () => {
  if (window.scrollY > window.innerHeight) {
    // If scrolled past 50px, add the class
    header.classList.add("header--default");
  } else {
    // If not scrolled past 50px, remove the class
    header.classList.remove("header--default");
  }
};

// Add scroll event listener to window
window.addEventListener("scroll", handleScroll);

// ! Marquee text
