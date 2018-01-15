$(function(){
	var manArr=[1,3,5,7,9];
	var womanArr = [0,2,4,6,8];
	var code = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
	var endCode = [1,0,'X',9,8,7,6,5,4,3,2];

	var inputIdCard = null;
	var inputGender = null;
	var inputBirthday = null;

	var outputGender = null;
	var outputbirthday = null;
	var outputAge = null;
	getAreaData();
	getArea();
	function getAreaData(){
		$.ajax({
			url:'json/cityCode.json',
			method:"get",
			success:function(res){
				console.log(res);
				cityCodeData = res;
			},
			error:function(error){
				console.log(error);
			}
		})
	}
	function getArea(){
		$.ajax({
			url:'json/city.json',
			method:"get",
			success:function(res){
				console.log(res);
			},
			error:function(error){
				alert(error);
			}
		})
	}
	//411081 19940708 83 7 1
	function checkIdCard(){
		inputIdCard = $("inputVal").val();
		var areaCode = inputIdCard.subString(0,5);
		var year = inputIdCard.subString(5,9);
		var month = inputIdCard.subString(9,11);
		var day = inputIdCard.subString(11,13);
		var genderCode = inputBirthday.subString(17,18);

		$(".gender").val(checkGender(genderCode));
	}
	function checkArea(){}
	function checkData(){}
	function checkGender(flag){
		if(flag%2==0){
			return "女";
		}else{
			return "男";
		}
	}


})