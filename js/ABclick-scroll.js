var sectionArray = [1, 2, 3, 4, 5, 6, 7, 8];

$.each(sectionArray, function(index, value) {
    $(document).scroll(function() {
        var offsetSection = $('#' + 'section_' + value).offset().top;
        
        // Update offsetSection for the section with index 2
        if (index === 2) {
            offsetSection -= 200;
        } else {
            offsetSection -= 605;
        }
        
        var docScroll = $(document).scrollTop();
        var docScroll1 = docScroll + 1;

        if (docScroll1 >= offsetSection) {
            $('.navbar-nav .nav-item .nav-link').removeClass('active');
            $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
            $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
            $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
        }
    });
    
    $('.ABclick-scroll').eq(index).click(function(e) {
        var offsetClick = $('#' + 'section_' + value).offset().top;
        
        // Update offsetClick for the section with index 2
        
            offsetClick -= 20;
        
        
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': offsetClick
        }, 300);
    });
});

$(document).ready(function() {
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');
});