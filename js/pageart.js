// JavaScript Document
$(window).scroll(function(){
    if ($(window).scrollTop() >= 240) {
       $('#header').addClass('down');
    }
    else {
       $('#header').removeClass('down');
    }
});



$(document).ready(function(){
   $('.hamber').find('a').click(function(){
	$('body').toggleClass('open');
});	

});	


$(function(){
		
		$('#menu>li').hover(function(){
			var _this = $(this),
				_subnav = _this.children('ul');

			_subnav.css('display', 'block');
		} , function(){

			$(this).children('ul').css('display', 'none');

		});

		$('a').focus(function(){
			this.blur();
			});

		
	});









window.addEventListener('load',kkfunc);
window.addEventListener('reszie',kkfunc);

 function kkfunc(){
	 
if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	
	$(".right_bar").css("right",0);

}
else {
   $(document).ready(function() {
//當螢幕寬度改變則自動重新整理網頁
  var $window = $(window);
  function checkWidth() {
      var windowsize = $window.width();//取得螢幕寬度

	  
      location.reload(); //重新整理刷新網頁

	 }
  var resizeId;
  $(window).resize(function() {
    clearTimeout(resizeId);
    resizeId = setTimeout(checkWidth, 500); //當停止螢幕拖拉才執行	

  });
    });
}

	 

 };	

