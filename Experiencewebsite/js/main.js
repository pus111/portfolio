let gnb = document.querySelectorAll(".menu-center > li");
let sub = document.querySelectorAll(".menu-center > li .sub");
gnb.forEach(function (v, k) {
  v.onmouseenter = function () {
    document.querySelector(".main-header").style.height = "300px";
    sub.forEach(function (v) {
      v.classList.add("on");
    });
  };
  v.onmouseleave = function () {
    document.querySelector(".main-header").style.height = "100px";
    sub.forEach(function (v) {
      v.classList.remove("on");
    });
  };
});
