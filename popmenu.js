// 
// 需要 jQuery 库支持
// 使用 Bootstrap 4.3.1 样式
// 
function popmenu(options) {

	var opts = {
		x : 0,
		y : 0,
		items : {},
		callback : null
	}

    if (typeof options === 'object') {
        $.extend(opts, options);
    } else {
    	return;
    }

	var listr = '';

	for (var item in opts.items) {
		listr += "<li id='popmenu_" + item + "' class='popmenu-icon popmenu-icon-" + opts.items[item].icon + "'>" + opts.items[item].name + "</li>";
	}
	listr = "<div class='popmenu-layer'><ul id='popmenu' class='popmenu-list' style='display:none'>" + listr + "</ul></div>";

    $("body").append(listr);     

	$("#popmenu").css({
                    'display': 'block',
                    'left' : opts.x,
                    'top' : opts.y
                });

	$("#popmenu li").bind("click",function(e){
		opts.callback(this);
		$("#popmenu").hide();
		$(".popmenu-layer").remove();
	});

	$("#popmenu").focus();

	$(".popmenu-icon").hover(function() {
		$(this).addClass('popmenu-hover');
	}, function() {
		$(this).removeClass('popmenu-hover');
	});
	// 图层被点击
	$(".popmenu-layer").mousedown(function(event) {
		$("#popmenu").hide();
		$(".popmenu-layer").remove();
	});
	// 浏览器窗口失去焦点
	$(window).blur(function(event) {
		$("#popmenu").hide();
		$(".popmenu-layer").remove();
	});
	// 
	$(window).mousedown(function(event){
		$("#popmenu").hide();
		$(".popmenu-layer").remove();
	})
	// 不响应浏览器右键系统菜单 任何消息
	$("#popmenu").mousedown(function(event){
		event.stopPropagation();		// 忽略事件
	})
	// 窗口大小被改变
	$(window).resize(function(event) {
		$("#popmenu").hide();
		$(".popmenu-layer").remove();
	});
}
