var male=["萌萌哒","超逗比","很爷们","深谋远虑","大梦想家","霸道总裁","脑洞大开","男友力","大众男神","银河天才","足智多谋","艺术家","洪荒之力","自带光环","小公举","高富帅","小目标","大魔王","学霸","创意满分","小神童","小正太","胸怀大志","专一","敢想敢做","有钱任性","成熟稳重","万人迷","能赚大钱","长腿欧巴","国民老公","小鲜肉",,"选择困难","颜值爆表","游戏狂","搬砖青年"],female=["萌萌哒","聪明伶俐","女汉子","玛丽苏","白瘦美","女神经","小公举","人生赢家","大艺术家","高贵冷艳","脑洞大开","创意满分","女王范","天马行空","乖宝宝","傻白甜","有钱任性","剁手族","购物狂","有爱心","超温柔","甜美可人","小可爱","忘性大","明星范","万人迷","像风一样","国民女神","颜值爆表","爱睡懒觉","纠结症","矫情鬼","贴心棉袄","爱哭鬼","暖心棉袄","二愣子","熬夜党","小可爱"],money=["1","6","9","66","99","188","688","999","1999","2999","6666","6999","8999","9999","16666","28888","89999","99999","16666","28888","66666","888888","999999","1666666","6888888","98888888","100000000","100000000","100000000","100000000","100000000","100000000","100000000","100000000","100000000"],prey=["images/g.png","images/h.png","images/i.png","images/j.png"];$(".btn1").click(function(){function a(a){var e=Math.floor(32*Math.random());$(".list1").html(a[e]),a.splice(e,1);var n=Math.floor(31*Math.random());$(".list2").html(a[n]),a.splice(n,1);var o=Math.floor(30*Math.random());$(".list3").html(a[o]),a.splice(o,1);var r=Math.floor(29*Math.random());$(".list4").html(a[r]),a.splice(r,1);var s=Math.floor(28*Math.random());$(".list5").html(a[s]),a.splice(s,1);var t=Math.floor(27*Math.random());$(".list6").html(a[t]),a.splice(t,1);var c=Math.floor(26*Math.random());$(".list7").html(a[c]),a.splice(c,1);var g=Math.floor(25*Math.random());$(".list8").html(a[g])}function e(){$(".money .p2").html("￥"+t+"元"),t<=999?$(".money .p3").css({background:"url(images/e.png) no-repeat center","background-size":"90%"}):t>999&&t<=9999?$(".money .p3").css({background:"url(images/a.png) no-repeat center","background-size":"90%"}):t>9999&&t<=999999?$(".money .p3").css({background:"url(images/b.png) no-repeat center","background-size":"90%"}):t>999999&&t<=98888888?$(".money .p3").css({background:"url(images/c.png) no-repeat center","background-size":"90%"}):1e8==t&&$(".money .p3").css({background:"url(images/d.png) no-repeat center","background-size":"90%"})}function n(a){html2canvas(document.getElementById(a),{allowTaint:!0,taintTest:!1,onrendered:function(a){a.id="mycanvas";var e=a.toDataURL(),n=document.createElement("img");n.src=e,console.log($(".float1 img").length),0==$(".float1 img").length?$("#float .float1").append(n):($(".float1 img").remove(),$("#float .float1").append(n))}})}var o=$(".inp").val(),r=$(".sex").val(),s=Math.floor(34*Math.random()),t=money[s];console.log(t);var c=Math.floor(4*Math.random()),g=prey[c],l=$(".inp1").val();switch(l){case"鸡":$(".conn2").css({background:"url(images/鸡.png) no-repeat","background-size":"100%"});break;case"鼠":$(".conn2").css({background:"url(images/鼠.png) no-repeat","background-size":"100%"});break;case"牛":$(".conn2").css({background:"url(images/牛.png) no-repeat","background-size":"100%"});break;case"虎":$(".conn2").css({background:"url(images/虎.png) no-repeat","background-size":"100%"});break;case"兔":$(".conn2").css({background:"url(images/兔.png) no-repeat","background-size":"100%"});break;case"龙":$(".conn2").css({background:"url(images/龙.png) no-repeat","background-size":"100%"});break;case"蛇":$(".conn2").css({background:"url(images/蛇.png) no-repeat","background-size":"100%"});break;case"马":$(".conn2").css({background:"url(images/马.png) no-repeat","background-size":"100%"});break;case"羊":$(".conn2").css({background:"url(images/羊.png) no-repeat","background-size":"100%"});break;case"猴":$(".conn2").css({background:"url(images/猴.png) no-repeat","background-size":"100%"});break;case"狗":$(".conn2").css({background:"url(images/狗.png) no-repeat","background-size":"100%"});break;case"猪":$(".conn2").css({background:"url(images/猪.png) no-repeat","background-size":"100%"})}0==o.length?alert("姓名不能为空"):$(".addImg_textarea_cha").length>0?($("#float").show(),$(".namen").html(o),$("#float").click(function(){$(".float1 img").hide(),$("#float").hide()}),e(),a("男"==r?male:female),$(".prey .pre2").html("<img src='"+g+"'>"),n("float"),setTimeout(function(){$("#timeOut").show(),setTimeout(function(){$("#timeOut").hide()},3e3)},1e3)):alert("请上传图片")});