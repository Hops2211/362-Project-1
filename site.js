 $.noConflict();
jQuery(function($)  {
   
    $('#information').toggle('visible');
    $('#information2').toggle('visible');
      
    $('#sign-up').on('submit', function() {
      $('#information').toggle('visible');
      $('#sign-up').empty();
          
      }) 
    $('#sign-up2').on('submit', function() {
      $('#information2').toggle('visible');
   
/*    $('#information').removeClass('active');
    $('#sign-up').on('submit', function(e) {
     $('#stuff').append(
     'This has been clicked'
     );
     
   $('#sign-up').on('click', function() {
      $('#information').addClass('active');
      
      
*/  
   })
   
   $('#information').on('submit', function(e) {
     e.preventDefault();
     var first = $('#fname').val();
     var last = $('#lname').val();
     var email = $('#email').val();
     $('#information').empty();
     $('#confirmation').append(
        'Thank you ' + first + ' ' + last + '.\n'
        + 'The form was completed successfully. A confirmation email has been sent to ' +email
      );
     
   })
   
 })
