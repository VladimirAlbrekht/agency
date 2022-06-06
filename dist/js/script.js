let button1 = document.querySelector(".button-1"),
  button2 = document.querySelector(".button-2"),
  button3 = document.querySelector(".button-3"),
  content1 = document.querySelector(".content_1"),
  content2 = document.querySelector(".content_2"),
  content3 = document.querySelector(".content_3");

button1.onclick = function () {
  content1.classList.add("promo__content_active");
  content2.classList.remove("promo__content_active");
  content3.classList.remove("promo__content_active");
};

button2.onclick = function () {
  content2.classList.add("promo__content_active");
  content1.classList.remove("promo__content_active");
  content3.classList.remove("promo__content_active");
};

button3.onclick = function () {
  content3.classList.add("promo__content_active");
  content1.classList.remove("promo__content_active");
  content2.classList.remove("promo__content_active");
};
