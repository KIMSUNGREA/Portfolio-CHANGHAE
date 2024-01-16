/* 모바일 메뉴 */
$(".m_menu").click(function () {

    $(".menuM").animate({
        "right": "0"
    }, 100).css({
        "opacity": "1"
    });
});
$(".close").click(function () {

    $(".menuM").animate({
        "right": "-200%"
    }, 300).css({
        "opacity": "0"
    });
});
$(".menuM > ul > li > a").click(function () {
    $(".snbmenu2").slideUp(300);
    $(this).next().slideDown(300);
    $(".menuM > ul > li > a").removeClass("ud");
    $(this).addClass("ud");
});


/* section1 스와이퍼 */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    /*autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },*/
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* section3 텝메뉴*/
$(".scetit ul li").click(function () {
    var nb = $(this).index() + 1

    $(".vid" + nb).addClass("von").siblings().removeClass("von");
    $(this).addClass("adb").siblings().removeClass("adb");

    $(".scetit dd").removeClass("gh");
    $(this).find("dd").addClass("gh");
});


/* section5 슬라이드 */
var vw = $("body").width();
var n = 0;
console.log(vw);

$(".btnpn .next").click(function () {

    vw = $("body").width();
    if (vw > 800) {
        $(".frame ul").animate({
            "left": "-1280px"
        }, 500);
    } else {
        n++;
        console.log(n);
        if (n == 5) {
            $(".frame ul").animate({
                "left": -n * 100 + "%"
            }, 1200);
            n = 0;
        } else {
            $(".frame ul").animate({
                "left": -n * 100 + "%"
            }, 1200);
        }
    }
});

$(".btnpn .prev").click(function () {
    vw = $("body").width();
    if (vw > 800) {
        $(".frame ul").animate({
            "left": "0"
        }, 500);
    } else {
        n--;
        if (n < 0) {
            n = 5
            $(".frame ul").animate({
                "left": -n * 100 + "%"
            }, 1200);
            n = 0;
        } else {
            $(".frame ul").animate({
                "left": -n * 100 + "%"
            }, 1200);
        }
    }
});


/* section6 지도 텝메뉴 */
$(".map li").click(function () {
    var map = $(this).index() + 1;
    console.log(map);
    $(".gm" + map).addClass("mapon").siblings().removeClass("mapon");
    $(this).addClass("cb").siblings().removeClass("cb");

});
