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
// const form = document.querySelector(".form-contact");
// form.addEventListener("submit",  handleSubmitForm);
// function handleSubmitForm(event){
//     event.preventDefault();
//     const formData = new FormData(form);
//     const data = Object.fromEntries(formData.entries());
//     console.log(data);
//     form.reset();
//     alert("Gửi thành công !");

// }
const form = document.querySelector(".form-contact");
form.addEventListener("submit", handleSubmitForm);
function handleSubmitForm(event) {
    event.


