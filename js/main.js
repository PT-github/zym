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
    $('#pmenu').bind('click',function(){
        $('.menu-container').addClass('menu-active');
    });
    $('body').bind('click',function(e){
        var target = e.target;
        var box = $('.right-con')[0];
        if(!box.contains(target) && target.className.indexOf('menu') === -1){
            $('.menu-container').removeClass('menu-active');
        }
    })
});
function hideLoading(){
    $('.loading').addClass('loading-hide');
}

function formatHnm(obj) {
    if(obj.__emptyHintEl){
        if(obj.value == obj.__emptyHintEl.innerHTML)
            return;
    }
    str = obj.value.replace(/[ ]/g, "");
    if (str.length > 22) {
        obj.value = str.substr(0, 22);
    }
    obj.value = obj.value.replace(/\D/g, '').replace(/\s/g, '').replace(
        /(\d{5})(?=\d)/g, "$1 ");
}
function commOnKeyPress_(e, sType, oElement, iLength){
    if(13 == window.event.keyCode){
        validate();
        return false;
    }
    return commOnKeyPress(e, sType, oElement, iLength);
}