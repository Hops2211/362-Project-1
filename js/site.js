 $.noConflict();
jQuery(function($)  {
   
    $('#information').toggle('visible');
    $('#information2').toggle('visible');
    
    /* makes the form visible and removes the sign up button once pressed*/
    $('#sign-up').on('submit', function() {
      $('#information').toggle('visible');
      $('#catch').empty();
      $('#catch2').empty();
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
   
 })