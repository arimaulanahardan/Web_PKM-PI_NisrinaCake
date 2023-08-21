var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//////////////////////////////////////////////////////////////////////////////
// MAX-WIDTH: 1100px
//////////////////////////////////////////////////////////////////////////////
function max_width_1100(x) {
  if (x.matches) { // If media query matches
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      slidesPerGroup: 3,
    });
  } 
}

var x = window.matchMedia("(max-width: 1100px)")
max_width_1100(x) // Call listener function at run time
x.addListener(max_width_1100) // Attach listener function on state changes


//////////////////////////////////////////////////////////////////////////////
// MIN-WIDTH: 1105px
//////////////////////////////////////////////////////////////////////////////
function max_width_1105(x) {
  if (x.matches) { // If media query matches
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
    });
  } 
}

var x = window.matchMedia("(min-width: 1105px)")
max_width_1105(x) // Call listener function at run time
x.addListener(max_width_1105) // Attach listener function on state changes