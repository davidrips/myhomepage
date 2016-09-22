$(document).ready(function(){


//   var mobile = document.createElement('div');
//   mobile.className = 'nav-mobile';
//   document.querySelector('#theNav').appendChild(mobile);

// // hasClass
// function hasClass(elem, className) {
//   return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
// }

// // toggleClass
// function toggleClass(elem, className) {
//   var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
//     if (hasClass(elem, className)) {
//         while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
//             newClass = newClass.replace(' ' + className + ' ', ' ');
//         }
//         elem.className = newClass.replace(/^\s+|\s+$/g, '');
//     } else {
//         elem.className += ' ' + className;
//     }
// }


// var mobileNav = $('.nav-mobile');

// var toggle = document.querySelector('.navBut');
// mobileNav.click(function() {
//   console.log('clicked');
//   toggleClass(this, 'nav-mobile-open');
//   toggleClass(toggle, 'nav-active');
// })

//   var mobileNav = "<div class='mobilenavwrapper'><ul class='buttons'><li><button class='toggle-button'>☰</button></li><li><a id='home' href='' class='brand'>DAVID RIPS</a></li></ul></div>"


// $(".navwrapper").addClass("responsive").before(mobileNav);

// $('.toggle-button').click(function(){
//   $(".navwrapper").toggle();
// })

// $(window).resize(function(){
//  if(window.matchMedia("(min-width: 769px)").matches){
//   $(".navBrand").insertBefore('.mobileBut');
//   TweenMax.set(".navBut", {float:"left", display: "list-item", opacity:1, scale:1})
//   $("nav").css('display', 'none').css('display', 'flex');
// }
// })


var mobtv;
function a(){
mobtv = new TimelineMax({paused:true});
mobtv.to($("#theNav"),.4,{ease: 'Power2.easeIn', height:'58vh'})
// mobtv.set(".navBut", {opacity:0, scale:0.5})
mobtv.staggerFrom(".navBut", 2,{scale:0.5, opacity:0, delay:0.3, ease:Elastic.easeOut, force3D:true}, 0.2, '-=0.8');
}



var mobtvleave = new TimelineMax({paused:true});
mobtvleave.staggerTo(".navBut", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
mobtvleave.to($("#theNav"),.4,{ease: 'Power2.easeIn', height:'80px'}, '-=0.3');
mobtvleave.to($(".navBut"), .1, {display:'none'});
mobtvleave.to($(".navBut"), .1, {y:0});
mobtvleave.to($(".navBut"), .1, {opacity:1});


$('.nav-mobile').on('click', function(e){
  e.preventDefault();
  var status = $(this).data("open");
  console.log(status);
  if (status == true){
    mobtvleave.paused() ? mobtvleave.play() : mobtvleave.restart();
    $(this).data("open", false)
  }else{
    $(".navBut").css({
    display: 'block',
    float: 'none'
  });
    $(".navBrand").insertBefore('#firstLi');
    a();
    mobtv.paused() ? mobtv.play() : mobtv.restart();
    $(this).data("open", true)
    mobtv = '';


  }
 
})

// $('.mobiled').on('click', function(){
//   console.log('offclick');
//   mobtvleave.play();
// })


var moblink = $('.nav-mobile')






  var controller = new ScrollMagic.Controller();


    var about = $("#about")
    var skills= $("#skills")
    var home = $("#home")
   var projects = $("#projects")
   var contact = $("#contact");

  controller.scrollTo(function (newpos) {
    TweenMax.to(window, 0.5, {scrollTo: {y: newpos - 150}});
  });

   about.click(function(e){
   e.preventDefault(); 
    if (moblink.data('open')==true) {
      mobtvleave.paused() ? mobtvleave.play() : mobtvleave.restart();
      moblink.data("open", false)
    }
    controller.scrollTo("#box1");
  })

   skills.click(function(e){
   e.preventDefault(); 
    if (moblink.data('open')==true) {
      mobtvleave.paused() ? mobtvleave.play() : mobtvleave.restart();
      moblink.data("open", false)
    }
    controller.scrollTo("#box2");
  })

   projects.click(function(e){
   e.preventDefault(); 
    if (moblink.data('open')==true) {
      mobtvleave.paused() ? mobtvleave.play() : mobtvleave.restart();
      moblink.data("open", false)
    }
    controller.scrollTo("#box3");
  })

   contact.click(function(e){
   e.preventDefault(); 
    if (moblink.data('open')==true) {
      mobtvleave.paused() ? mobtvleave.play() : mobtvleave.restart();
      moblink.data("open", false)
    }
    controller.scrollTo("#box4");
  })

   home.click(function(e){
   e.preventDefault(); 
   console.log('clickedhome');
    controller.scrollTo(0);
  })



  $("#logoCar").owlCarousel({singleItem:true, autoPlay: 3000, stopOnHover:true, pagination:false});
 

  var dimFirst = TweenMax.to($("#slideOneText"),1,{ease: 'Power2.easeIn', opacity:0})

   var dimBox1 = TweenMax.to($("#box1"),1,{ease: 'Power2.easeIn', opacity:0});
   var dimBox2 = TweenMax.to($("#box2"),1,{ease: 'Power2.easeIn', opacity:0});
   var dimBox3 = TweenMax.to($("#box3"),1,{ease: 'Power2.easeIn', opacity:0});
   var dimBox4 = TweenMax.to($("#box4"),1,{ease: 'Power2.easeIn', opacity:0});
   var dropNav = TweenMax.to($("#theNav"), 1, {top:20})
   var scroll
  


jQuery(window).trigger('resize').trigger('scroll');

  	
  var scene4 = new ScrollMagic.Scene({triggerElement:'#a', triggerHook: 0})
  scene4.setPin("#theNav", {pushFollowers: false});
  // scene4.setTween(dropNav)
  // scene4.setTween(timeline4)
  scene4.addTo(controller);

  var scene5 = new ScrollMagic.Scene({triggerElement: "#a", triggerHook:0, duration: '50%'})
  scene5.setTween(dropNav);
  scene5.addTo(controller);

  var scene6 = new ScrollMagic.Scene({triggerElement: "#theNav", triggerHook: 0.7,duration: '60%'})
  scene6.setTween(dimFirst);
  scene6.addTo(controller);

  var box1scene = new ScrollMagic.Scene({triggerElement: '#box1', triggerHook:"onLeave", duration: '90%', offset: 30})
  box1scene.setTween(dimBox1);
  box1scene.addTo(controller);


  var box2scene = new ScrollMagic.Scene({triggerElement: '#box2', triggerHook:"onLeave", duration: '80%', offset:30})
  box2scene.setTween(dimBox2);
  box2scene.addTo(controller);


  var box3scene = new ScrollMagic.Scene({triggerElement: '.pillr', triggerHook:"onLeave", duration: '90%', offset: 120})
  box3scene.setTween(dimBox3);
  box3scene.addTo(controller);


  var box4scene = new ScrollMagic.Scene({triggerElement: '#box4', triggerHook:"onLeave", duration: '60%'})
  box4scene.setTween(dimBox4);
  box4scene.addTo(controller);




  });










