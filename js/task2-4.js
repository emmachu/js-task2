$(document).ready(function(){
	var a = sessionStorage.getItem("playRoleN");
	var obj = JSON.parse(a);
	console.log(obj.length);
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
		$(".main").append(
		"<div class='wrap'>" + 
			"<div class='wrap_inner'>" + 
				"<div class='up_part'>" + rolersId + "</div>" + 
				"<div class='down_part'>" + rolersNum + "号" + "</div>" + 
			"</div>" + 
		"</div>");
		sessionStorage.setItem("state", rolersState);
	}
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
