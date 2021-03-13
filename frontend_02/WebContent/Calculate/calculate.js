$(document).ready(function(){
	
	//=버튼 누르면 계산하기
	$("#OK").click(function() {
		var a=eval($("#input1").val());
		$("#cal_result").val(a); //result에 담기
		//결과에 표시하기
		$('#cal_result').html(a);
		
		
		var li=$('<li>');
		
		//결과 이력에 추가시키기,
		$('#cal_result_list').append(li).append($("#input1").val())
		.append("=").append(a);
		$("#input1").val("");  //input 다시 비워줌,
		
	});
	$(".num").click(function() {
		//내가 현재 누른 값의 val 값?
		var x=$("#input1").val()+$(this).val(); 
		$('#input1').html(x);
		$("#input1").val(x);
	});
	//clear 버튼 눌르면 초기화 시켜주기,
	$("#clear").click(function(){
		$("#input1").val("");
		$("#input1").html("");
		$("#cal_result").val("");
		$("#cal_result").html("");
	});
	//결과 이력에 추가하기
});