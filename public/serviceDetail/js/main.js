$(document).ready(function(){
	//获取id
	 function getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }
    var id = getUrlParam("id");
    console.log("id:",id);
    //获取文章内容信息
    //http://mobile.api-test.yizhenjia.com/h5_api/serviceDesc?id=52
    $.get("http://mobile.api-test.yizhenjia.com/h5_api/serviceDesc",{id:id},function(data){
        console.log("data:",data);
    	data = jQuery.parseJSON(data);
    	if(data["code"] == "0"){
            var content = data["result"]["desc"];
            $("#content").html(content);
            /*
    		var title = data["result"]["title"];
    		var source = data["result"]["source"];
    		var content = data["result"]["content"];
    		$("#title").text(title);
    		$("#source").text(source);
    		$("#content").html(content);
    		$("meta[name='share_img']").attr("content",data["result"]["thumbPath"]);
    		$("meta[name='description']").attr("content",data["result"]["summary"]);
            */
            document.title = title;
    	}

    })
})