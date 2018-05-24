$(document).ready(function() {

// navbar transparent to opaque
function checkScroll(){
    var startY = $('.overlay').height() - 60; //The point where the navbar scroll past overlay

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("solid");
    }else{
        $('.navbar').removeClass("solid");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            top: 60
        });
    });
});

// icons spin on hover
$('.material-icons').mousemove(function(){
    $(this).addClass('animated jello');
})

// hero img on hover
$('.hero-img img').mousemove(function(){
    $(this).addClass('animated pulse');
})

});