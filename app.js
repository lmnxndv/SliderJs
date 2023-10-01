const container = document.querySelector(".container");
const carousel = document.querySelector(".carousel");
const sliderLine = document.querySelectorAll(".slider-line");
const contentWidth = carousel.querySelector(".slider-line").offsetWidth;
const pagination = document.querySelectorAll(".page");
const prevBtn = document.querySelector("#left");
const nextBtn = document.querySelector("#right");
let sliderCount = 0;
let interval;

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

function autoSlide() {
  interval = setInterval(nextSlide, 2000);
}
autoSlide();

function stopInterval() {
  clearInterval(interval);
}

container.addEventListener("mouseenter", stopInterval);
container.addEventListener("mouseleave", autoSlide);

function nextSlide() {
  if (carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth) {
    carousel.scrollLeft += contentWidth;
  } else {
    carousel.scrollLeft = 0;
  }
  sliderCount++;
  if (sliderCount > sliderLine.length - 1) {
    sliderCount = 0;
  }
  thisSlide(sliderCount);
}

function prevSlide() {
  if (carousel.scrollLeft > 0) {
    carousel.scrollLeft -= contentWidth;
  } else {
    carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
  }
  sliderCount--;
  if (sliderCount < 0) {
    sliderCount = sliderLine.length - 1;
  }
  thisSlide(sliderCount);
}

function thisSlide(index) {
  pagination.forEach((item) => item.classList.remove("active"));
  pagination[index].classList.add("active");
}

pagination.forEach((page, index) => {
  page.addEventListener("click", () => {
    sliderCount = index;
    thisSlide(sliderCount);
    carousel.scrollLeft = index * contentWidth;
  });
});
