$(function () {
	function P (arg) {
		//console.log(arg);
	}
		/**
		 * 顶部导航
		 */
		(function () {
			if ($('.nav li') == "undefined") return;
			$('.nav li').hover(function(){
				$(this).addClass('selected');							  
			},function(){
				$(this).removeClass('selected');		
			})
			$('.userbar div').hover(function(){
				$(this).addClass('selected');							  
			},function(){
				$(this).removeClass('selected');		
			})
		})();
		/**
		 * 右侧浮动 返回顶部 二维码
		 */
		(function () {
			
			var code = $("#code");
			if (code.size() ==0 ) return;
			var codeImg = $("#code_img");
			var gotop = $("#gotop");
			code.toggle(function () {
				codeImg.show();
			},
			function () {
				codeImg.hide();
			});
			P(gotop)
			gotop.click(function () {
					
				$("html,body").animate({scrollTop:0},500);
			});
		})()
		
		$(function () {  
             $('#wx').click(function (event) {  
                 //取消事件冒泡  
                 event.stopPropagation();  
                 //设置弹出层的位置  
                
                 //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
                  $('#qrcode').toggle('slow');  
             });  
             //点击空白处或者自身隐藏弹出层，下面分别为滑动和淡出效果。  
           
        })  
		   $(function () {  
             $('#button').click(function (event) {                
             $('#block').toggle('slow');  
             });       
			  
        }) 
		//二维码分享
        

})
