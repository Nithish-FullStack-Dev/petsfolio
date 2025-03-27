$(document).ready(function () {
  $(".team-sliders").slick({
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
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

let loader = document.getElementById("loader");

window.addEventListener("load", () => {
  loader.style.display = "none";
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

  // let icon = document.createElement("i");
  // icon.classList.add("fa-solid");
  // icon.classList.add("fa-xmark");
  // icon.classList.add("close-icon");

  let faqForm = document.createElement("div");
  faqForm.classList.add("popup-faq-form");
  popupParent.append( faqForm);

  let form = document.createElement("form");
  form.setAttribute("id", "popup-form");
  faqForm.append(form);

  fields.forEach((field) => {
    const input = document.createElement("input");
    input.type = field.type;
    input.placeholder = field.placeholder;
    form.appendChild(input);
  });

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Start Your Punganur Journey";
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
    $(".popup").remove();
    body.style.overflow = "auto"; 
  });
});
