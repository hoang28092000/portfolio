const menu = document.querySelector(".menu");
const toggle = document.querySelector("#menu-bar");
const closeMenu = document.querySelector("#close-menu");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu() {
  menu.classList.add("active");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  if (!menu.contains(event.target) && !event.target.matches("#menu-bar")) {
    menu.classList.remove("active");
  }
closeMenu.addEventListener("click", function() {
  menu.classList.remove("active");
});
}

const topHeader = document.querySelector('.top-header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    topHeader.classList.add('scrolled');
  } else {
    topHeader.classList.remove('scrolled');
  }
});

const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("🎉 Gửi thành công! (Demo thôi không gửi thật nha 😄)");
});


