/*垂直滚动*/
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 1,
    mousewheel: true,
    pagination: {
        el: '.swiper-pagination-v',
        clickable: true,
    },
    on:{
        touchMove: function(event){
            if(swiper.activeIndex === 0){
                $('.platform-enter').addClass('platform-flex');
            }
        },
        transitionEnd: function(){
            if(swiper.activeIndex === 0){
                $('.platform-enter').removeClass('platform-flex').addClass('platform-enter-active');
                setTimeout(function(){
                    $('.platform-enter').removeClass('platform-enter-active');
                },1000);
            } else {
                $('.platform-enter').addClass('platform-flex')
            }
        }
    }
});
/*左右滚动*/
var swiperV = new Swiper('.swiper-container-h', {
    spaceBetween: 50,
    pagination: {
        el: '.swiper-pagination-h',
        clickable: true,
    }
});