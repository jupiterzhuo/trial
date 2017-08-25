
//(function ($) {
//    $(function () {
//        $('.button-collapse').sideNav();
//        $('.parallax').parallax();
//    }); // end of document ready
//})(jQuery); // end of jQuery name space


$(document).on('click', 'a', function () {
    elementId = $(this).attr('href');
    $("html, body").animate({
        scrollTop: $(elementId).offset().top - 10
    }, "slow");
    return false;
});

$(function () {
    $('.pt-active .btnGetPlan').css('display', 'block');
});


$('.plan').hover(function () {
    $('.plan').removeClass('pt-active');
    $('.btnGetPlan').css('display', 'none');
    $(this).addClass('pt-active');
    $('.pt-active .btnGetPlan').css('display', 'block');
})
$(document).ready(function () {
    if ($(".customersImg").parent().hasClass('active')) {
        $(".customersImg").parent(".active").parent().parent().find(".customersSays").css("opacity", "1");
        $(".customersImg").parent(".active").find(".customersList--span").fadeIn();
        $(".customersImg").parent(".active").find(".customersImg").addClass("customersImg-active");
        document.getElementById('comments').innerText = $(".customersImg").parent(".active").find("input[type='hidden'].customers-comments").val();
        document.getElementById('user-name').innerText = $(".customersImg").parent(".active").find("input[type='hidden'].customers-name").val();
        document.getElementById('position').innerText = $(".customersImg").parent(".active").find("input[type='hidden'].customers-position").val();
        $(".customersSays span").hide()
        $(".customersSays span").fadeIn(300);
        $(".customersSays h3").hide()
        $(".customersSays h3").fadeIn(300);
    }    
});

$(document).on('mouseover', '.customersImg', function () {
    $(".customersImg").removeClass("customersImg-active");   
    $(".customersImg").parent().find(".customersList--span").hide();
    $(".customersList").removeClass("active");
    $(".customersSays").css("opacity", "0");   
    $(this).parent().addClass("active");
    $(this).addClass("customersImg-active");
    $(".customersSays").css("opacity", "1");   
    $(this).parent().find(".customersList--span").fadeIn('fast');
    document.getElementById('comments').innerText = $(this).parent().find("input[type='hidden'].customers-comments").val();
    document.getElementById('user-name').innerText = $(this).parent().find("input[type='hidden'].customers-name").val();
    document.getElementById('position').innerText = $(this).parent().find("input[type='hidden'].customers-position").val();
    $(".customersSays span").hide()
    $(".customersSays span").fadeIn(300);
    $(".customersSays h3").hide()
    $(".customersSays h3").fadeIn(300);
})

$(document).on('mouseleave', '.customersImg', function () {
    $(".customersImg").parent(".active").find(".customersImg").addClass("customersImg-active");
    $(".customersImg").parent(".active").parent().parent().find(".customersSays").css("opacity", "1");   
})


$(function () {
    $(window).scroll(function () {
        $('.fadeInBlock').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
            bottom_of_window = bottom_of_window + 200;

            if (bottom_of_window > bottom_of_object) {

                $(this).animate({ 'opacity': '1' }, 500);

            }
        });

    });
});



