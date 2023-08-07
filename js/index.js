// slider
const sliderImages = document.querySelectorAll('.slider__img'),
   sliderLine = document.querySelector('.slider__line'),
   sliderDots = document.querySelectorAll('.slider__dot'),
   sliderBtnNext = document.querySelector('.slider__btn-next'),
   sliderBtnPrev = document.querySelector('.slider__btn-prev');
let sliderCount = 0,
   sliderWidth;

// Адаптивность слайдера
window.addEventListener('resize', showSlide);

// Кнопки слайдера
sliderBtnNext.addEventListener('click', nextSlide);
sliderBtnPrev.addEventListener('click', prevSlide);

// автоматическое перелистывание слайдеров
setInterval(() => {
   nextSlide()
}, 8000);

// Задаем нужную ширину картинки под адаптив
function showSlide() {
   sliderWidth = document.querySelector('.slider').offsetWidth;
   sliderLine.style.width = sliderWidth * sliderImages.length + 'px';
   sliderImages.forEach(item => item.style.width = sliderWidth + 'px');
};
showSlide();
// перелистование слайдера вперед

function nextSlide() {
   sliderCount++;
   if (sliderCount >= sliderImages.length) sliderCount = 0;
   rollSlider();
   thisSlide(sliderCount);
}
// перелистование слайдера назад

function prevSlide() {
   sliderCount--;
   if (sliderCount < 0) sliderCount = sliderImages.length - 1;
   rollSlider();
   thisSlide(sliderCount);
}

// Шаг перемешения слайдеров

function rollSlider() {
   sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}
// Активный слайдер

function thisSlide(index) {
   sliderDots.forEach(item => item.classList.remove('slider__active-dot'));
   sliderDots[index].classList.add('slider__active-dot');
}

// Вешаем клик на dot

sliderDots.forEach((dot, index) => {
   dot.addEventListener('click', () => {
      sliderCount = index;
      rollSlider();
      thisSlide(sliderCount);
   });
});

// выпадающий список

// function myFunction() {
//    document.getElementById("myDropdown").classList.toggle("show");
// }
// window.onclick = function (event) {
//    if (!event.target.matches('.dropbtn')) {

//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//          var openDropdown = dropdowns[i];
//          if (openDropdown.classList.contains('show')) {
//             openDropdown.classList.remove('show');
//          }
//       }
//    }
// }

// плавный скрол
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
   smoothLink.addEventListener('click', function (e) {
      e.preventDefault();
      const id = smoothLink.getAttribute('href');

      document.querySelector(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });
   });
};
// показывать не показывать подскаску
function changeItem() {
   document.getElementById('one-two').style.display = 'block';
}
function rechangeItem() {
   document.getElementById('one-two').style.display = 'none';
}
