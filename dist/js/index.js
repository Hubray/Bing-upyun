"use strict";$("#pic-js").on("click",".pic-item",function(){window.location.href="html/detail.html?daydata="+$(this).attr("data-day")}),imgpro("#carousel-js");for(var i=0;i<12;i++){var ele="#pic-js-son"+i;imgpro(ele)}for(var _i=0;_i<3;_i++){var carouselStr="",imgMsg=getImgMsg(_i),carouselStr="\n            <h5>"+(imgTitS=(imgTitS=(imgTit=imgMsg.bing_title).replace(/\([^\)]*\)/g,"")).replace(/\s*$/g,""))+"</h5>\n            <p>"+imgTit+"</p>\n    ";$(".carousel-caption").eq(_i).empty().append(carouselStr)}for(var _i2=0;_i2<12;_i2++){var imgTitS,imgTit=(imgMsg=getImgMsg(_i2)).bing_title,imgDate=imgMsg.submission_date;imgTitS='<span class="badge badge-secondary">'+imgDate+"</span><br>"+(imgTitS=(imgTitS=imgTit.replace(/\([^\)]*\)/g,"")).replace(/\s*$/g,"")),$("#pic-js").children().eq(_i2).children("p").empty().append(imgTitS)}