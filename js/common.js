/* 헤더 */
var bw = $("body").width()


        $(".gnbset").hover(
            function() {
                $(".snbmenu").css({
                    "display": "block"
                });
                $("header h1 a").addClass("hoveri");
                $(".gnbset > li").addClass("hover");
                $("header .wrap").addClass("line");
                $(".bkw").slideDown(300);
                $(".lang ul li").addClass("hover1")
                $(".lang a").addClass("hover2");
            },
            function() {
                $(".snbmenu").css({
                    "display": "none"
                });
                $("header h1 a").removeClass("hoveri");
                $(".gnbset > li").removeClass("hover");
                $("header .wrap").removeClass("line");
                $(".bkw").slideUp(300);
                $(".lang ul li").removeClass("hover1")
                $(".lang a").removeClass("hover2");
            }



        )

        $(".lang li a").click(function() {
            $(".language").slideToggle(300);
            $(this).toggleClass("sup");
        });





        $(".m_menu").click(function() {
            $(".menuM").addClass("open");
        });
        $(".close").click(function() {
            $(".menuM").removeClass("open");
        });