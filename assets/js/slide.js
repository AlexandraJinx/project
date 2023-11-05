//Видимая часть слайдера 800рх
let viewport = document.getElementById('slider__viewport').offsetWidth;
//Кнопка вперед
let btnNext = document.getElementById('slider__control-next');
//Кнопка назад
let btnPrev = document.getElementById('slider__control-prev');
//Сам слайдер со слайдами
let slider = document.querySelector('div.slider');
//Получаем элементы для показа слайда
let viewSliders = document.querySelectorAll('.viewSlide');
// Объявляем переменную для номера слайда и инициализации (запуска)
let viewSlide = 0;

viewSliders[0].style.backgroundColor = "#ffef00";

btnNext.addEventListener("click", function () {
    viewSliders[viewSlide].style.backgroundColor = 'gray';
    if (viewSlide < 5) {
        viewSlide++;
    } else {
        viewSlide = 0;
    }
    viewSliders[viewSlide].style.backgroundColor = '#ffef00';
    slider.style.left = -viewSlide * viewport + 'px';
});

btnPrev.addEventListener('click', function () {
    viewSliders[viewSlide].style.backgroundColor = 'gray';
    if (viewSlide > 0) {
        viewSlide--;
    } else {
        viewSlide = 5;
    }
    viewSliders[viewSlide].style.backgroundColor = '#ffef00';
    slider.style.left = -viewSlide * viewport + 'px';
});


