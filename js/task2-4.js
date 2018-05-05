$(document).ready(function(){
	var playRole = JSON.parse(sessionStorage.getItem("playRole")),
		rolersArr = Array(),
		rolersId,//玩家身份
	    rolersNum = 0,//玩家序号
	    rolersState = "alive",//玩家初始状态“alive”
		dead = [],//存放被杀玩家的下标的数组
		voted = [],//存放被投死的玩家的下标的数组
		playdays = 1;//记录所玩的天数
	sessionStorage.setItem("playstate", "alive");
	sessionStorage.setItem("dead", JSON.stringify(dead));
	sessionStorage.setItem("voted", JSON.stringify(voted));
	sessionStorage.setItem("playdays", JSON.parse(playdays));
	console.log(playRole.length);
	console.log(playRole);
	// alert(typeof playdays);传递数字类数据的时候最好用JSON
	//构造函数，将玩家的身份 序号 状态存为一个完整的对象并存入数组rolersArr中。
	var Roler = function (rolersId,rolersNum,rolersState) {//这是一个函数，没有内容。
		this.id = rolersId;
		this.num = rolersNum;
		this.state = rolersState;
	}
	for (var i = 0; i < playRole.length; i++) {//遍历的方法将玩家对象存入数组中。
		rolersId = playRole[i];
		rolersNum ++;
		rolersArr[i] = new Roler(rolersId, rolersNum, rolersState);
		$(".main").append(
		"<div class='wrap'>" + 
			"<div class='wrap_inner'>" + 
				"<div class='up_part'>" + rolersId + "</div>" + 
				"<div class='down_part'>" + rolersNum + "号" + "</div>" + 
			"</div>" + 
		"</div>");
	}
	sessionStorage.setItem("rolersArr", JSON.stringify(rolersArr));
	console.log(rolersState);
	console.log(rolersArr);
//三个按钮的功能
	$(".back").click(function(){
		var choice = confirm("确定要返回玩家配比页吗？");
		if (choice == true){
			window.location.href = "task2-2.html";
		}
	});
	$(".quit").click(function(){
		var choice = confirm("确定要关闭游戏页面吗？");
		if (choice == true){
			window.location.href = "task2-1.html";
		}
	});
	$(".fbtn").click(function(){
		window.location.href = "task2-5.html";
	});
})
