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

/* 메인 메뉴 요소 */
const menuItems = document.querySelectorAll(".depth1 > li");

/* 서브 배경 */
const subBg = document.querySelector(".sub-bg");

/* 모든 서브 메뉴 */
const subMenus = document.querySelectorAll(".sub-menu");

/* 메뉴 hover */
menuItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const target = item.getAttribute("data-menu");

    // 전체 서브메뉴 숨김
    subMenus.forEach((sub) => sub.classList.remove("active"));

    // 해당 서브메뉴만 표시
    const activeMenu = document.querySelector(
      `.sub-menu[data-target="${target}"]`
    );
    if (activeMenu) activeMenu.classList.add("active");

    // 배경 펼치기
    subBg.classList.add("active");
  });
});

/* 헤더 영역에서 마우스가 나가면 서브 닫기 */
document.querySelector(".header").addEventListener("mouseleave", () => {
  subBg.classList.remove("active");
  subMenus.forEach((m) => m.classList.remove("active"));
});
