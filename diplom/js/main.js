$(".btn-card").on("click", function () {
    $(".widget-item-popup").removeClass("hidden");
    $(".background-village").removeClass("hidden")
});
$(".close-span").on("click", function () {
    $(".widget-item-popup").addClass("hidden");
    $(".background-village").addClass("hidden");
});


$(".video-item").on("click", function () {
    $(".video-item-popup").removeClass("hidden");
    $(".background-village").removeClass("hidden")
});
$(".close-span").on("click", function () {
    $(".video-item-popup").addClass("hidden");
    $(".background-village").addClass("hidden");
});


if (window.matchMedia('(max-width: 575px)').matches) {
        $(".contact-box__left").hide();
}


if (window.matchMedia('(max-width: 947px)').matches) {
    $(".navigation").hide();
    $(".mobile-navigation").removeClass("hidden");
} else {
    $(".navigation").show();
    $(".mobile-navigation").addClass("hidden");
}
$(window).on('resize', function () {
    if ($(this).width() < 575) {
        $(".contact-box__left").hide();
    }
    else if ($(this).width() < 947) {
        $(".navigation").hide();
        $(".mobile-navigation").removeClass("hidden");
    }
    else {
        $(".contact-box__left").show();
        $(".navigation").show();
        $(".mobile-navigation").addClass("hidden");
    }
});




$("#menuToggle").click(function () {
    $(".mobile-nav").slideToggle("slow");
    $(".mobile-nav").removeClass("hidden");
})




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("catalog-slider-item");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}

var slideVideoIndex = 1;
showSlidesVideo(slideVideoIndex);

function plusSlides(n) {
    showSlidesVideo(slideVideoIndex += n);
}

function currentSlideVideo(n) {
    showSlidesVideo(slideVideoIndex = n);
}

function showSlidesVideo(n) {
    var i;
    var slidesVideo = document.getElementsByClassName("feedback-video-container");
    var dotsVideo = document.getElementsByClassName("video-dot");

    if (n > slidesVideo.length) {
        slideVideoIndex = 1;
    }
    if (n < 1) {
        slideVideoIndex = slidesVideo.length;
    }
    for (i = 0; i < slidesVideo.length; i++) {
        slidesVideo[i].style.display = "none";
    }
    for (i = 0; i < dotsVideo.length; i++) {
        dotsVideo[i].className = dotsVideo[i].className.replace("active", "");
    }
    slidesVideo[slideVideoIndex - 1].style.display = "flex";
    dotsVideo[slideVideoIndex - 1].className += " active";
}


