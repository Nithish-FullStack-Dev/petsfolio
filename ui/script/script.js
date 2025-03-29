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
          slidesToShow: 3,
          centerPadding: "0px",
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

  $(".welcome-sliders").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade:true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: '<button class="slick-prev">&#10094;</button>',
    nextArrow: '<button class="slick-next">&#10095;</button>',
  });

  function initSlick() {
    if ($(window).width() <= 1280) {
      if (!$(".download-cow-imgs").hasClass("slick-initialized")) {
        $(".download-cow-imgs").slick({
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });
      }
    } else {
      if ($(".download-cow-imgs").hasClass("slick-initialized")) {
        $(".download-cow-imgs").slick("unslick");
      }
    }
  }

  initSlick();

  $(window).resize(function () {
    initSlick();
  });

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

  $("#icon i").click(function () {
    $(this).toggleClass("fa-xmark fa-bars");
    $("#pc-nav ul").toggle(500);
  });

  let loader = document.getElementById("loader");

  window.addEventListener("load", () => {
    loader.style.display = "none";
  });

  document.querySelector(".top-arrow").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

let form = document.forms[0];
let body = document.body;
let parent = document.querySelector("#parent");

const fields = [
  { type: "text", placeholder: "First Name" },
  { type: "text", placeholder: "Last Name" },
  { type: "text", placeholder: "Email" },
  { type: "tel", placeholder: "Contact Number" },
  { type: "text", placeholder: "City or State" },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  body.style.overflow = "hidden";

  let popupParent = document.createElement("section");
  popupParent.classList.add("popup");
  parent.append(popupParent);

  let faqForm = document.createElement("div");
  faqForm.classList.add("popup-faq-form");
  popupParent.append(faqForm);

  let form = document.createElement("form");
  form.setAttribute("id", "popup-form");
  faqForm.append(form);

  fields.forEach((field) => {
    const input = document.createElement("input");
    input.type = field.type;
    input.placeholder = field.placeholder;
    form.appendChild(input);
  });

  const button = document.createElement("input");
  button.type = "submit";
  button.setAttribute("id", "btn");
  button.value = "Start Your Punganur Journey";
  form.appendChild(button);

  $(".popup").fadeIn(300);

  $(".popup").click((e) => {
    if (e.target.classList.contains("popup")) {
      $(".popup").fadeOut(300, () => {
        $(".popup").remove();
        body.style.overflow = "auto";
      });
    }
  });

  let popupForm = document.querySelector("#popup-form");

  popupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("form submitted successfully");
    $(".popup").fadeOut(300, () => {
      $(".popup").remove();
      body.style.overflow = "auto";
    });
  });
});
