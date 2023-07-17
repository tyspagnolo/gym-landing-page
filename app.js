function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
}

function hamMenu() {
  let btn = document.getElementById("ham-btn");
  let navList = document.getElementById("navList");
  navList.classList.toggle("active");
}
