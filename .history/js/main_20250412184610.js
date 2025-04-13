const menu = document.querySelector(".menu");
const toggle = document.querySelector("#menu-header");
toggle.addEventListener("click", handleToggleMenu);
function handleToggleMenu() {
  menu.classList.add("show");
}
document.addEventListener("click", handleClickOutMenu);
function handleClickOutMenu(event) {
  if (!menu.contains(event.target) && !event.target.matches("#menu-header")) {
    menu.classList.remove("show");
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
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Không cho gửi đi đâu cả

  // Giả lập xử lý thành công
  alert("🎉 Gửi thành công! (Demo thôi không gửi thật nha 😄)");
});

// thay đổi content
// function loadContent(page) {
//   const content = document.getElementById("content-area");

//   if (page === "about") {
//     content.innerHTML = `
//        <div class="container">
//        <div class="contact">
//         <h2 class="title-heading title-contact">Liên hệ</h2>
//         <div class="content-contact">
//           <div class="contact-left">
//             <div class="logo-contact">
//               <img
//                 src="../asset/image/hoangVu_logo.png"
//                 alt="logo"
//                 class="img-logo-contact"
//               />
//             </div>

//             <div class="info-contact">
//               <p class="txt-contact">Họ và tên: Vũ Đình Hoàng</p>
//               <p class="txt-contact">Địa chỉ: Thạch Thất - Hà Nội</p>
//               <p class="txt-contact">Email: hvu6097@gmail.com</p>
//               <p class="txt-contact">Số điện thoại: 0968 026 400</p>
//             </div>
//             <p class="txt-contact">Mạng xã hội:</p>
//             <div class="social-contact">  
//               <a
//                 href="https://www.facebook.com/profile.php?id=100008725181742"
//                 target="_blank"
//                 ><i class="fa-brands fa-facebook-f icon-contact"></i
//               ></a>
//               <a href="https://x.com/kinsman2809" target="_blank"
//                 ><i class="fa-brands fa-x-twitter icon-contact"></i
//               ></a>
//               <a
//                 href="https://www.linkedin.com/in/ho%C3%A0ng-v%C5%A9-0b4891179/"
//                 target="_blank"
//                 ><i class="fa-brands fa-linkedin-in icon-contact"></i
//               ></a>
//               <a href="https://zalo.me/0968026400" target="_blank">
//                 <img src="../asset/image/icon-zalo.png" alt="zalo" class="img-social-contact">
//               </a>
//             </div>
//           </div>

//           <div class="contact-right">
//             <h3 class="title-contact-form">Gửi tin nhắn cho tôi</h3>
//             <form action="" class="form-contact">
//               <div class="input-contact">
//                 <label for="name" class="label-contact">Họ và tên</label>
//                 <input type="text" id="name" placeholder="Nhập họ và tên" class="input-field" required />
//               </div>
//               <div class="input-contact">
//                 <label for="email" class="label-contact">Email</label>
//                 <input type="email" id="email" placeholder="Nhập Email" class="input-field" required />
//               </div>
//               <div class="input-contact">
//                 <label for="message" class="label-contact">Tin nhắn</label>
//                 <textarea
//                   name="message"
//                   id="message" placeholder="Nhập tin nhắn"
//                   cols="30"
//                   rows="10"
//                   class="input-field"
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" class="btn-submit">Gửi</button>
//             </form>
//           </div>
//         </div>
//        </div>
//       </div>
//     `;
//   }
//   // Thêm các phần khác như "skills", "contact" nếu cần
// }