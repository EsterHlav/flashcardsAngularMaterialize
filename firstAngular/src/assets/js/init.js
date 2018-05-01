(function($){
  $(function(){
    //for nav bar
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.slider').slider();
    $('.collapsible').collapsible();
    $(document).ready(function(){
    $('ul.tabs').tabs();
    $('.dropdown-button').dropdown('open');
    $('.dropdown-button').dropdown('close');
    

    $('.quizz .tab').click(function(){
        $(this).addClass("clicked");
    });
  });
  }); // end of document ready
})(jQuery); // end of jQuery name space
