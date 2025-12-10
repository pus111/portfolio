const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item");

let index = 0;

// ⭐ 아이템 실제 너비(px) 자동 계산
const itemWidth = items[0].offsetWidth;

// ⭐ slider에 gap이 있으면 자동 계산
const sliderStyle = window.getComputedStyle(slider);
const gap = parseInt(sliderStyle.gap) || 0;

// ⭐ 최종 이동 간격
const moveWidth = itemWidth + gap;

// ⭐ 화면에 몇 개 보이는지 자동 체크
const sliderWrap = document.querySelector(".slider_wrap");
const visibleCount = Math.floor(sliderWrap.offsetWidth / moveWidth);

// ⭐ 마지막 index 정확하게 계산
const maxIndex = items.length - visibleCount;

// 왼쪽
document.querySelector(".arrow_left").addEventListener("click", () => {
  if (index > 0) {
    index--;
    slider.style.transform = `translateX(-${index * moveWidth}px)`;
  }
});

// 오른쪽
document.querySelector(".arrow_rig").addEventListener("click", () => {
  if (index < maxIndex) {
    index++;
    slider.style.transform = `translateX(-${index * moveWidth}px)`;
  }
});
