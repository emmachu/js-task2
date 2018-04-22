$(document).ready(function() {
	var state = sessionStorage.getItem("state");
	console.log(state);
	var a = sessionStorage.getItem("playRoleN");
	var obj = JSON.parse(a);
	//console.log(obj.length);
	var rolersArr = Array();
	var rolersId,//玩家身份
	    rolersNum = 0,//玩家序号
	    rolersState = "alive";//玩家状态,默认活着
	//构造函数
	var Roler = function (rolersId,rolersNum,rolersState) {
		this.id = rolersId;
		this.num = rolersNum;
		this.state = rolersState;
	}
	//console.log(Roler);
	for (var i = 0; i < obj.length; i++) {
		rolersId = obj[i];
		rolersNum ++;
		rolersArr[i] = new Roler(rolersId, rolersNum, rolersState);
		//rolersArr.push(rolers);
		$(".innerbox").append(
		"<div class='wrap'>" + 
			"<div class='wrap_inner'>" + 
				"<div class='up_part'>" + rolersId + "</div>" + 
				"<div class='down_part'>" + rolersNum + "号" + "</div>" + 
			"</div>" + 
			"<img src='img/knife.png' class='knife'>" +
		"</div>");
	}
	//点击各个玩家的时候，显示其下方的图片小刀
	$(".wrap_inner").click(function () {
		//用于清空选中的玩家，达到每次只显示一张小刀图片，只能选中一个人的效果
		$(".knife").css("visibility", "hidden");
		$(this).next().css("visibility", "visible");
	});
	//判断不同的状态，修改HTML样式
	if (state == "stepfour") {
		$(".inner_head").html("投票");
		$(".inner_title").html("发言讨论结束，请大家投票");
		$(".inner_guide").html("点击得票数最多的人的头像");
	}
	//底部按钮
	$(".fbtn").click(function () {
		if (state == "stepone") {
			var a = confirm("确定杀掉他吗？");
			if (a == true) {
				sessionStorage.setItem("state", "steptwo");
				window.location.href = "task2-5.html";
			}
		}else if (state == "stepfour") {
			var b = confirm("确定要投死他吗？");
			if (b == true) {
				window.location.href = "task2-5.html";
			}
		}
	});
	$(".back").click(function(){
		var choice = confirm("确定要返回上一页吗？");
		if (choice == true){
			window.location.href = "task2-5.html";
		}
	});
	$(".quit").click(function(){
		var choice = confirm("确定要关闭游戏页面吗？");
		if (choice == true){
			window.location.href = "task2-1.html";
		}
	});
});