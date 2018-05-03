$(document).ready(function() {
	var killerNum = parseInt(sessionStorage.getItem("killerNum"));//获取剩余幽灵人数
	var citizenNum = parseInt(sessionStorage.getItem("citizenNum"));//获取剩余水民人数
	var kValue = sessionStorage.getItem("kValue");//获取幽灵词组内容
	var cValue = sessionStorage.getItem("cValue");//获取水民词组内容
	var dead = JSON.parse(sessionStorage.getItem("dead"));//获取被杀玩家的数组，内容是玩家对象。
	var voted = JSON.parse(sessionStorage.getItem("voted"));//获取被投死的玩家的数组，内容是玩家对象。
	var playdays = JSON.parse(sessionStorage.getItem("playdays"));
	// console.log(killerNum);
	// console.log(citizenNum);
	// console.log(dead);
	// console.log(voted);
	console.log("天数" + playdays);
	if (killerNum == 0) {
		$(".wintext").text("水民胜利");
	}else if (citizenNum == 0) {
		$(".wintext").text("幽灵胜利");
	}
	$(".killer").text("幽灵" + killerNum + "人");
	$(".citizen").text("水民" + citizenNum + "人");
	$(".getk").text(kValue);
	$(".getc").text(cValue);
	//玩家记录
	// var days = $(".days").text(playdays);
	for (var i = 0; i < playdays; i++) {
		var day = i + 1;
		$(".bottompart").append(
			"<div class='part_inner'>" + 
				"<div class='record'>" + 
					"<p class='days'>" + "第" + day + "天" + "</p>" + 
					"<p class='night'>" + "</p>" + 
					"<p class='daylight'>" + "</p>" + 
				"</div>" + 
			"</div>"
			);
		if (dead[i] == "nokill") {
			$(".night").eq(i).text("晚上：今晚没有人被杀死");
		}else {
			$(".night").eq(i).text("晚上：" + dead[i].num + "号玩家被杀死，身份是" + dead[i].id);
		}
		//当在杀人步骤后游戏结束的情况下，当前天数下，没有被投票死的玩家，该对象是undefined，需要区别出来。
		if (voted[i] == undefined) {
			$(".daylight").eq(i).text("");
		}else {
			$(".daylight").eq(i).text("白天：" + voted[i].num + "号玩家被投死，身份是" + voted[i].id);
		}
	}
	//所有按钮
	$(".homepage").click(function () {
		var a = confirm("确定返回首页吗？");
		if (a == true) {
			window.location.href = "task2-1.html";
		}
	})
	$(".fbtn1").click(function () {
		var b = confirm("要再玩一局吗？");
		if (b == true) {
			window.location.href = "task2-2.html";
		}
	})
});