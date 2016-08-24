$(function () {

	$.ajax({
		url:'getArticle',
		data:{page:1},
		type:'get',
		success:function (data) {
			if(data!=null&& data.length>0){
				var t='';
				var obj=eval(data);
				var len=obj.length;
				for (var i = 0; i < len; i++) {
					t+='<div class="hotbox">';
					t+='	<div class="hotimg">';
					t+='	<div class="hotimgzz"></div>';
					t+='	<img src="'+obj[i].Image+'" alt="" width="250" height="165">';
					t+='	<div class="standpoint">观点</div>';
					t+='	<a class="zzsz" href="/article?id='+obj[i].Id+'" target="_blank" title="'+obj[i].Title+'"></a>';
					t+='	</div>';
					t+='	<h3><a href="/a/view/opinion/2015/0207/204.html">'+obj[i].Title+'</a></h3>';
					t+='<p>'+00+'</p>';
					t+='<span>阅读：129</span><span>'+obj[i].CreateDate+'</span>';
					t+='</div>';
				}
				$(".hot.tuijian").append(t);
			}
		}
	})

	function P (arg) {
		console.log(arg);
	}
	/**
	 * 	最新动态
	 */
	(function () {
		var latestnews = $("div.latestnews");
			if (latestnews.size() ==0)  return;
			latestnews.css({
				overflow:'hidden'
			});
		var RollH = latestnews.height();
		var ul = latestnews.find("ul");
		var li = ul.find("li");
		var num = 1;
		var moveDistence = -num*RollH;
		var cloneFirstLi = li.eq(0).clone();
			ul.append(cloneFirstLi);
			li = ul.find("li");
		var Size = li.size();
		autoRoll();
		function autoRoll () {
			if (num == Size) {
				 ul.css({top:0});
				 num =1;
				 moveDistence = -num*RollH;
				 autoRoll();
			} else {
				setTimeout(function () {
					ul.animate({
						top : moveDistence
					},"slow",function () {
						num++;
						moveDistence =  -num*RollH;
						autoRoll();
					});
				},2000);
			}
			
		}
	}) ();
		/**
		 * 首页幻灯片
		 */
	 (function () {
	 	var m_slide = $('div.m-slide');
	 	if (m_slide == "undefined") return ;
	 	var imgUl = m_slide.children(".img");
	 	var descUl = m_slide.find("#ifocus_tx").children("ul");
	 	var tabUl = m_slide.children(".tab");
	 	var imgLi = imgUl.find("li");
	 	var descLi = descUl.find("li");
	 	var tabLi = tabUl.find("li");
	 	tabLi.width(130);
	 	var activeNum = 0;	//	当前触发 num
	 	var isAct = true;		//	动画是否执行完毕
	 	avtive(0);			//	初始化
	 	imgLi.each(function (i) {
	 		(function (i) {
	 			tabLi.eq(i).mouseenter(function () {
	 				if (activeNum == i) return;
	 				avtive(i);
	 			});
	 		})(i)
	 	});
	 	/**
	 	 * 控制器
	 	 */
	 	function avtive (num) {
	 		if (!isAct) return;
	 		isAct = false;
	 		tabLi.eq(activeNum).attr("class",'');
	 		tabLi.eq(num).attr("class",'on');
	 		imgLi.eq(activeNum).fadeOut("fast");
	 		imgLi.eq(num).fadeIn("fast",function () {
	 			isAct = true;
	 		});
	 		descLi.eq(activeNum).hide();
	 		descLi.eq(num).show();
	 		activeNum = num;
	 	}
	 	/**
	 	 * 自动执行
	 	 */
	 	setInterval(function () {
	 		var num = (activeNum+1)%4;
	 		if (isAct) tabLi.eq(num).trigger("mouseenter");
	 	},2000);
	 })();
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
		var link = "/so.ikanchai.com/cse/search?s=754371921301160334&ie=utf-8&q=";
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
	/**
	 * 首页 今日头条
	 */
	 (function () {
	 	var sideMenu = $("div.sideMenu"); 
	 	if(sideMenu == "undefined") return ;
	 	var h3 = sideMenu.find("h3");
	 	var ul = sideMenu.find("ul");
	 	var activeNum = 0;	//	当前触发 num
	 	var isAct = true;		//	动画是否执行完毕
	 	ul.hide();
	 	avtive(4);
	 	h3.each(function (i) {
	 		(function (i) {
	 			h3.eq(i).mouseenter(function () {
	 				if (activeNum == i) return;
	 				avtive(i);
	 			});
	 		})(i)
	 	});
	 	function avtive (num) {
	 		if (!isAct) return;
	 		isAct = false;
	 		ul.eq(num).slideDown("normal");
	 		ul.eq(activeNum).slideUp("normal",function () {
	 			isAct = true;
	 		});
	 		activeNum = num;
	 	}
	 })()
		
})