const sliderContainerEl = document.querySelector(".slider-container");

const imageContainerEl = document.querySelector(".image-container");

const prevEl = document.querySelector(".prev");
const nextEl = document.querySelector(".next");

const imgsEl = document.querySelectorAll("img");
let timeout;
let currentImage = 1;
nextEl.addEventListener("click", () => {
  currentImage++;
  clearTimeout(timeout);
  changeImage();
});
prevEl.addEventListener("click", () => {
  currentImage--;
  clearTimeout(timeout);
  changeImage();
});
changeImage();
function changeImage() {
  if (currentImage > imgsEl.length) {
    currentImage = 1;
  } else if (currentImage < 1) {
    currentImage = imgsEl.length;
  }
  imageContainerEl.style.transform = `translate(-${
    500 * (currentImage - 1)
  }px)`;
  timeout = setTimeout(() => {
    currentImage++;
    changeImage();
  }, 3000);
}
