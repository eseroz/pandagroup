$(document).ready(function () {
    //var tamamlananYuzde = 60;
    //$(".progres").find(".completed").animate({ width: 60+"%" }, 500);
    var durum = true;
    setInterval(function () {
        $(".underc-text div").first().animate({
            "top": "-50px",
            "opacity": -10
        }, 600);

        $(".underc-text div").last().css("display", "block").animate({
            "opacity": 1
        }, 600);

        $(".underc-text div").first().css("top", "50px");
        $(".underc-text div").first().css("opacity", "0");


 

    }, 1000);

    function Once() {
        if (durum) {
            $(".underc-text div").first().animate({
                "top": "-50px",
                "opacity": -10
            }, 600);

            $(".underc-text div").last().css("display", "block").animate({
                "opacity": 1
            }, 600);

            $(".underc-text div").first().css("top", "50px");
            $(".underc-text div").first().css("opacity", "0");
            durum = false;
        } else {
            $(".underc-text div").last().animate({
                "top": "-50px",
                "opacity": -10
            }, 600);

            $(".underc-text div").first().css("display", "block").animate({
                "opacity": 1
            }, 600);

            $(".underc-text div").last().css("top", "50px");
            $(".underc-text div").last().css("opacity", "0");
            durum = true;
        }

        
    }


});