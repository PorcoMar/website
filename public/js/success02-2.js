		(function($) {
/* 长宽占位 rem算法, 根据root的rem来计算各元素相对rem, 默认html 320/16 = 20px */
		 	function placeholderPic(){
		  		var w = document.documentElement.offsetWidth ;
		  		document.documentElement.style.fontSize= w / 16 + 'px' ;
		 	}
				placeholderPic();
		 	window.onresize = function(){
		  		placeholderPic();
		 	}	
/*iscroll执行函数*/
			function Scroll() { 
				myScroll = new IScroll("#wrapper", {
					preventDefault:false,//默认true,改为false，阻止默认为false就能点击input(默认)
					tap: true //默认false，防止误触
				})
			}
			//Scroll();

			$(".hotpoint").click(function() {
				window.location.href="register02-1.html"
			})
			$(".btn1").click(function() {
				alert("立即使用")
			})
		})(Zepto)
