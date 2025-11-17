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

var tabBtns = document.querySelectorAll(".right ul li");
var panels = document.querySelectorAll(".leftwrap .left");

tabBtns.forEach(function (btn, index) {
  btn.addEventListener("click", function () {
    // 버튼 on 클래스 초기화
    tabBtns.forEach(function (b) {
      b.classList.remove("on");
    });

    // 패널 active 클래스 초기화
    panels.forEach(function (p) {
      p.classList.remove("active");
    });

    // 클릭한 버튼 & 같은 인덱스의 패널 활성화
    btn.classList.add("on");
    panels[index].classList.add("active");
  });
});
