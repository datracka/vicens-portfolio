if (process.env.NODE_ENV === "development") {
  require("../../app/index.html");
}

require("../styles/main.scss");
var $ = require("jquery");
var ScrollReveal = require("scrollreveal");

//ambient background color http://codepen.io/somenumboola/pen/wAhCy
//porfolio ideas:
//https://www.sequoiacap.com/

//http://impreza4.us-themes.com/portfolio-cities/
//idea transition over pages: http://themeforest.net/item/material-design-admin-with-angularjs/full_screen_preview/13582227
//idea button effect in portfolio. http://zephyr.us-themes.com/

//section values:

var $window = $(window);

$(window).load(function() {
  $(".logos--js-show").fadeIn(2000);

  window.sr = ScrollReveal({ mobile: true });
  sr.reveal(".scroll-reveal-text", {
    delay: 500,
    origin: "top",
    distance: "20px",
    easing: "ease-in-out",
    scale: 0
  });

  sr.reveal(".scroll-reveal-text2", {
    delay: 1000,
    origin: "top",
    distance: "20px",
    easing: "ease-in-out",
    scale: 0,
    duration: 1000
  });

  sr.reveal(".scroll-reveal-love", {
    delay: 100,
    duration: 1000,
    origin: "top",
    distance: "30px",
    opacity: 0,
    easing: "ease-in-out",
    scale: 0
  });

  sr.reveal(".scroll-reveal-title", {
    delay: 200,
    duration: 1000,
    origin: "top",
    distance: "30px",
    opacity: 0,
    easing: "ease-in-out",
    scale: 0
  });

  sr.reveal(".scroll-reveal-logos-top", {
    delay: 100,
    duration: 600,
    origin: "top",
    distance: "10px",
    opacity: 0,
    easing: "ease-in-out",
    scale: 0
  });

  sr.reveal(".scroll-reveal-logos-down", {
    delay: 400,
    duration: 1000,
    origin: "top",
    distance: "30px",
    opacity: 0,
    easing: "ease-in-out",
    scale: 0
  });

  $window.on("scroll", function() {
    $(".section").each(function(index, section) {
      var $section = $(section);
      var $section_container = $section.find("div:first");
      var sectionTop = $section.offset().top;
      var sectionBottom = $section.offset().top + $section.height();

      console.log($window.scrollTop());
      if (
        $window.scrollTop() >= sectionTop &&
        $window.scrollTop() < sectionBottom
      ) {
        $section_container.addClass("section__container--current");
      } else {
        $section_container.removeClass("section__container--current");
      }
    });
  });
});
