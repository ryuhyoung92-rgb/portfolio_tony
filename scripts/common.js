// common.js
const productSwiper = document.querySelectorAll('.container .list_container .swiper');

console.log(productSwiper);

/* const bestSwiper = new Swiper(productSwiper[0],{
    slidesPerView:'auto',
    spaceBetween:30,
    slidesPerGroup:4,
    pagination:{
        el:'.list_container .swiper .swiper-pagination',
    }
}) */

// index 제품 스와이퍼 JS
function initSwiper(target){
    return new Swiper(target, {
        slidesPerView:'auto',
        spaceBetween:30,
        slidesPerGroup:4,
        pagination:{
            el:'.list_container .swiper .swiper-pagination',
        },
    // swiper navigation
        navigation:{
            prevEl:'.swiper .control_bar .prev',
            nextEl:'.swiper .control_bar .next',
        },
    }
    )};

initSwiper(productSwiper[0]);
initSwiper(productSwiper[1]);
initSwiper(productSwiper[2]);

