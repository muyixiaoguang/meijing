$(function () {
	var top = window.screen.height / 2 - 250;   
	var left = window.screen.width / 2 - 300;  
	var pic = thumb;   
	var rLink =url; 
	var site = source_link;
	var summary = summary;
	$(".sharea1").click(shareTSina);
	$(".sharea2").click(shareToWb);
	$(".sharea3").click(browserEvent($(".sharea3"),www_url,"砍柴网"));
	$(".msharea1").click(shareTSina);
	$(".msharea3").click(shareQzone);	
	/*title是标题，rLink链接，summary内容，site分享来源，pic分享图片路径,分享到新浪微博*/  
	function shareTSina() {
		window.open("http://service.weibo.com/share/share.php?pic=" +encodeURIComponent(pic) +"&title=" +    
		encodeURIComponent(title.replace(/&nbsp;/g, " ").replace(/<br \/>/g, " "))+ "&url=" + encodeURIComponent(rLink),   
		"分享至新浪微博",   
		"height=500,width=600,top=" + top + ",left=" + left + ",toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");   
	}
	function shareToWb(){
		window.open('http://v.t.qq.com/share/share.php?url='+encodeURIComponent(rLink)+
		'&title='+encodeURI(title)+'&appkey='+encodeURI(site),'_blank',
		'scrollbars=no,width=600,height=450,left=' + left + ',top=' + top + ',status=no,resizable=yes');
	}
	function shareQzone() {
		window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?title='+
		encodeURIComponent(title)+'&url='+encodeURIComponent(rLink)+'&summary='+
		encodeURIComponent(summary)+ '&site='+encodeURIComponent(site)
		,'_blank','scrollbars=no,width=600,height=450,left=' + left + ',top=' + top + ',status=no,resizable=yes');
	}
	//
	function browserEvent(obj, url, title) {
		obj = obj.get(0);
		var e = window.event || arguments.callee.caller.arguments[0];  
		var B = {
			IE : /MSIE/.test(window.navigator.userAgent) && !window.opera  , 
			FF : /Firefox/.test(window.navigator.userAgent)  ,
			OP : !!window.opera  
		};  
		obj.onmousedown = null;  
		if (B.IE) {
			obj.attachEvent("onmouseup", function () {  
				try {  
					window.external.AddFavorite(url, title);  
					window.event.returnValue = false;  
				} catch (exp) {}  
			});  
		} else {  
			if (B.FF || obj.nodeName.toLowerCase() == "a") { 
				obj.setAttribute("rel", "sidebar"), obj.title = title, obj.href = url;  
			} else if (B.OP) {
				var a = document.createElement("a");  
				a.rel = "sidebar", a.title = title, a.href = url;  
				obj.parentNode.insertBefore(a, obj);  
				a.appendChild(obj);  
				a = null;  
			}  
		}  
	}; 
	//	
	var tfontsize = $(".tfontsize");
	var articleContent = $(".article-content");//summary
	var allP = articleContent.find("p");
	allP.css({
		textIndent:"0em"
	});
	function fontSize($szie) {
		allP.each(function (i) {
			if (allP.eq(i).parent("div").attr("class") != "say") {
				allP.eq(i).css({
					fontSize : $szie+"px"
				});
			} 
		});
	}
	fontSize(16);
	tfontsize.toggle(function () {
		fontSize(18)
	},function () {
		fontSize(16)
	});
	
	
	/**
	 * 百度 站内搜索
	 */
	(function () {
		var baiduSearch = $("#baiduSearch");
		if (baiduSearch == "undefined") return ;
		var but = baiduSearch.next("input[type=button]");
		var promptText = baiduSearch.attr("placeholder");
		but.css({
			cursor:"pointert"
		});
		baiduSearch.focus(function () {
			searchVal = baiduSearch.val();
			baiduSearch.attr("placeholder",'');
			if (searchVal == promptText) baiduSearch.val("");
		})
		var searchVal = null;
		var link = "http://so.ikanchai.com/cse/search?s=754371921301160334&ie=utf-8&q=";
		var pattern = new RegExp("^\\s*$","i");
		but.click(function () {
			searchVal = baiduSearch.val();
			if (!pattern.test(searchVal)) {
				link += searchVal;
				window.open(link); 
			}
			else {
				baiduSearch.val(promptText);
				 return ;
			}
		});
	})();
	
	
	
	
	
});