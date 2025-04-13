const menu = document.querySelector(".nav-list");
const toggle = document.querySelector("#menu-header");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu(){
    menu.classList.add("show");
}
document.addEventListener("click" , handleClickOutMenu);
function handleClickOutMenu(event){
    if(!menu.contains(event.target) && !event.target.matches("#menu-header")){
        menu.classList.remove("show")
    }
}

// form


