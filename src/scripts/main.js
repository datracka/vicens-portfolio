if (process.env.NODE_ENV === 'development') {
    require('../../app/index.html')
}

//require('material-design-lite');
require('../styles/main.scss');
var $ = require('jquery');

var ScrollReveal = require("scrollreveal");
console.log(ScrollReveal);

//window.sr = ScrollReveal();
//sr.reveal('.foo');

//ambient background color http://codepen.io/somenumboola/pen/wAhCy
//porfolio ideas:

//http://impreza4.us-themes.com/portfolio-cities/
//idea transition over pages: http://themeforest.net/item/material-design-admin-with-angularjs/full_screen_preview/13582227
//idea button effect in portfolio. http://zephyr.us-themes.com/

//section values:

var $window = $(window);

$(window).load(function () {

    $(".section").each(function (index, section) {

        var $section = $(section);
        var sectionTop = $section.offset().top;
        var sectionBottom = $section.offset().top + $section.height();
        console.log("i: " + sectionTop + " " + sectionBottom);

    });

    console.log("#######################################");
    $window.on("scroll", function () {


        $(".section").each(function (index, section) {

            var $section = $(section);
            var $section_container = $section.find( "div:first" );
            var sectionTop = $section.offset().top;
            var sectionBottom = $section.offset().top + $section.height();

            console.log($window.scrollTop());
            if ($window.scrollTop() >= sectionTop && $window.scrollTop() < sectionBottom) {
                $section_container.addClass('section__container--current');
            } else {
                $section_container.removeClass('section__container--current');
            }
        });

    });

});






