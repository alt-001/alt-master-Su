$(function(){
   
	$("#brand-sidebar ul>li>a.not_product").click(function(){
	 $('#brand-sidebar ul>li>a.all,#brand-sidebar .navbar-default .navbar-nav>li>a.featured').hide();
	 $('#goup').css('bottom','50px');
	});

  $("#brand-sidebar ul>li>a.product,#brand-sidebar .navbar-default .navbar-nav>li>a.featured,#brand-sidebar .navbar-default .navbar-nav>li>a.all").click(function(){
  $('#brand-sidebar ul>li>a.all,#brand-sidebar .navbar-default .navbar-nav>li>a.featured').show();
    $('#goup').css('bottom','-1500px');
  });

});