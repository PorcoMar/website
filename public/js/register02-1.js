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
			function Scroll() {
				myScroll = new IScroll("#wrapper", {
					preventDefault: false, //默认true,改为false，阻止默认为false就能点击input(默认)
					tap: true //默认false，防止误触
				})
			}
			//Scroll();

			/*顶上返回*/
			$(".hotpoint").click(function() {
					window.location.href = "share01-1.html";
				})
				/*输入手机号*/
			$(".inp1").bind("focus", function() {
					$(this).val("").css("color", "#909090");
				})
				/*输入验证码*/
			$(".inp2").bind("focus", function() {
				$(this).val("").css("color", "#909090");
			})
/*验证终端跳转下载页面*/			
			$("#inp_btn").click(function(){
/*				var u = navigator.userAgent;
				var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
				var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
				if(isAndroid){
					window.location.href="http://android.myapp.com/"
				}
				else if(isiOS){					
				window.location.href="https://itunes.apple.com/us/genre/ios/id36?mt=8"
				}
				else{
					alert("不支持您的系统")
				}	*/
				window.location.href="http://app.qq.com/"
			})
			$(".ban1").click(function(){
				window.location.href="http://app.qq.com/"				
			})
			$(".ban2").click(function(){
				window.location.href="http://app.qq.com/"				
			})
			$(".ban3").click(function(){
				window.location.href="http://app.qq.com/"				
			})
			$(".ban4").click(function(){
				window.location.href="http://app.qq.com/"				
			})
			/*发送验证码*/
			/*			$(".btn1").click(function(){
							clearInterval(timer);
							var val = $(this).val();
							var _this = $(this)
							val=60;
							var timer = setInterval(function(){
								val--;	
								_this.val(val)
								if(_this.val()==-1){
									clearInterval(timer);
									_this.val("发送验证码").css({"background":"#FFB400"})
								}
							},1000)
							$(this).css({"opacity":"0.8","background":"#ccc"})
							
							$.ajax({
									url:"http://mobile.api-test.yizhenjia.com/share/getCode",
									success:function(data){
										
									}
							})
						})*/
			/********************************这里到最后是短信验证*********************************************/
			$(".btn1").click(function() {
				sendMessage()
			})
			var InterValObj; //timer变量，控制时间  
			var count = 60; //间隔函数，1秒执行  
			var curCount; //当前剩余秒数  

			function sendMessage() {
				var mobile = encodeURIComponent($("#mobile").val());
				//validatemobile(mobile);//调用上边的方法验证手机号码的正确性  
				if(mobile.length == 0) {
					alert('请输入手机号码！');
					// document.form1.mobile.focus();  
					return false;
				} else if(mobile.length != 11) {
					alert('请输入有效的手机号码！');
					//document.form1.mobile.focus();  
					return false;
				} else if(!(/^1[34578]\d{9}$/.test(mobile))) {
					alert("手机号码有误，请重填");
					return false;
				} else {
					YanZhengMa()
				}

				function YanZhengMa() {
					curCount = count;　　 //设置button效果，开始计时  
					$("#btnSendCode").attr("disabled", "true"); //button失效
					$("#btnSendCode").val(curCount + "S").css({
						"opacity": "0.8",
						"background": "#ccc"
					});
					InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次  

 //向后台传入phone参数  
					$.ajax({　　
						type: "post",　　
						url: 'http://mobile.api-test.yizhenjia.com/share/getCode', 
						dataType: "json", 
						data: "phone=" + mobile,
						　　success: function(data) {
							if(data.code == 0) { //成功的处理  
								console.log(data, data.code);
							} else if(data.code != 0) { //失败的处理  
								alert(data.errorMsg);
								console.log(data, data.errorMsg);
							}
						}
					});

				}

			}
//sendMassage结束

//timer处理函数  
			function SetRemainTime() {
				if(curCount == 0) {
					window.clearInterval(InterValObj); //停止计时器  
					$("#btnSendCode").removeAttr("disabled"); //启用按钮  
					$("#btnSendCode").val("重发验证码").css({
						"background": "#FFB400"
					});
				} else {
					curCount--;
					$("#btnSendCode").val(curCount + "S");
				}
			}
//输入正则判断
			function validatemobile(mobile) {
				if(mobile.length == 0) {
					alert('请输入手机号码！');
					// document.form1.mobile.focus();  
					return false;
				}
				if(mobile.length != 11) {
					alert('请输入有效的手机号码！');
					//document.form1.mobile.focus();  
					return false;
				}

				if(!(/^1[34578]\d{9}$/.test(mobile))) {
					alert("手机号码有误，请重填");
					return false;
				}
			}

/*立即领取 提交*/
			$(".inp3").click(function() {
				var code = encodeURIComponent($(".inp2").val());
				var mobile = encodeURIComponent($(".inp1").val());
//获取url的参数				
				 var Request = new Object();
				 Request = GetRequest();
				 var trackId;
				 trackId =Request["trackId"];
				 console.log(Request,trackId);	

//向后台发送处理数据  
				$.ajax({　　
					type: "post",
					//url: 'http://mobile.api-test.yizhenjia.com/share/receive?code='+code+'&phone='+mobile+'&trackId=12',
					url: 'http://mobile.api-test.yizhenjia.com/share/receive',
					dataType: "json",
					data: {
						code: code,
						phone: mobile,
						trackId: trackId
					},
					　　success: function(data) {
						console.log(data)
						var inp1 = $(".inp1").val();
						if(data.code == 0) { //成功的处理  
							$(".float3").show()
							setTimeout(show,1000);
							function show(){
							window.location.href = "success02-2.html"
							}
						}else if(data.code == "CM007"){
							$(".float5").show();
							setTimeout(show,2000);
							function show(){
								$(".float5").hide();
							}
						}else{
							$(".float4").val(data.errorMsg)
							$(".float4").show()
							setTimeout(show,2000);
							function show(){
								$(".float4").hide();
								$(".inp1").val(inp1)
							}							
						}
					}
				});
			 
			})
//提交结束
				function GetRequest() {   
					var url = location.search; //获取url中"?"符后的字串
				    var theRequest = new Object();   
				    if (url.indexOf("?") != -1) {   
				      var str = url.substr(1);   
				      strs = str.split("&");   
				      for(var i = 0; i < strs.length; i ++) {   
				         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);   
				      }   
				   }else{
				   	console.log("?后参数为空")
				   }
				   return theRequest;   
				} 	
								
		})(Zepto)
		
