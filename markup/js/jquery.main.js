jQuery(function() {
    $('.navigation-opener').on('click',function(){
        $(this).parent('nav').toggleClass('active');
    });

    //slick
    $('.carousel')
        .on('init', function(event, slick){
            let dots = $( '.slick-dots li' );
            dots.each( function( k, v){
                let button = $(this).find( 'button' );
                $(button).text() < 10 ? $(button).text(`0${$(button).text()}`) :$(button).text();
            });
            $('.carousel-action').prepend($( '.slick-dots ' ));
        })
        .slick({
            infinite: true,
            slidesToShow: 1,
            dots: true,
            arrows: true,
            slidesToScroll: 1,
            autoplay: false,
            fade: true
        });
});