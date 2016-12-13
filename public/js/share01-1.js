		(function($) {
			/* 长宽占位 rem算法, 根据root的rem来计算各元素相对rem, 默认html 320/16 = 20px */
			function placeholderPic() {
				var w = document.documentElement.offsetWidth;
				document.documentElement.style.fontSize = w / 16 + 'px';
			}
			placeholderPic();
			window.onresize = function() {
					placeholderPic();
				}
				/*iscroll执行函数*/
				/*Scroll();*/
			function Scroll() {
				myScroll = new IScroll("#wrapper", {
					preventDefault: false,
					tap: true //默认false，防止误触
				})
			}
			/*		function Refresh(){
						myScroll.refresh()
					}
					Refresh()*/
/*			if(navigator.userAgent.match(/MicroMessenger/i)) {
				var weixinShareLogo = 'http://path/to/your/image.png';
				$('body').prepend('<div style=" overflow:hidden; width:0px; height:0; margin:0 auto; position:absolute; top:-800px;"><img src="' + weixinShareLogo + '"></div>')
			};
*/
			/********调数据*******/
			ajax();

			function ajax() {

				//获取url的参数				
				var Request = new Object();
				Request = GetRequest();
				var trackId;
				trackId = Request["trackId"];
				console.log(Request, trackId);
				//GetRequest函数
				function GetRequest() {
					var url = location.search; //获取url中"?"符后的字串
					var theRequest = new Object();
					if(url.indexOf("?") != -1) {
						var str = url.substr(1);
						strs = str.split("&");
						for(var i = 0; i < strs.length; i++) {
							theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
						}
					} else {
						console.log("url..?参数为空")
					}
					return theRequest;
				}
				//ajax获取				
				$.ajax({
					type: "post",
					dataType: "json",
					url: "http://mobile.api-test.yizhenjia.com/share/account",
					data: "trackId=" + trackId,
					success: function(data) {
						console.log(data)
						console.log(data.result)
						if(data.code=="CM005"){
							$("#share1 .p4 .sp2").css({
							"color": "#00a3e2"
						})
							$("#register1 .p4 .sp2").css({
							"color": "#00a3e2"
						})
							$("#success1 .p4").find("span").css({
							"color": "#00a3e2"
						})
						}else{

							$("#share1 .p4").find(".sp1").html(data.result.shareCount)
							$("#share1 .p4 .sp2").html(data.result.share).css({
								"color": "#00a3e2"
							});
							$("#register1 .p4").find(".sp1").html(data.result.shareRegCount)
							$("#register1 .p4 .sp2").html(data.result.shareReg).css({
								"color": "#00a3e2"
							});
							$("#success1 .p4").find("span").html(data.result.cash).css({
								"color": "#00a3e2"
							});
						
						}
					}
				})

			}
			$(".hotpoint").click(function() {
				alert("返回")
			})
			$("#bottom1").on("click", function() {
				$.ajax({
					type: "get",
					dataType: "json",
					url: "http://mobile.api-test.yizhenjia.com/share/shareSuc",
					data: "trackId=" + trackId,
					success: function(data) {
						if(data.code == 0) { //成功的处理  
							console.log(data.code)
							alert("分享到微信")
						} else {
							alert(data.errorMsg)
						}
					}
				})
			})
		})(Zepto)