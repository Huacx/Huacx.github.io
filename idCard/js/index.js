$(function(){
	var code = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
	var endCode = [1,0,'X',9,8,7,6,5,4,3,2];

	var inputIdCard = null;
	var inputGender = null;
	var inputBirthday = null;

	var outputGender = null;
	var outputbirthday = null;
	var outputAge = null;
	var cityCode = null;
	var queryBtnEle = $("#query");
	var inputValEle = $("#inputVal");

	queryBtnEle.click(function(){
		checkIdCard(inputValEle.val());
	});
	inputValEle.blur(function(){
		checkInput(inputValEle.val());
	});

	
	function getCityName(){
		$.ajax({
			url:'json/city.json',
			method:"get",
			async:false,
			success:function(res){
				return res;
			},
			error:function(error){
				console.log(error);
			}
		})
	}
	//检查区域
	function checkInput(inputVal){
		if(inputVal == null || inputVal.trim().length == 0){
			alert("请输入身份证号码");
			return false;
		}else{
			if(inputVal.length != 18){
				alert("身份证长度为18位,请检查后重新输入");
				return false;
			}
		}
		return true;
	}
	//检验最后一位验证码
	function check(inputIdCard){
		var sum = 0;
		var mode = null;
		var resultCode = null;
		for(var i = 0; i < code.length; i++){
			sum += code[i]*inputIdCard.charAt(i);
		}
		mode = sum % 11;
		resultCode = endCode[mode];
		if(resultCode != inputIdCard.charAt(17)){
			alert("该身份证不合法！！！");
			return false;
		}
		return true;
	}
	//显示结果
	function checkIdCard(inputIdCard){
		if(checkInput(inputIdCard)){
			if(check(inputIdCard)){
				var areaCode = inputIdCard.substring(0,6);
				var year = inputIdCard.substring(6,10);
				var month = inputIdCard.substring(10,12);
				var day = inputIdCard.substring(12,14);
				var genderCode = inputIdCard.substring(17,18);

				if(!checkArea(areaCode)){
					alert("区域码错误！！");
					return false;
				}else{
					if(!checkData(year,month,day)){
						return;
					}else{
						$("#gender").val(checkGender(genderCode));
						$("#age").val(getCurDate()-year);
						$("#birthday").val(year + "年" + month + "月" + day +"日");
						$("#area").val(checkArea(areaCode));
					}
				}
			}
		}
	}
	//判断区域
	function checkArea(area){
		getCityCode();
		for(var i = 0;i < cityCode.length; i++){
		 	var queryCode = cityCode[i].code+"";
		 	if( queryCode == area){
		 		return cityCode[i].address;
		 	}
		}
		return false;
	}
	//判断日期
	function checkData(year,month,day){
		if( year < 1800 ){
			alert("出生年份不能小于1900年");
			return false;
		}else if( year > getCurDate() ){
			alert("出生年份不能超过当前年份");
			return false;
		}else{
			if( month < 1 ){
				alert("月份不能小于1");
				return false;
			}else if( month > 12 ){
				alert("月份不能大于12");
				return false;
			}else{
				if( month = 2 ){
					if( checkYear(year) == 1 ){
						if(month < 0 || month > 29){
							alert(year + "年2月只有29天");
							return false;
						}
					}else if ( checkYear(year) == 0 ){
						if(month < 0 || month > 28){
							alert(year + "年2月只有28天");
							return false;
						}
					}
				}else if( month == 4 || month == 6 || month == 9 || month || month == 11 ){
					if(month < 0 || month > 30){
						alert(month + "月只有30天");
						return false;
					}
				}else{
					if(month < 0 || month > 31){
						alert(month + "月只有31天");
						return false;
					}
				}
			}
		}
		return true;
	}
	//判断性别
	function checkGender(flag){
		if(flag%2==0){
			return "女";
		}else{
			return "男";
		}
	}
	//获取当前年份
	function getCurDate(){
		var date = new Date();
		return date.getFullYear();
	}
	//判断闰年
	function checkYear(year){
		if( year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
			return 1;
		}else{
			return 0;
		}
	}


})