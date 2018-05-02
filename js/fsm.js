$(document).ready(function() {
	var dead = JSON.parse(sessionStorage.getItem("dead"));//获取被杀玩家的数组，内容是玩家对象。
	var voted = JSON.parse(sessionStorage.getItem("voted"));//获取被投死的玩家的数组，内容是玩家对象。
	var fsm = {
		state : sessionStorage.getItem("playstate"),
		//第一个按钮
		rolerKill : function() {
			switch (fsm.state){
				case "alive":
				sessionStorage.setItem("playstate", "stepone");
				window.location.href = "task2-6.html";
				break;
				case "steptwo":
				alert("请勿重复操作");
				break;
				case "stepthree":
				case "stepfour":
				alert("请按顺序操作");
				break;
			}
		},
		//第二个按钮
		lastTalk : function () {
			switch (fsm.state) {
				case "steptwo":
				alert("请亡灵发表遗言!");
				fsm.state = "stepthree";
				sessionStorage.setItem("playstate", fsm.state);
				$(".triangle_left2").css("border-right-color", "#83b09a");
				$(".lastTalk").css("background-color", "#83b09a");
				console.log(fsm.state);
				break;
				case "stepthree":
				alert("请勿重复操作!");
				break;
			
				case "steptone":
				case "stepfour":
				alert("请按顺序操作!");
				break;
			}
		},
		//第三个按钮
		rolerDiscuss : function () {
			switch(fsm.state) {
				case "stepthree":
				alert("请玩家依次发言!");
				fsm.state = "stepfour";
				sessionStorage.setItem("playstate", fsm.state);
				$(".triangle_left3").css("border-right-color", "#83b09a");
				$(".rolerDiscuss").css("background-color", "#83b09a");
				break;
				case "stepfour":
				alert("请勿重复操作!");
				break;
				
				case "stepone":
				case "steptwo":
				alert("请按顺序操作!");
				break;
			}
		},
		//第四个按钮
		rolerVote : function () {
			switch(fsm.state) {
				case "stepfour":
				// alert("请投票!");
				window.location.href = "task2-6.html";
				$(".triangle_left4").css("border-right-color", "#83b09a");
				$(".rolerVote").css("background-color", "#83b09a");
				break;
				case "stepone":
				case "steptwo":
				case "stepthree":
				alert("请按顺序操作!");
				break;
			}
		}
	};
	$(".stepone").click( function() {
		fsm.rolerKill();
	})
	$(".steptwo").click( function() {
		fsm.lastTalk();
	})
	$(".stepthree").click( function() {
		fsm.rolerDiscuss();
	})
	$(".stepfour").click( function() {
		fsm.rolerVote();
	})
	//改变有限状态机中流程的颜色后刷新也不变,即当处于某一状态时就显示当前的样式。
	function yanse(a,b) {
		a.css("background-color", "#83b09a")
		b.css("border-right-color", "#83b09a");
	}
	switch(sessionStorage.getItem("playstate")){
		case "steptwo":
		yanse($(".rolerKill"),$(".triangle_left1"));
		if (dead.slice(-1)[0] == "nokill" ) {
			$(".stepone").after(
				"<div class='knews'>" + 
					"今晚没有人被杀死" + 
				"</div>"
			);
		}else {
			$(".stepone").after(
				"<div class='knews'>" + 
					dead.slice(-1)[0].num + "号玩家被杀死，身份是" + dead.slice(-1)[0].id + 
				"</div>"
			);
		}
		break;
		case "stepthree":
		yanse($(".rolerKill"),$(".triangle_left1"));
		yanse($(".lastTalk"),$(".triangle_left2"));
		if (dead.slice(-1)[0] == "nokill" ) {
			$(".stepone").after(
				"<div class='knews'>" + 
					"今晚没有人被杀死" + 
				"</div>"
			);
		}else {
			$(".stepone").after(
				"<div class='knews'>" + 
					dead.slice(-1)[0].num + "号玩家被杀死，身份是" + dead.slice(-1)[0].id + 
				"</div>"
			);
		}
		break;
		case "stepfour":
		yanse($(".rolerKill"),$(".triangle_left1"));
		yanse($(".lastTalk"),$(".triangle_left2"));
		yanse($(".rolerDiscuss"),$(".triangle_left3"));
		if (dead.slice(-1)[0] == "nokill" ) {
			$(".stepone").after(
				"<div class='knews'>" + 
					"今晚没有人被杀死" + 
				"</div>"
			);
		}else {
			$(".stepone").after(
				"<div class='knews'>" + 
					dead.slice(-1)[0].num + "号玩家被杀死，身份是" + dead.slice(-1)[0].id + 
				"</div>"
			);
		}
		break;
	}
});