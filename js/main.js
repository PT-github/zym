$(document).ready(function(){
    var initArry = {v:false,h:false};
    /*垂直滚动*/
    var swiper = new Swiper('.swiper-container-v', {
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
            },
            init:function(){
                initArry.v = true;
                if(initArry.h){
                    setTimeout(hideLoading,500)
                }
            }
        }
    });
    /*左右滚动*/
    var swiperV = new Swiper('.swiper-container-h', {
        nested:true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop:true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        coverflowEffect: {
            rotate: 50,
            stretch: $('html').hasClass('s_phone') ? 50 : 200,
            depth: 0,
            modifier: 1,
            slideShadows : false,
        },
        pagination: {
            el: '.swiper-pagination-h'
        },
        on:{
            init:function(){
                initArry.h = true;
                if(initArry.v){
                    setTimeout(hideLoading,500)
                }
            }
        }
    });
    $('.swiper-button-prev').bind('click',function(){
        swiperV.slidePrev();
    });
    $('.swiper-button-next').bind('click',function(){
        swiperV.slideNext();
    });
});
function hideLoading(){
    $('.loading').addClass('loading-hide');
}
