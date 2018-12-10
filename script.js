$(function() {
   $('.scrollTop').click (function() {
     console.log("true")
     $('html, body').animate({scrollTop: $('.pricing-table').offset().top }, 'slow');
     return false;
   });
 });
