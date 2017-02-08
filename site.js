 $.noConflict();
jQuery(function($)  {
   
    $('#information').toggle('visible');
    $('#information2').toggle('visible');
      
    $('#sign-up').on('submit', function() {
      $('#information').toggle('visible');
          
       
    $('#sign-up2').on('submit', function() {
      $('#information2').toggle('visible');
   
/*    $('#information').removeClass('active');
    $('#sign-up').on('submit', function(e) {
     $('#stuff').append(
     'This has been clicked'
     );
     
   $('#sign-up').on('click', function() {
      $('#information').addClass('active');
*/  })   
   })
 })
