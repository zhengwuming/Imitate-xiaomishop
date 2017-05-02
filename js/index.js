/****首页主导航下拉二级导航****/
$(function(){
	$(".firstfloor").hover(function(){
		$(".secondfloor").stop();
		$(this).find(".secondfloor").show();
	},function(){
		$(".secondfloor").stop();
		$(this).find(".secondfloor").hide();
	})
})
/***********************/

/*****背景图片转换******/
$(function(){
	var bannerimg=$(".backgroundpicture img");
	var anniu=$(".banner-right li");
	var index=0;
	function demo(type){
		if(type=="r"){
			index++;
			if(index>=bannerimg.length){
				index=0;
			}
		}else if(type=="l"){
			index--;
			if(index<=-1){
				index=bannerimg.length-1;
			}
		}
		bannerimg.hide();
		bannerimg.eq(index).fadeIn();
		anniu.css({background:"rgba(0, 0, 0, 0.3)",border:"2px solid rgba(255, 255, 255, 0.4)"});
		anniu.eq(index).css({background:"rgba(255, 255, 255, 0.4)",border:"2px solid rgba(0, 0, 0, 0.4)"});
	}
	var t=setInterval(function(){
		demo("r");
	},2000);

	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			demo("r");
		},2000);
	})

	$(".bannertpz").click(function(){
		demo("l");
	})
	$(".bannertpy").click(function(){
		demo("r");
	})
	anniu.hover(function(){
		var now=$(this).index();
		anniu.css({background:"rgba(0, 0, 0, 0.3)",border:"2px solid rgba(255, 255, 255, 0.4)"})
        $(this).css({background:"rgba(255, 255, 255, 0.4)",border:"2px solid rgba(0, 0, 0, 0.4)"});
        bannerimg.hide();
        bannerimg.eq(now).fadeIn();
        index=now;
	},function(){

	})	
})
/**********************************/
