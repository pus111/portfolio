const mallBtn = document.getElementById("mall_btn");
const footer = document.getElementById("max_footer");

function toggleMallBtn() {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight) {
    mallBtn.classList.add("hide");
  } else {
    mallBtn.classList.remove("hide");
  }
}

window.addEventListener("scroll", toggleMallBtn);
window.addEventListener("resize", toggleMallBtn);
window.addEventListener("load", toggleMallBtn);
