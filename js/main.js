/* global alert */

$(document).ready(function () {
  $('.counter').counterUp({
    time: 2900
  });
  

  $("#clients-slider").owlCarousel({
    loop: true,
    margin: 40,
    dots: true,
    nav: true,
    items: 2,
    responsiveClass: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      680: {
        items: 1,
        nav: false,
        loop: false,
      },
      1000: {
        items: 2,
        nav: true,
      },
    },
  });
  $("#datepicker").datepicker();
 
  
  

  // thumnail-slider
  var image = $(".slide img");

  image.each(function (i) {
    var container = $(".singnal-slider ul");
    var imageUrl = image[i].src;

    container.append(getimage(imageUrl));
  });

  $("nav li img", this).click(function () {
    var nav = $(this);
    var url = nav.attr("src");

    image.attr("src", url);
  });

  function getimage(imageUrl) {
    return '<li><img src=" ' + imageUrl + ' " alt=""></li>';
  }

  //faq
  const accordionItem = document.querySelectorAll(".accordion-item");

  accordionItem.forEach((el) =>
    el.addEventListener("click", () => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      } else {
        accordionItem.forEach((el2) => el2.classList.remove("active"));
        el.classList.add("active");
      }
    })
  );
 
  

});
(function ($) {
  $.fn.countdown = function (options, callback) {
    //custom 'this' selector
    thisEl = $(this);

    // array of custom settings
    var settings = {
      date: null,
      format: null,
    };

    // append the settings array to options
    if (options) {
      $.extend(settings, options);
    }

    //create the countdown processing function
    function countdown_proc() {
      var eventDate = Date.parse(settings.date) / 1000;
      var currentDate = Math.floor($.now() / 1000);

      if (eventDate <= currentDate) {
        callback.call(this);
        clearInterval(interval);
      }

      var seconds = eventDate - currentDate;

      var days = Math.floor(seconds / (60 * 60 * 24));
      //calculate the number of days

      seconds -= days * 60 * 60 * 24;
      //update the seconds variable with number of days removed

      var hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * 60 * 60;
      //update the seconds variable with number of hours removed

      var minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;
      //update the seconds variable with number of minutes removed

      //conditional statements
      if (days == 1) {
        thisEl.find(".time-days").text("day");
      } else {
        thisEl.find(".time-days").text("days");
      }
      if (hours == 1) {
        thisEl.find(".time-hours").text("hour");
      } else {
        thisEl.find(".time-hours").text("hours");
      }
      if (minutes == 1) {
        thisEl.find(".time-minutes").text("minute");
      } else {
        thisEl.find(".time-minutes").text("minutes");
      }
      if (seconds == 1) {
        thisEl.find(".time-seconds").text("second");
      } else {
        thisEl.find(".time-seconds").text("seconds");
      }

      //logic for the two_digits ON setting
      if (settings.format == "on") {
        days = String(days).length >= 2 ? days : "0" + days;
        hours = String(hours).length >= 2 ? hours : "0" + hours;
        minutes = String(minutes).length >= 2 ? minutes : "0" + minutes;
        seconds = String(seconds).length >= 2 ? seconds : "0" + seconds;
      }

      //update the countdown's html values.
      thisEl.find(".days").text(days);
      thisEl.find(".hours").text(hours);
      thisEl.find(".minutes").text(minutes);
      thisEl.find(".seconds").text(seconds);
    }

    //run the function
    countdown_proc();

    //loop the function
    interval = setInterval(countdown_proc, 1000);
  };
  $("#countdown").countdown(
    {
      date: "1 January 2022 12:00:00",

      format: "on",
    },

    function () {
      // This will run when the countdown ends
      alert("We're Out Now");
    }
  );
  
})(jQuery);
