$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        }
    });
    $('#loginModal-Open').click(function () {
        $('#loginModal').modal('show');
    });
    $('.loginBtn-Close').click(function () {
        $('#loginModal').modal('hide')
    });
    $('#reservationModal-Open').click(function () {
        $('#reservationModal').modal('show');
    });
    $('.reservationBtn-Close').click(function () {
        $('#reservationModal').modal('hide')
    });
});