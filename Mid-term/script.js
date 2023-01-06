// documentQue(function () {
//responsive menu toggle
//   $("#menutoggle").click(function () {
//     $(".xs-menu").toggleClass("displaynone");
//   });
//   //add active class on menu
//   $("ul li").click(function (e) {
//     e.preventDefault();
//     $("li").removeClass("active");
//     $(this).addClass("active");
//   });

const standPulldown = document.querySelector(".stand-pulldown-menu");
// dropdown menu
document.querySelector(".dropdown").addEventListener("mouseover", function () {
  standPulldown.classList.add("display-on");
});
const wallPulldown = document.querySelector(".wall-pulldown-menu");
// dropdown menu
document.querySelector(".dropdown2").addEventListener("mouseover", function () {
  wallPulldown.classList.add("display-on");
});
const signPulldown = document.querySelector(".sign-pulldown-menu");
// dropdown menu
document.querySelector(".dropdown3").addEventListener("mouseover", function () {
  signPulldown.classList.add("display-on");
});
// document.querySelectorAll("dropdown").forEach(function (item) {
//   item.addEventListener("mouseover", function () {
//     standPulldown.classList.add("display-on");
//   });
// });
document.querySelector(".dropdown").addEventListener("mouseleave", function () {
  standPulldown.classList.remove("display-on");
});
document
  .querySelector(".dropdown2")
  .addEventListener("mouseleave", function () {
    wallPulldown.classList.remove("display-on");
  });
document
  .querySelector(".dropdown3")
  .addEventListener("mouseleave", function () {
    signPulldown.classList.remove("display-on");
  });
// });
// });

// document.querySelector(".dropdown2").addEventListener("mouseover", function () {
//   standPulldown.classList.add("display-on");
// });
// document.querySelector(".dropdown3").addEventListener("mouseover", function () {
//   standPulldown.classList.add("display-on");
// });
// document
//   .querySelector(".dropdown2")
//   .addEventListener("mouseleave", function () {
//     standPulldown.classList.remove("display-on");
//   });
// document
//   .querySelector(".dropdown3")
//   .addEventListener("mouseleave", function () {
//     standPulldown.classList.remove("display-on");
//   });

const btnScrollTo = document.querySelector(".scrolldownbtn");

btnScrollTo.addEventListener("click", function (e) {
  document.querySelector("#scrollto").scrollIntoView({ behavior: "scroll" });
});
