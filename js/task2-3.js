$(document).ready(function(){
	var killerNum = parseInt(sessionStorage.getItem("killerNum"));
	var citizenNum = parseInt(sessionStorage.getItem("citizenNum"));
	var kValue = sessionStorage.getItem("kValue");//获取幽灵词组内填写的内容
	var cValue = sessionStorage.getItem("cValue");//获取水民词组内填写的内容
	console.log( citizenNum);
	var playRole = [];//定义一个数组存放所有玩家。
	var circleNum = 1;
	var check = true;//定义一个状态。
	for (var i = 0; i < killerNum; i++) {
		playRole.push("幽灵");
	}
	for (var i = 0; i < citizenNum; i++) {
		playRole.push("水民");
	}
	function shuffle(array) {
        for (var i = array.length; i--; ) {//for循环中只写2组数据的时候，要注意最后一组数据后面要加上;和空格；洗牌算法，首先取数组最后一个值
  			var j = Math.floor(Math.random() * (i+1));//然后获取一个随机数j,获得随机数j位置上的值
  			var temp = array[i];//最后将最后一个位置的值与随机位置的值互换。
  			array[i] = array[j];//循环遍历数组，每循环一次就交换一下位置，以此达到打乱数组的目的。
  			array[j] = temp;
        }
        return array;
	}
	shuffle(playRole);
	console.log(typeof playRole);
	// var playRoleN = JSON.stringify(playRole);
	console.log(playRole);
	//保存玩家身份的数组
	sessionStorage.setItem("playRole", JSON.stringify(playRole));
	// alert(playRole.length);
	$(".fbtn").click(function(){
		//alert(playRole.length);
		if (circleNum < playRole.length + 1) {
			if (check == true) {//此时为皇上翻牌画面
				$(".cover").hide();
				$(".title0").show();
				check = false;//改变状态
				$(".my_role").html(playRole[circleNum-1]);
				var my_role = $(".my_role").html();
				circleNum++;
				$(".fbtn").html("隐藏并传递给" + circleNum + "号");	
			}else if (check == false) {//此时为角色界面
				$(".cover").show();
				$(".title0").hide();
				check = true;
				$(".circle").text(circleNum);
				$(".fbtn").html("查看" + circleNum + "号玩家身份");
			}
		}
		if (circleNum == playRole.length + 1) {//这里直接写成if，效果是正常的；
			$(".fbtn").html("法官查看");//如果接在上面写成else if，就不行
			$(".fbtn").click(function(){
				window.location.href = "task2-4.html";
			});
		}
		if (my_role == "幽灵") {//角色为幽灵时，获取幽灵词组内填写的内容
			$(".my_word").html(kValue);
		}
		if (my_role == "水民") {//角色为水民时，获取水民词组内填写的内容
			$(".my_word").html(cValue);
		}
	});
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
});