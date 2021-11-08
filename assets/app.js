$('.pricing-slider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

// jQuery Code //


  let screenHeight = $(window).height();

  $(window).scroll(function(){
    let currentPos = $(this).scrollTop();

    if(currentPos>=screenHeight){
      $(".main-nav").addClass("main-nav-onScroll");
    }
    else{
      $(".main-nav").removeClass("main-nav-onScroll");
      setActive("home");
    }
  })

  new WOW().init();


$(".navbar-toggler").click(function(){
  let result = $(".navbar-collapse").hasClass("show");

  if(result){
    $(".menu-icon").removeClass("fa-times").addClass("fa-bars");
  }
  else{
    $(".menu-icon").removeClass("fa-bars").addClass("fa-times");
  }
})

function setActive(current){
  $(`.nav-link`).removeClass("current-section")
  $(`.nav-link[href="#${current}"]`).addClass("current-section");
}

function navOnScroll(){
  let currentSection = $("section[id]");

  currentSection.waypoint(function(direction){

    if(direction == "down"){
      let curSec = $(this.element).attr("id");
      console.log(curSec);
      setActive(curSec);
    }
  }),{
    offset: '10%'
  }

  currentSection.waypoint(function(direction){

    if(direction == "up"){
      let curSec = $(this.element).attr("id");
      console.log(curSec);
      setActive(curSec);
    }
  }),{
    offset: '1%'
  }

  
}

navOnScroll();

$(window).on("load",function(){
  $(".loader-container").fadeOut(500,function(){
    $(this).remove();
  });
})

// var waypoints = $('#home').waypoint(function(direction) {
//   $(".nav-link").removeClass("current-section");
//   $(".nav-link[href='#home']").addClass("current-section")
// }, {
//   offset: '0%'
// })

// var waypoints = $('#about').waypoint(function(direction) {
//   $(".nav-link").removeClass("current-section");
//   $(".nav-link[href='#about']").addClass("current-section")
// }, {
//   offset: '15%'
// })

// var waypoints = $('#services').waypoint(function(direction) {
//   $(".nav-link").removeClass("current-section");
//   $(".nav-link[href='#services']").addClass("current-section")
// }, {
//   offset: '10%'
// })

// var waypoints = $('#pricing').waypoint(function(direction) {
//   $(".nav-link").removeClass("current-section");
//   $(".nav-link[href='#pricing']").addClass("current-section")
// }, {
//   offset: '15%'
// })

// var waypoints = $('#contact').waypoint(function(direction) {
//   $(".nav-link").removeClass("current-section");
//   $(".nav-link[href='#contact']").addClass("current-section");
// }, {
//   offset: '15%'
// })