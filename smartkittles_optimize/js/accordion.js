let accordion = function (){
	let data = $(".accordion").attr("data-accordion");

	$(".accordion__header").on("click", function (){
		if(data === "close"){
			$(".accordion__body").slideUp();
			if($(this).hasClass("active")){
				$(this).toggleClass("active");
			}
			else{
				$(".accordion__header").removeClass("active");
				$(this).toggleClass("active");
			}
		}
		else{
			$(this).toggleClass("active");
		}
		$(this).next(".accordion__body").not(":animated").slideToggle();
	})
}

accordion();
