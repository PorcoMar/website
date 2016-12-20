$(function(){
	function placeholderPic() {
		var w = document.documentElement.offsetWidth;
		document.documentElement.style.fontSize = w / 16 + 'px';
	}
	placeholderPic();
	window.onresize = function() {
			placeholderPic();
	}	
	$(".section").css({"background-size":"100%"});
/*	$(".right_nav").on("click",function(){
		window.location.href = "shangjia.yizhenjia.com"
	})*/
})
$(function() {
	var w = document.documentElement.offsetWidth;
	var h = $(window).height();
	document.title = w;
		$(document).ready(function() {
			if(w>768){
				run();	
			}else{
				
				$("#container").css({"display":"block","width":"16rem","height":"h"});
				$("#container img").css({"width":"100%"});
				$("#fullpage").css({"display":"none"});
			}
		});
	
	
		function run(){
			$("#fullpage").css({"display":"block"});
			$('#fullpage').fullpage({
				'verticalCentered': false,//内容是否垂直居中
				'anchors': ['page1', 'page2', 'page3', 'page4','page5'],// 定义锚链接 
				'css3': true,//是否transform滑动
				'navigation': true,//出现circle
				'navigationPosition': 'right',// 项目导航的位置 
				'menu': '#header',//设定的相关属性与 anchors 的值对应后，菜单可以控制滚动
			    onLeave: function(index, nextIndex, direction){
			        if(index == 3 ){
						//set_animat33();
			        }
			        else if(index == 5 ){
			           // set_animat55();
			        }
			    },				
				afterLoad: function(anchorLink, index){
					if(index ==3){	
						clearInterval(timer)
						set_animat3();
						var timer = setInterval(set_animat3,1000);
					}else if(anchorLink == 'page5'){
						clearInterval(timer)
						set_animat5();
						var timer = setInterval(set_animat5,1000);
					}
				}
				
				
			});			
		}	

	function set_animat3(){		
		
		$(".im1")
		.animate({"top":"36.5%"},1000)
		.animate({"top":"37.5%"},1000);
		$(".im2").animate({"top":"46.5%"},1000)
		.animate({"top":"47.5%"},1000);
		$(".im3").animate({"top":"55.5%"},1000)
		.animate({"top":"56.5%"},1000); 
	}
	
	function set_animat33(){
/*		if(!$(".img1").is(":animated")){//没有动画
			alert(1)
		} else{
			alert(2)
		}*/
		$("#section2 .im1").stop(false,true).animate({"bottom":"-150px"},500);	
		$("#section2 .im2").stop(true).animate({"bottom":"-100px"},100);
		$("#section2 .im3").stop(true).animate({"bottom":"-100px"},100);	

	}
	
	function set_animat5(){		
		$(".aa").animate({"top":"15.8%"},1000).animate({"top":"14.2%"},1000);
		$(".bb").animate({"top":"39.8%"},1000).animate({"top":"38.2%"},1000);
		$(".cc").animate({"top":"30.8%"},1000).animate({"top":"29.2%"},1000);
	}
	
	function set_animat55(){
		$(".aa").css({"top":"-100px"});
		$(".bb").css({"top":"-100px"});
		$(".cc").css({"top":"-100px"});
	}
	
});