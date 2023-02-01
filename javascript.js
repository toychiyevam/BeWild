function choose_Animal(id){
	if (id !== "card") {
		$(".card").css("display","none");
		$("."+id).css("display","block");
		$(".filter_active").removeClass("filter_active");
		$("#"+id).addClass("filter_active");
	}else{
		$(".card").css("display","block");
		$(".filter_active").removeClass("filter_active");
		$("#"+id).addClass("filter_active");
	}
}