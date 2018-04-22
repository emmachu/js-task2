$(document).ready(function () {
		$(".btn1").click(function () {
			window.open("task2-1.html", "play1");
		});
		var inputValue = $("#inputValue");
		var killer = $("#killer");
		var citizen = $("#citizen");
		var killer_word = $("#killer_word");
		var citizen_word = $("#citizen_word");
		var rangeNum = $("#range");
		var killerNum = $("#killerNum");
		var citizenNum = $("#citizenNum");
		var subBtn = $("#sub");
		var addBtn = $("add");
		//滑动条的blur事件
		$("#inputValue").blur(function () {
			//var value = parseInt(inputValue.val());//这一步parseInt函数可解析一个字符串，并返回一个整数。
			//inputValue.val(value);//限制了inputs输入框中只能输入正整数
			var pattern = /^[0-9]\d*$/;//取正整数的正则表达式。
			var value = inputValue.val();
			if(pattern.test(value) == true && value >=4 && value <= 18){
				rangeNum.val(value);
			}else{
				confirm("请输入正确的玩家数量");
				rangeNum.val(4);
				inputValue.val(4);
			}
		})
		//在玩家数量正确的时候，用blur事件给玩家进行配比
		$("#set").click(function () {
			var value = parseInt(inputValue.val()); //上面有滑动条的blur事件的控制，此处已经不需要考虑4-18之外的情况了。
			function players(killer) {
				killerNum.html(killer);
				var Cplayer = rangeNum.val()-killer;
				citizenNum.html(Cplayer);
			}
			if (value <= 5) {
				players("1");
			}else {
				if (value >=6 && value <= 8) {
					players("2");
				}else {
					if (value >= 9 && value <= 11) {
						players("3");
					}else {
						if (value >= 12 && value <=15) {
							players("4");
						}else {
							if (value >= 16 && value <= 18) {
								players("5");
							}
						}
					}
				}
			}	
		});
		//点击减号
		$("#sub").click(function () {
			var oldV = inputValue.val();
			oldV--;
			inputValue.val(oldV);
			rangeNum.val(oldV);
			if (oldV < 4) {
				alert("玩家数不能小于4");//不设置这个的话，会无限制加上去
				inputValue.val(4);
				rangeNum.val(4);
			}
		})
		//点击加号
		$("#add").click(function () {
			var oldV = inputValue.val();
			oldV++;
			inputValue.val(oldV);
			rangeNum.val(oldV);
			if (oldV>18) {
				alert("玩家数不能大于18");
				inputValue.val(18);
				rangeNum.val(18);
			}
		})
		//滑动滑块来改变数字
		$("#range").change(function () {
			var oldV = rangeNum.val();
			inputValue.val(oldV);
		})
		//判断可以发牌的所有条件
		$("#button").click(function (){
			var kValue = killer_word.val();
			var cValue = citizen_word.val();
			var iValue = inputValue.val();
			var kNum = 	Number(killerNum.html());
			var cNum = Number(citizenNum.html());
			var playerNum = kNum + cNum;
			// alert(typeof kNum);
			if (kValue == false || cValue == false) {//在水民和幽灵词组一栏，必须填写内容
				confirm("请输入10字以内正确的词组");
			}else {
				if (kValue == cValue) {
					confirm("亲：幽灵词组与水民词组不能相同");//幽灵词组和水民词组不能相同。
				}else {
					if (iValue != playerNum) {
						confirm("请设置水民和幽灵的正确数量");
						//因为打开默认玩家数量为8,玩家配比正确，所以如果用户设置的玩家数量为8，不用再次设置。玩家数量不对的情况，上面的blur事件已经排除，
						//此处无需再次判断，只需判断玩家数量不为8时，用户有没有设置玩家配比即可。
						}else {
							window.location.href = "task2-3.html";//如果以上全部满足，则跳转到指定页面。
							//window.location.href表示重新定向到新页面，同时刷新这个页面,但是无法打开新窗口，而window.open只是打开新页面
						}
					}
				}
			sessionStorage.setItem("kValue", kValue);//获取幽灵词组
			sessionStorage.setItem("cValue", cValue);//获取水民词组
			sessionStorage.setItem("killerNum", killerNum.html());
			sessionStorage.setItem("citizenNum", citizenNum.html());
			//console.log(killerNum.html());
			//console.log( citizenNum.html());
		});
});
