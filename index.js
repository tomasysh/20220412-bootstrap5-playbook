$(document).ready(function() {
    const $cookieHintContainer = $('#cookie-hint-container');
    $(document).on('click', '#cookie-hint-button', function() {
        // $cookieHintContainer.addClass('d-none');
        $cookieHintContainer.fadeOut();
    })

});