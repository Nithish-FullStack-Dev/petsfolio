$(document).ready(function () {
  $(".team-sliders").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 806,
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".at-title").click(function () {
    $(this)
      .toggleClass("active")
      .next(".at-tab")
      .slideToggle()
      .parent()
      .siblings()
      .find(".at-tab")
      .slideUp()
      .prev()
      .removeClass("active");
  });
});

$(document).ready(function () {
  $("#icon i").click(function () {
    $(this).toggleClass("fa-xmark");
    $(this).toggleClass("fa-bars");
    $("#pc-nav ul").toggle(500);
  });
});
