/*----------------- 헷갈림 방지선 -----------------*/

document.addEventListener("DOMContentLoaded", () => {
  const ham = document.querySelector(".ham");
  const menu = document.querySelector(".all_menu");
  const close = document.querySelector(".menu_close");

  if (ham && menu) {
    ham.addEventListener("click", () => {
      menu.classList.add("active");
    });
  }

  if (close && menu) {
    close.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  }
});

/*----------------- 헷갈림 방지선 -----------------*/

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.querySelector(".hamburger");
  const allMenu = document.querySelector(".all_menu");
  const closeBtn = document.querySelector(".menu_close");

  // 햄버거 버튼 클릭 → 전체메뉴 열기
  hamburgerBtn.addEventListener("click", function () {
    allMenu.classList.add("active");
  });

  // X 버튼 클릭 → 전체메뉴 닫기
  closeBtn.addEventListener("click", function () {
    allMenu.classList.remove("active");
  });
});

/*----------------- 헷갈림 방지선 -----------------*/

/*행복한 빙그래의 맛 슬라이드 js*/
const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item");
const sliderWrap = document.querySelector(".slider_wrap");
const btnLeft = document.querySelector(".arrow_left");
const btnRight = document.querySelector(".arrow_rig");

let index = 0;

// 슬라이드 관련 계산
function updateSliderParams() {
  const itemWidth = items[0].offsetWidth;
  const sliderStyle = window.getComputedStyle(slider);
  const gap = parseInt(sliderStyle.gap) || 0;
  const moveWidth = itemWidth + gap;

  const visibleCount = Math.floor(sliderWrap.offsetWidth / moveWidth);
  const totalWidth = items.length * moveWidth - gap;
  const maxTranslate = Math.max(0, totalWidth - sliderWrap.offsetWidth);

  return { moveWidth, visibleCount, maxTranslate };
}

// 슬라이드 이동
function moveSlider() {
  const { moveWidth, maxTranslate } = updateSliderParams();

  let translateX = index * moveWidth;
  if (translateX < 0) translateX = 0;
  if (translateX > maxTranslate) translateX = maxTranslate;

  slider.style.transform = `translateX(-${translateX}px)`;
}
