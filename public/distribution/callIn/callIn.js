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

$("#btn1").click(function(){
	alert(1)
})
$("#btn2").click(function(){
	alert(2)
})
$("#btn3").click(function(){
	alert(3)
})
$("#btn4").click(function(){
	alert(4)
})
