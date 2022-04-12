$(document).ready(function() {
    $('body').on('click', '.accordion-button', function() {
        const $accordionButton = $(this).children('i');
        if ($accordionButton.hasClass('bi-arrows-angle-expand')) {
            // 要從expand to contract
            $accordionButton.removeClass('bi-arrows-angle-expand');
            $accordionButton.addClass('bi-arrows-angle-contract');
        } else {
            // 縮合所有按鈕
            $('.accordion-button').children('i').removeClass('bi-arrows-angle-expand');
            $('.accordion-button').children('i').addClass('bi-arrows-angle-contract');
            // 要從contract to expand
            $accordionButton.removeClass('bi-arrows-angle-contract');
            $accordionButton.addClass('bi-arrows-angle-expand');
        }
    });
});