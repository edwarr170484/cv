$(document).ready(function(){
    $(".tab-nav").click(function() {
        $(".tab-nav").each(function(){
            $(this).removeClass("active");
            let tab = $(this).attr("href");
            $(tab).removeClass("active");
        });

        $(this).addClass("active");
        let tab = $(this).attr("href");
        $(tab).addClass("active");
    });
});