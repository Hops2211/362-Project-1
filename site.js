 $.noConflict();
jQuery(function($)  {
   
    $('#information').toggle('visible');
    $('#information2').toggle('visible');
    
    /* makes the form visible and removes the sign up button once pressed*/
    $('#sign-up').on('submit', function() {
      $('#information').toggle('visible');
      $('#sign-up').empty();
          
      }) 
    
    /* makes the second form visible and removes the second sign up button once pressed*/
    $('#sign-up2').on('submit', function() {
      $('#information2').toggle('visible');
      $('#sign-up2').empty();
   
/*    $('#information').removeClass('active');
    $('#sign-up').on('submit', function(e) {
     $('#stuff').append(
     'This has been clicked'
     );
     
   $('#sign-up').on('click', function() {
      $('#information').addClass('active');
      
      
*/  
   })
   
   /*Takes the information entered to display a message */
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
   
   $('#information2').on('submit', function(e) {
     e.preventDefault();
     var first = $('#fname2').val();
     var last = $('#lname2').val();
     var cfirst = $('#cfname2').val();
     var clast = $('#clname2').val();
     var email = $('#email2').val();
     $('#information2').empty();
     $('#confirmation2').append(
        'Thank you ' + first + ' ' + last + '.\n'
        +'Your child, ' + cfirst + ' ' + clast + ' is now registered for class in the ' + 'room.\n' 
        + 'The form was completed successfully. A confirmation email has been sent to ' +email
      );
     
   })
   
 })
