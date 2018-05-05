$(document).ready(function(){
	var playRole = JSON.parse(sessionStorage.getItem("playRole")),
		rolersArr = JSON.parse(sessionStorage.getItem("rolersArr"));
	console.log(playRole);
	console.log(rolersArr);
	for (var i = 0; i < playRole.length; i++) {
		var rolersNum = i + 1;
		$(".main").append(
		"<div class='wrap'>" + 
			"<div class='wrap_inner'>" + 
				"<div class='up_part'>" + playRole[i] + "</div>" + 
				"<div class='down_part'>" + rolersNum + "号" + "</div>" + 
			"</div>" + 
		"</div>");
		//在法官日记中为已经死亡的角色添加背景颜色。
		if (rolersArr[i].state == "steptwo" || rolersArr[i].state == "stepfour") {
			var index = rolersArr[i].num-1;
			console.log(index);
			$(".up_part").eq(index).css("background-color", "#83b09a")
		}
	}
	$(".fbtn").click(function () {
		location.href = "task2-5.html";
	})
});