$(document).ready(function(){
	$(".back").click(function(){
		var choice = confirm("确定要返回上一页吗？");
		if (choice == true){
			window.location.href = "task2-4.html";
		}
	});
	$(".quit").click(function(){
		var choice = confirm("确定要关闭游戏页面吗？");
		if (choice == true){
			window.location.href = "task2-1.html";
		}
	});
	$(".fbtn1").click(function(){
		window.location.href = "task2-1.html";
	});
	$(".fbtn2").click(function(){
		window.location.href = "task2-7.html";
	});
});
