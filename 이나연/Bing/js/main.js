const slider = document.querySelector(".slider");
const items = document.querySelectorAll(".item");

let index = 0; // 현재 슬라이드 위치
const itemWidth = 240; // 이미지+간격 포함한 대략 너비 (200px + gap)

// 왼쪽 화살표 클릭
document.querySelector(".arrow_left").addEventListener("click", () => {
  if (index > 0) {
    index--;
    slider.style.transform = `translateX(-${index * itemWidth}px)`;
  }
});

// 오른쪽 화살표 클릭
document.querySelector(".arrow_rig").addEventListener("click", () => {
  if (index < items.length - 4) {
    index++;
    slider.style.transform = `translateX(-${index * itemWidth}px)`;
  }
});
