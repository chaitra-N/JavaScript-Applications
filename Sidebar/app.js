const toggleBtn = document.querySelector(".sidebar-toggle");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggleBtn.addEventListener("click", function () {
  sideBar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  // if (sideBar.classList.contains("show-sidebar")) {
  //   sideBar.classList.remove("show-sidebar");
  // }
  sideBar.classList.remove("show-sidebar");
});
