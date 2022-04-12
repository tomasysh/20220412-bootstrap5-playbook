$(document).ready(function() {
    const $navbar = $('#navbar');
    const $cookieHintContainer = $('#cookie-hint-container');
    $(document)
        .on('click', '#cookie-hint-button', function() {
            // $cookieHintContainer.addClass('d-none');
            $cookieHintContainer.fadeOut();
        })
        .on('scroll', function() {
            // if ($navbar.offset().top > 80) {
            //     $navbar.addClass('shadow');
            // } else {
            //     $navbar.removeClass('shadow');
            // }
            $navbar.offset().top > 80
                ? $navbar.addClass('shadow')
                : $navbar.removeClass('shadow');
        });

});