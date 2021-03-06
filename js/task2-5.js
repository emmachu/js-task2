$(document).ready(function(){
	var dead = JSON.parse(sessionStorage.getItem("dead")),//获取被杀玩家的数组，内容是玩家对象。
		voted = JSON.parse(sessionStorage.getItem("voted")),//获取被投死的玩家的数组，内容是玩家对象。
		playstate = sessionStorage.getItem("playstate"),
		playdays = JSON.parse(sessionStorage.getItem("playdays"));
	console.log(playdays);
	console.log(playstate);
	console.log(voted);
	console.log(dead);
	$(".playdays").text("第" + playdays + "天");
	if (playdays > 1) {
		for (var i = 1; i < playdays; i ++) {
			var day = i;
			//$(".flows").eq(-1)是遍历集合并以最后一个对象为第一个来增删查改等
			$(".flows").eq(-1).before(
				"<div class='flows nflows'>" + 
					"<div class='playdays'>" + "第" + day + "天" + "</div>" + 
					"<div class='game_flow'>" + 
						"<div class='triangle_top'>" + "</div>" + 
						"<div class='game_inner'>" + 
							"<div class='steps nsteps'>" + 
								"<div class='moon'>" + 
									"<img src='img/moon.png' alt=''>" + 
								"</div>" + 
								"<div class='steper rolerKill1'>" + "杀手杀人" + 
									"<div class='triangle_left triangle_left1'>" + "</div>" + 
								"</div>" + 
							"</div>" + 
							"<div class='knews'>" + "杀手杀人" + "</div>" + 
							"<div class='steps nsteps'>" + 
								"<div class='sun'>" + 
									"<img src='img/sun.png' alt=>" + 
								"</div>" +  
								"<div class='steper lastTalk1'>" + "亡灵发表遗言" + 
									"<div class='triangle_left triangle_left2'>" + "</div>" + 
								"</div>" + 
							"</div>" + 
							"<div class='steps nsteps'>" + 
								"<div class='steper rolerDiscuss1'>" + "玩家依次发言" + 
									"<div class='triangle_left triangle_left3'>" + "</div>" + 
								"</div>" + 
							"</div>" + 
							"<div class='steps nsteps'>" + 
								"<div class='steper rolerVote1'>" + "全民投票" + 
									"<div class='triangle_left triangle_left4'>" + "</div>" + 
								"</div>" + 
							"</div>" + 
							"<div class='vnews'>" + 
								voted[i-1].num + "号玩家被投死，身份是" + voted[i-1].id + 
							"</div>" + 
						"</div>" + 
					"</div>" + 
				"</div>"
			);
			if (dead[i-1] == "nokill") {
				$(".knews").eq(i-1).text("今晚没有人被杀死");
			}else {
				$(".knews").eq(i-1).text(dead[i-1].num + "号玩家被杀死，身份是" + dead[i-1].id);
			}
		}
	}
	//新添加的天数数据，默认隐藏
	$(".nflows .game_flow").hide();
	//为日期添加点击事件
	$(".playdays").click(function () {
		$(this).next(".game_flow").toggle("normal");
	})
	//顶部按钮
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
	//底部按钮
	$(".fbtn1").click(function(){
		window.location.href = "task2-1.html";
	});
	$(".fbtn2").click(function(){
		window.location.href = "task2-7.html";
	});
});
