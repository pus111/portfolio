/*----------------- 헷갈림 방지선 -----------------*/

// 햄버거 클릭 시 메뉴 토글
const ham = document.querySelector(".ham");
const gnb = document.querySelector(".gnb");

ham.addEventListener("click", () => {
  gnb.classList.toggle("open");
});

// 모바일용 서브 메뉴 클릭 열기 (선택사항)
document.querySelectorAll(".gnb > ul > li > a").forEach((menu) => {
  menu.addEventListener("click", (e) => {
    const parentLi = e.target.parentElement;
    const sub = parentLi.querySelector(".sub");
    if (sub) {
      e.preventDefault();
      sub.classList.toggle("open");
    }
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
