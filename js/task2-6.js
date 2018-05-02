$(document).ready(function() {
	var killerNum = parseInt(sessionStorage.getItem("killerNum"));
	var citizenNum = parseInt(sessionStorage.getItem("citizenNum"));
	var playdays = sessionStorage.getItem("playdays");
	console.log("幽灵人数" + killerNum);
	console.log("水民人数" + citizenNum);
	console.log("当前天数" + playdays);
	var playstate = sessionStorage.getItem("playstate");
	console.log(playstate);
	var rolersArr = JSON.parse(sessionStorage.getItem("rolersArr"));
	console.log(rolersArr);
	var index = undefined;//用来存储被选中的玩家的下标。
	var selected = 0;//如果有玩家被选中，则变为1，如果没有选中则变为2.
	var dead = JSON.parse(sessionStorage.getItem("dead"));//获取被杀玩家的数组，内容是玩家对象。
	var voted = JSON.parse(sessionStorage.getItem("voted"));//获取被投死的玩家的数组，内容是玩家对象。
	console.log(dead);
	for (var i = 0; i < rolersArr.length; i++) {
		$(".innerbox").append(
		"<div class='wrap'>" + 
			"<div class='wrap_inner'>" + 
				"<div class='up_part'>" + rolersArr[i].id + "</div>" + 
				"<div class='down_part'>" + rolersArr[i].num + "号" + "</div>" + 
			"</div>" + 
			"<img src='img/knife.png' class='knife'>" +
		"</div>");
	}
	//点击各个玩家的时候，显示其下方的图片小刀
	$(".wrap_inner").click(function () {
		//用于清空选中的玩家，达到每次只显示一张小刀图片，只能选中一个人的效果
		$(".knife").css("visibility", "hidden");
		$(this).next().css("visibility", "visible");
		index = $(".wrap_inner").index(this);
		console.log(index);
		selected = 1;
	});
	//判断不同的状态，修改HTML样式
	if (playstate == "stepfour") {
		$(".inner_head").html("投票");
		$(".inner_title").html("发言讨论结束，请大家投票");
		$(".inner_guide").html("点击得票数最多的人的头像");
	}
	//底部按钮
	$(".fbtn").click(function () {
		console.log("是否被选中" + selected);
		console.log("玩家下标" + index);
		if (selected != 0) {
			if (playstate == "stepone") {
				if (rolersArr[index].state != "steptwo" && rolersArr[index].state != "stepfour"){
					if (rolersArr[index].id == "水民") {
						var a = confirm("确定杀掉他吗？");
						if (a == true) {
							sessionStorage.setItem("playstate", "steptwo");
							rolersArr[index].state = "steptwo";
							dead.push(rolersArr[index]);
							console.log(dead);
							sessionStorage.setItem("dead", JSON.stringify(dead));
							sessionStorage.setItem("voted", JSON.stringify(voted));
							sessionStorage.setItem("rolersArr", JSON.stringify(rolersArr));
							console.log(rolersArr[index].state);
							console.log(rolersArr);
							citizenNum --;
							sessionStorage.setItem("citizenNum", citizenNum);
							console.log("水民人数" + citizenNum);
							if (citizenNum == 0) {
								alert("幽灵获得胜利！");
								sessionStorage.setItem("citizenNum", JSON.parse(citizenNum));
								window.location.href = "task2-8.html";
							}else {
								window.location.href = "task2-5.html";
							}
							
						}
					}else if (rolersArr[index].id == "幽灵") {
						alert("是自己人，请重新选择！")
					}
				}else if (rolersArr[index].state == "steptwo" || rolersArr[index].state == "stepfour") {
					alert("该玩家已经死亡，请重新选择！");
				}
			}else if (playstate == "stepfour") {
				var b = confirm("确定要投死他吗？");
				if (rolersArr[index].state != "steptwo" && rolersArr[index].state != "stepfour") {
					if (rolersArr[index].id == "水民") {
						if (b == true) {
							rolersArr[index].state = "stepfour";
							console.log(rolersArr[index].state);
							console.log(rolersArr);
							sessionStorage.setItem("rolersArr", JSON.stringify(rolersArr));
							citizenNum --;
							sessionStorage.setItem("citizenNum", citizenNum);
							console.log("水民人数" + citizenNum);
							voted.push(rolersArr[index]);
							console.log(voted);
							sessionStorage.setItem("dead", JSON.stringify(dead));
							sessionStorage.setItem("voted", JSON.stringify(voted));
							if (citizenNum == 0) {
								alert("幽灵获得胜利！");
								sessionStorage.setItem("citizenNum", JSON.parse(citizenNum));
								window.location.href = "task2-8.html";
							}else {
								playdays ++;
								sessionStorage.setItem("playdays", playdays);
								sessionStorage.setItem("playstate", "alive");
								window.location.href = "task2-5.html";
							}
						}
					}else if (rolersArr[index].id == "幽灵") {
						if (b == true) {
							rolersArr[index].state = "stepfour";
							console.log(rolersArr[index].state);
							console.log(rolersArr);
							sessionStorage.setItem("rolersArr", JSON.stringify(rolersArr));
							killerNum --;
							console.log("幽灵人数" + killerNum);
							sessionStorage.setItem("killerNum", killerNum);
							voted.push(rolersArr[index]);
							console.log(voted);
							sessionStorage.setItem("dead", JSON.stringify(dead));
							sessionStorage.setItem("voted", JSON.stringify(voted));
							if (killerNum == 0) {
								alert("水民获得胜利！");
								sessionStorage.setItem("killerNum", JSON.parse(killerNum));
								window.location.href = "task2-8.html";
							}else {
								playdays ++;
								sessionStorage.setItem("playdays", playdays);
								sessionStorage.setItem("playstate", "alive");
								window.location.href = "task2-5.html";
							}
						}
					}
				}else if (rolersArr[index].state == "steptwo" || rolersArr[index].state == "stepfour") {
					alert("该玩家已经死亡，请重新选择！");
				}
			}
		}else if (selected == 0) {
			if (playstate == "stepone") {
				var c = confirm("确定此轮不杀人吗");
				if (c == true) {
					// rolersArr[index].state = "steptwo";
					dead.push("nokill");
					alert(dead);
					sessionStorage.setItem("playstate", "steptwo");
					sessionStorage.setItem("dead", JSON.stringify(dead));
					sessionStorage.setItem("voted", JSON.stringify(voted));
					window.location.href = "task2-5.html";
				}
			}else if (playstate == "stepfour") {
				alert("请选择一个玩家！");
			}
		}
	});
	//在杀人投票页面中为已经死亡的角色添加背景颜色。
	for (var i = 0; i < rolersArr.length; i++) {
		if (rolersArr[i].state == "steptwo" || rolersArr[i].state == "stepfour") {
				var index = rolersArr[i].num-1;
				// console.log(index);
				$(".up_part").eq(index).css("background-color", "#83b09a")
			}
		}
	//顶部按钮
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