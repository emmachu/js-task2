$(document).ready(function() {
	var killerNum = parseInt(sessionStorage.getItem("killerNum"));
	var citizenNum = parseInt(sessionStorage.getItem("citizenNum"));
	var kValue = sessionStorage.getItem("kValue");
	var cValue = sessionStorage.getItem("cValue");
	console.log(killerNum);
	console.log(citizenNum);
	if (killerNum == 0) {
		$(".wintext").text("水民胜利");
	}else if (citizenNum == 0) {
		$(".wintext").text("幽灵胜利");
	}
});