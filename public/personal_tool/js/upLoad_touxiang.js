function addImgTextarea(a){$(a).parent().parent().removeClass("changeFile");var e=$(a).parent().parent().attr("class").substring(9,$(a).parent().parent().attr("class").length);1==e&&($(a).parent().parent().siblings(".classNUll2").hasClass("changeFile")?$(".classNUll3,.classNUll3").show():$(a).parent().parent().siblings(".classNUll3").hasClass("changeFile")?$(".classNUll3").show():$(".classNUll2,.classNUll3").hide()),2==e&&($(a).parent().parent().siblings(".classNUll3").hasClass("changeFile")?$(".classNUll3").show():$(".classNUll3").hide()),3==e&&($(a).parent().parent().siblings(".classNUll3").hasClass("changeFile")||$(a).parent().parent().siblings(".classNUll2").hasClass("changeFile")||($(a).parent().parent().siblings(".classNUll1").hasClass("changeFile")?($(".classNUll2").show(),$(".classNUll3").hide()):$(".classNUll2,.classNUll3").hide())),$(".addHuaXq_top_addImg").show(),$(a).parent().siblings().show(),$(a).parent().remove(),sum--,$(".addShopTwo_sum .firstSpan").text(sum)}function addImgxiangJiimg(a,e){var s=a.files[0],l=null;if(s){var t=/^(image\/jpeg|image\/png)$/i;if(!t.test(s.type))return alert("请选择jpeg、png格式的图片"),init(),!1;array.push($(a).val()),$("#loading").remove(),sum++,$(".classNUll"+e).append("<div class='addImg_xiangJi_img addImg_xiangJi_imgTwoTwo' style='float:left;'><div id='loading'></div><img src='' class='addImg addImg_xiangJi_imgTwo"+e+" ABC' onclick='changeImage(this)'><img src='images/textarea_cha.png' class='addImg_textarea_cha' onclick='addImgTextarea(this)'></div>"),$(".classNUll"+e).find(".setAddShopTwo_addImg_div").hide(),$("#loading").show(),$(".addShopTwo_sum .firstSpan").text(sum),3==sum?$(".addHuaXq_top_addImg").hide():$(".addHuaXq_top_addImg").show(),EXIF.getData(s,function(){EXIF.getAllTags(this),l=EXIF.getTag(this,"Orientation")});var n=new FileReader;n.onload=function(a){init();var s=new Image;s.src=a.target.result,s.onload=function(){var a=this.naturalWidth,t=this.naturalHeight,n=a/t;a>t&&a>2e3?(a=1e3,t=1e3/n):a<t&&t>2e3&&(t=1e3,a=1e3*n);var i=document.createElement("canvas"),g=i.getContext("2d");if(i.width=a,i.height=t,l&&""!=l&&1!=l){var r=0;switch(l){case 6:r=90,i.width=t,i.height=a,g.translate(t/2,a/2),g.rotate(r*Math.PI/180),g.translate(-a/2,-t/2),g.drawImage(s,0,0,a,t);break;case 8:r=-90,i.width=t,i.height=a,g.translate(t/2,a/2),g.rotate(r*Math.PI/180),g.translate(-a/2,-t/2),g.drawImage(s,0,0,a,t);break;case 3:r=-180,g.rotate(r*Math.PI/180),g.drawImage(s,-a,-t,a,t)}}else g.drawImage(s,0,0,a,t);var d=i.toDataURL("image/png");1==e&&$(".classNUll2").show(),2==e&&$(".classNUll3").show(),$(".classNUll"+e).addClass("changeFile"),$(".addImg_xiangJi_imgTwo"+e).attr("src",d)}},n.readAsDataURL(s);var i=$(".ABC").clone();if(1==i.length)$(".touxiang").html(i);else{var g=i.length-1;$(".touxiang img").remove(),console.log($(".touxiang")),$(".touxiang").append(i[g])}}}function hideImage(){$(".changeImage,.changeImage2,.change").hide()}function changeImage(a){$(".changeImage,.changeImage2,.change").show(),$(".changeImage2 .change").attr("src",$(a).attr("src"))}function init(){$("#loading").fadeOut()}var sum=0,array=[];