function placeholderPic(){
	var w = document.documentElement.offsetWidth ;
	document.documentElement.style.fontSize= w / 16 + 'px' ;
}
placeholderPic();
window.onresize = function(){
	placeholderPic();
}
function Host(){
	return 'http://mobile.api-test.yizhenjia.com'
}
console.log(window.location.pathname)
console.log(window.location.href.split("="))
let name = "范嘉杰";
let referrerPhone = "18602905478";
let redPacket = 20;

let phoneNum = document.getElementById("phoneNum");
let codeNum = document.getElementById("codeNum");
let getCode = document.getElementById("getCode");
let subBtn = document.getElementById("subBtn");
let $Txt = $(".contText");
let InterValObj; //timer变量，控制时间  
let count = 6; //间隔函数，1秒执行  
let curCount; //当前剩余秒数  

$("#cash").text(`${redPacket}`)
$("#cashFont").text(`接受${name}的邀请，领取${redPacket}元红包`)
 
getCode.onclick = function(){
	let phoneVal = phoneNum.value;
	let codeVal = codeNum.value;
	if(!phoneVal){
		alertFloat("请输入电话号码")
	}else{
		if(phoneVal.length != 11) {
			alertFloat('请输入11位手机号码');
			return false;
		} else if(!(/^1[34578]\d{9}$/.test(phoneVal))) {
			alertFloat("手机号码有误，请重填");
			return false;
		} else {
			//请求验证码
			console.log("success")
			YanZhengMa();
			$.ajax({
				url:Host()+'/h5_api/getCode',
				type:"post",
				data:{
					phone:phoneVal,
					type:'INVITE_YUESAO'
				},
				success:function(res){
					console.log(res)
				}
			})
		}
	}
}

subBtn.onclick = function(){
	let phoneVal = phoneNum.value;
	let codeVal = codeNum.value;
	//console.log(codeVal,phoneVal)
	if(!phoneVal){
		alertFloat("请填写电话号码")
		}else if(phoneVal.length != 11) {
			alertFloat('请输入11位手机号码');
			return false;
		} else if(!(/^1[34578]\d{9}$/.test(phoneVal))) {
			alertFloat("手机号码有误，请重填");
			return false;
		}else if(!codeVal){
			alertFloat("请填写验证码")
		} else {
			//请求数据
			console.log("success")
			$.ajax({
				url:Host()+'/h5_api/acceptYuesaoInvite',
				type:"post",
				data:{
					code:codeVal,
					phone:phoneVal,
					referrerPhone:referrerPhone
				},
				success:function(res){
					console.log(JSON.parse(res))
				}
			})
			
		}
}
function YanZhengMa() {
	curCount = count;　　
	$("#getCode").attr("disabled", "true"); //button失效
	$("#getCode").val(curCount + "S").css({
		"background": "#ccc"
	});
	InterValObj = window.setInterval(SetRemainTime, 1000); 

}

function SetRemainTime() {
	if(curCount == 1) {
		window.clearInterval(InterValObj); 
		$("#getCode").removeAttr("disabled"); //启用按钮  
		$("#getCode").val("重发验证码").css({
			"background": "#ff8e33"
		});
	} else {
		curCount--;
		$("#getCode").val(curCount + "S");
	}
}

$(".comfirmt").click(function(){
	floatHide();
})
$("#downApp").click(function(){
	let u = navigator.userAgent;
	let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端	
	if(isiOS){					
		window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yizhenjia"
	}
	else{
		window.location.href="http://a.app.qq.com/o/simple.jsp?pkgname=com.yizhenjia"
	}
})
function floatShow(){
	$(".floatZZ").show();
	$("#alertFloat").show();	
}
function floatHide(){
	$(".floatZZ").hide();
	$("#alertFloat").hide();	
}
function alertFloat(a){
	$Txt.text(a);
	floatShow();
}


