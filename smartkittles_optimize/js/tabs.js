$(".tab__item").not(":first").hide();
$(".where .tab").click(function() {
	$(".where .tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".tab__item").hide().eq($(this).index()).fadeIn();
}).eq(0).addClass("active");