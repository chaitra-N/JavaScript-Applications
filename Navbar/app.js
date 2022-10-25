const navBar = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
//const showLinks = document.querySelector(".show-links");

/// we will breusing class list to dd the show-links class  to the links class

navBar.addEventListener("click", function () {
  // if (links.classList.contains("show-links")) {
  //   links.classList.remove("show-links");
  // } else {
  //   links.classList.add("show-links");
  // }
  // an oneline effective way to do this is by using the toggle method
  links.classList.toggle("show-links");
});
