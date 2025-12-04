// let gnb = document.querySelectorAll(".menu-center > li");
// let sub = document.querySelectorAll(".menu-center > li .sub");
// gnb.forEach(function (v, k) {
//   v.onmouseenter = function () {
//     document.querySelector(".main-header").style.height = "300px";
//     sub.forEach(function (v) {
//       v.classList.add("on");
//     });
//   };
//   v.onmouseleave = function () {
//     document.querySelector(".main-header").style.height = "100px";
//     sub.forEach(function (v) {
//       v.classList.remove("on");
//     });
//   };
// });

// var tabBtns = document.querySelectorAll(".right ul li");
// var panels = document.querySelectorAll(".leftwrap .left");

// panels[0].classList.add("active");
// tabBtns.forEach(function (btn, index) {
//   btn.addEventListener("click", function () {
//     // 버튼 on 클래스 초기화
//     tabBtns.forEach(function (b) {
//       b.classList.remove("on");
//     });

//     // 패널 active 클래스 초기화
//     panels.forEach(function (p) {
//       p.classList.remove("active");
//     });

//     // 클릭한 버튼 & 같은 인덱스의 패널 활성화
//     btn.classList.add("on");
//     panels[index].classList.add("active");
//   });
// });

// const tabs = document.querySelectorAll(".tabs ul li");
// const contents = document.querySelectorAll(".tab-content");

// // 첫 번째 탭 자동 선택
// tabs[0].classList.add("on");
// contents[0].classList.add("show");

// tabs.forEach((tab, index) => {
//   tab.addEventListener("click", () => {
//     // 탭 스타일
//     tabs.forEach((t) => t.classList.remove("on"));
//     tab.classList.add("on");

//     // 콘텐츠 표시
//     contents.forEach((c) => c.classList.remove("show"));
//     contents[index].classList.add("show");
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabs ul li");
  const contents = document.querySelectorAll(".tab-content");

  // 기본 첫 번째 탭 활성화
  tabs[0].classList.add("on");
  contents[0].classList.add("show");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("on"));
      contents.forEach((c) => c.classList.remove("show"));

      tab.classList.add("on");
      contents[index].classList.add("show");
    });
  });
});
