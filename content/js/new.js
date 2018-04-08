
;(function($){
    $('.menu-item a, .masthead-cta a').click(function(event){
        event.preventDefault()
        var targetUrl = $(this).attr('href')
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
