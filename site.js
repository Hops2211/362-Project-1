$.noConflict();
  jQuery(function($)  {
     
     $('#information').toggle('visible');
     
     $('#sign-up').on('submit', function() {
        $('#information').toggle('visible');
       
     })
   })
