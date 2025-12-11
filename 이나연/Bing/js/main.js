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

// 버튼 이벤트
btnLeft.addEventListener("click", () => {
  index--;
  moveSlider();
});
btnRight.addEventListener("click", () => {
  index++;
  moveSlider();
});

// 반응형
window.addEventListener("resize", moveSlider);

// 초기 위치
window.addEventListener("load", () => {
  index = 0;
  moveSlider();
});
