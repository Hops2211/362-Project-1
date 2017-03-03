 $.noConflict();
jQuery(function($)  {
   
    $('#information').toggle('visible');
    $('#information2').toggle('visible');
    
    /* makes the form visible and removes the sign up button once pressed*/
    $('#sign-up').on('submit', function() {
      $('#information').toggle('visible');
      $('#catch').empty();
      $('#sign-up').empty();
          
      }) 
    
   
   $('#information').on('submit', function(e) {
     e.preventDefault()
     if($('#email').val()==""||$('#fname').val()==""||$('#lname').val()==""){
       $('#confirmation').append('you did not fill out one of the fields');
        return false;
  //      $('#confirmation').empty();
     }
     else{
       $('#information').on('submit', function(e) {
     e.preventDefault();
     var first = $('#fname').val();
     var last = $('#lname').val();
     var email = $('#email').val();
     $('#information').empty();
     $('#confirmation').empty();
     $('#catch2').empty();
     $('#confirmation').append(
        'Thank you ' + first + ' ' + last + '.\n'
        + 'The form was completed successfully. A confirmation email has been sent to ' +email
       );
       })
     }
   })
   
   $('#confirmation').empty();
 
   
   /*Takes the information entered to display a message */
 /*  $('#information').on('submit', function(e) {
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
 */  
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
