$(document).ready(function(){
	//click버튼을 누르면
	$('#click').click(function() {
		alert("복권 추첨을 시작합니다 !!!!");
		let num=[];
		let result="";
		for(let i=0; i<6; i++){
			let r=Math.random()*45;
			r=Math.floor(r)+1;
			//중복 검사하기
			if(num.indexOf(r)<0) {
				num.push(r);
			}else{
				i--; //겹치는 경우에는 한개 다시 뽑아야함,
			}
		}
		num.sort(function(a,b){
			return a-b;
		});
		var size=0;
		var tmpresult="";
		var a=setInterval(function(){
			tmpresult+=num[size]+" ";
			$('#result').html(tmpresult);
			size++;
			if(size==6) clearInterval(a);
		}, 1000);
	});
});