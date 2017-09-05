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

//产品菜单二级导航
$(function(){
	$(".bannerleft-firstfloor").hover(function(){
		$(this).find(".bannerleft-secondfloor").show();
	},function(){
		$(this).find(".bannerleft-secondfloor").hide();
	})
})
/***********************/

/**********右边搜索框**********/
$(function(){
	var odiv=$(".keyword-list");
                $(".searchtext").click(function(event){//为按钮注册click事件处理函数，事件处理函数的参数是事件对象。
                  showDiv();
                  $('input').css('border','1px solid #ff6700')
                $('.searchbar-submit').css('border','1px solid #ff6700') 
                $('.search-hot-words').css('display','none');
                $('.search-form').css('border','none');
               
                $(document).one("click",function(){
                    odiv.hide();
                    $('input').css('border','1px solid #e0e0e0')
                    $('.searchbar-submit').css('border','1px solid #e0e0e0')
                    $('.search-hot-words').css('display','block');
                  });
                  //用来阻止事件冒泡，否则点击事件冒泡到文档，那么div元素显示后又会瞬间被隐藏。
                  event.stopPropagation();
                });
                odiv.click(function(event){
                  event.stopPropagation();
                })
                function showDiv(){
                  odiv.fadeIn();
                }
})
/****************************/
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
	},3000);

	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(function(){
			demo("r");
		},3000);
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

/**图片放大缩小 **/
      $(function(){
         $(".HotcommentProduct1").mouseenter(function () {
        var i=$(this).index();
        $('.HotcommentProductsPicture img').eq(i).stop().animate({"width": "320px", "height": "240px"}, 500);
      }).mouseleave(function () {
         var i=$(this).index();
        $('.HotcommentProductsPicture img').eq(i).stop().animate({"top": "0px", "left": "0px", "width": "296px", "height": "220px" }, 500);
      }); 
      })
      
/********************/

/*****小米明星产品*****/
$(function(){
	//手动滚动
          $('.singleControl').hover(function(){
          clearInterval(timer);
        },function(){
          timer=setInterval(active,5000);
        })
          
          $('.singleControl').click(function(){
            
            $('.singleProductbox').css({marginLeft:'-1226px'});
            $('.singleControl').eq(1).addClass('active2').siblings().removeClass('active2');
            
          });
          $('.singleControl').eq(0).click(function(){
            $('.singleProductbox').css({marginLeft:'0'});
           $('.singleControl').eq(0).addClass('active2').siblings().removeClass('active2');
          });
    
    //自动轮播
          var timer=setInterval(active,5000);
          function active(){
            $('.singleProductbox').css({marginLeft:'0'});
            $('.singleControl').eq(0).addClass('active2').siblings().removeClass('active2');
            var num= parseInt( $('.singleProductbox').css('marginLeft') );
                if(num==0){
                  $('.singleProductbox').css({marginLeft:'-1240px'});
                  $('.singleControl').eq(1).addClass('active2').siblings().removeClass('active2');
                }
        }
          
    //鼠标事件              
            $('.singleProductbox').hover(function(){
              clearInterval(timer);
            },function(){
              timer=setInterval(active,5000);
            })
})


/*******为你推荐*******/
$(function(){
	//手动滚动
          $('.recommendcontrol').hover(function(){
          clearInterval(timer);
        },function(){
          timer=setInterval(active,5000);
        })
          
          $('.recommendcontrol').click(function(){
            
            $('.recommend-products').css({marginLeft:'-1226px'});
            $('.recommendcontrol').eq(1).addClass('active2').siblings().removeClass('active2');
            
          });
          $('.recommendcontrol').eq(0).click(function(){
            $('.recommend-products').css({marginLeft:'0'});
           $('.recommendcontrol').eq(0).addClass('active2').siblings().removeClass('active2');
          });
    
    //自动轮播
          var timer=setInterval(active,5000);
          function active(){
            $('.recommend-products').css({marginLeft:'0'});
            $('.recommendcontrol').eq(0).addClass('active2').siblings().removeClass('active2');
            var num= parseInt( $('.recommend-products').css('marginLeft') );
                if(num==0){
                  $('.recommend-products').css({marginLeft:'-1240px'});
                  $('.recommendcontrol').eq(1).addClass('active2').siblings().removeClass('active2');
                }
        }
          
    //鼠标事件              
            $('.recommend-products').hover(function(){
              clearInterval(timer);
            },function(){
              timer=setInterval(active,5000);
            })
})
/******为你推荐结束*******/

/*********内容开始*********/
$('.contentControl').click(function(){
	$('.content-list').css({marginLeft:'-296px'});
});
$('.contentControl').eq(0).click(function(){
	$('.content-list').css({marginLeft:'0'});
});
/*********内容结束*********/