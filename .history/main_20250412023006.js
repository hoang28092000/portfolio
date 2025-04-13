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
    event.preventDefault(); // Ngăn chặn hành vi mặc định của form (gửi đi)
    const formData = new FormData(form); // Tạo đối tượng FormData từ form
    const data = Object.fromEntries(formData.entries()); // Chuyển đổi FormData thành đối tượng JavaScript
    console.log(data); // In ra dữ liệu trong console
    form.reset(); // Đặt lại giá trị của các trường trong form
    alert("Gửi thành công !"); // Hiển thị thông báo gửi thành công
}


