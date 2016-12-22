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
				window.location.href = "register02-1.html"
			})

			$(".ban1").click(function(){
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
				if(isAndroid){
					window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yizhenjia"
				}
				else if(isiOS){					
				window.location.href="https://itunes.apple.com/cn/app/id1148484442?mt=8"
				}
				else{
					alert("不支持您的系统")
				}		
			})
			$(".ban2").click(function(){
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
				if(isAndroid){
					window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yizhenjia"
				}
				else if(isiOS){					
				window.location.href="https://itunes.apple.com/cn/app/id1148484442?mt=8"
				}
				else{
					alert("不支持您的系统")
				}				
			})
			$(".ban3").click(function(){
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
				if(isAndroid){
					window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yizhenjia"
				}
				else if(isiOS){					
				window.location.href="https://itunes.apple.com/cn/app/id1148484442?mt=8"
				}
				else{
					alert("不支持您的系统")
				}				
			})
			$(".ban4").click(function(){
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
				if(isAndroid){
					window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yizhenjia"
				}
				else if(isiOS){					
				window.location.href="https://itunes.apple.com/cn/app/id1148484442?mt=8"
				}
				else{
					alert("不支持您的系统")
				}			
			})
			$(".btn1").click(function() {
				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
				if(isAndroid){
					window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yizhenjia"
				}
				else if(isiOS){					
				window.location.href="https://itunes.apple.com/cn/app/id1148484442?mt=8"
				}
				else{
					alert("不支持您的系统")
				}
			})
		})(Zepto)
