
;(function($){
    $('.menu-item').click(function(event){
        event.preventDefault()
        var targetUrl = $(this).children().attr('href')
        var scrollToId = targetUrl.split('/').pop()
        var offset = $(scrollToId).offset().top

        if(targetUrl.match(/stockholm/)) {
            offset = offset - 380
        } else {
            offset = offset - 69
        }

        $(window).scrollTop(offset)

        $('header').removeClass('menu-open')
        $('.menu-container').hide()
    });
})(jQuery);
