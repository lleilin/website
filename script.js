$(document).ready(function() {
    $(window).scroll(function() {
        var currentSection = null;
        $('.content > section').each(function() {
            var sectionTop = $(this).offset().top - 50; // Adjust offset as needed
            if ($(window).scrollTop() >= sectionTop) {
                currentSection = $(this).attr('id'); 
            }
        });
        $('.navigation a').removeClass('active');
        if (currentSection) {
            $('.navigation a[href="#' + currentSection + '"]').addClass('active');
        }
    });
});