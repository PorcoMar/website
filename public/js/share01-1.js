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
/*		wx.onMenuShareAppMessage({
		    title: '', // 分享标题
		    desc: '', // 分享描述
		    link: '', // 分享链接
		    imgUrl: 'img/logo_s.png', // 分享图标
		    type: '', // 分享类型,music、video或link，不填默认为link
		    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		    success: function () { 
		        // 用户确认分享后执行的回调函数
		    },
		    cancel: function () { 
		        // 用户取消分享后执行的回调函数
		    }
		});*/
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
				
				
			//share_success_callback()
			

				
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

		})(Zepto)