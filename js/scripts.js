$(function () { // Same as document.addEventListener("DOMContentLoaded"...

  // Scrolling smoothly
  window.scroll({
    top: 4000, 
    left: 0, 
    behavior: 'smooth' 
  });

  window.scrollBy({ 
    top: 100, // could be negative value
    left: 0, 
    behavior: 'smooth' 
  });

// Gallery 
$('.carousel.carousel-slider').carousel({fullWidth: true});

// Smooth Scroll
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
});

// Reservation SideNav
// $('.button-collapse').sideNav({
//     menuWidth: 300, // Default is 300
//     edge: 'right', // Choose the horizontal origin
//     closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
//     draggable: true, // Choose whether you can drag to open on touch screens,
//     onOpen: function(el) {  Do Stuff }, // A function to be called when sideNav is opened
//     onClose: function(el) {  Do Stuff }, // A function to be called when sideNav is closed
//   }
// );



});


