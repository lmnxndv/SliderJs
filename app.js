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

function autoSlide(){
  interval= setInterval(nextSlide,4000)
}

function stopInterval(){
  clearInterval(interval) 
}

window.addEventListener("load", () => {
  autoSlide();
});

function nextSlide() {
  if (carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth) {
    carousel.scrollLeft += contentWidth;
  } else {
    carousel.scrollLeft = 0;
  }
  sliderCount++;
  thisSlide(sliderCount);
  stopInterval()
}

function prevSlide() {
  if (carousel.scrollLeft > 0) {
    carousel.scrollLeft -= contentWidth;
  } else {
    carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
  }
  sliderCount--;
  thisSlide(sliderCount);
  stopInterval()
}

function thisSlide(index) {
  pagination.forEach((item) => item.classList.remove("active"));
  pagination[index].classList.add("active");
}

