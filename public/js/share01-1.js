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
			Scroll();
			function Scroll() { 
				myScroll = new IScroll("#wrapper", {
					preventDefault:false,
					tap: true //默认false，防止误触
				})
			}
			/*		function Refresh(){
						myScroll.refresh()
					}
					Refresh()*/
	
/********调数据*******/	
			ajax();
			function ajax(){					
				$.ajax({
					type:"get",
					dataType:"json",
					url:"http://mobile.api-test.yizhenjia.com/share/account?trackId",
					success:function(data){
//						console.log(data)
//						console.log(data.result)
//						console.log(data.result.share,data.result.shareReg,data.result.cash,data.result.shareRegCount,data.result.shareCount)
						$("#share1 .p4").find(".sp1").html(data.result.shareCount)
						$("#share1 .p4 .sp2").html(data.result.share).css({"color":"#00a3e2"})
						$("#register1 .p4").find(".sp1").html(data.result.shareRegCount)
						$("#register1 .p4 .sp2").html(data.result.shareReg).css({"color":"#00a3e2"})
						$("#success1 .p4").find("span").html(data.result.cash).css({"color":"#00a3e2"})
					}
				})

			}			
			$(".hotpoint").click(function() {
				alert("返回")
			})
			$("#bottom1").on("click",function(){
				$.ajax({
					type:"get",
					dataType:"json",
					url:"http://mobile.api-test.yizhenjia.com/share/shareSuc?trackId",
					success:function(data){
			            if(data.code==0){//成功的处理  
						console.log(data.code)			                
						window.location.href="register02-1.html"
			            }else{
			            	alert(data.errorMsg)
			            }
					}
				})				
			})
		})(Zepto)