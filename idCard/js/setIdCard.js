var code = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
var endCode = [1,0,'X',9,8,7,6,5,4,3,2];

var province = null;
var city = null;
var area = null;
var cityCode = null;
var areaCode=null;
var month = null;

var subBtnEle = $(".subBtn button");

getCityName();

subBtnEle.click(function(){

	if($("#province").val()=="" || $("#city").val()=="" || $("#_area").val()==""){
		alert("省市区不能为空，请选择！！！");
		return;
	}
	var place = null;
	//获取地址
	if($("#city").val()=="市辖区"||$("#city").val()=="县"){
		place = $("#province").val()+$("#_area").val();
	}else{
		place = $("#province").val()+$("#city").val()+$("#_area").val();
	}

	var areaCode = getCityCode(place);//获取区域码
	//获取性别码
	var genderFlag = $('input:radio[name="gender"]:checked').val();
	var gender = getGender(genderFlag);
	//获取年月日
	var year = $("#year").val();
	var month = $("#month").val();
	var day = $("#day").val();
	//获取随机两位数
	var sort = Math.floor( Math.random()*90)+10;
	
	//拼接前17位
	var result = areaCode+year+format(month)+format(day)+sort+gender;
	//生成身份证
	result = check(result);

	$("#result").val(result);
});
//获取校验码
function check(result){
	var sum = 0;
	var mode = null;
	var resultCode = null;
	for(var i = 0; i < code.length; i++){
		sum += code[i]*result.charAt(i);
	}
	mode = sum % 11;
	resultCode = endCode[mode];
	return result+resultCode;
}

//获取性别码
function getGender(f){
	if(f==1){//奇数 男
		var random = Math.floor( Math.random()*10);0-9
		if(random%2==0){
			random = random + 1;
		}
		return random;
	}else{
		//return "女";
		var random = Math.floor( Math.random()*10);
		if(random%2!=0){
			random = random - 1;
		}
		return random;
	}
}
//获取城市编码
function getCityCode(place){
	var retCode;
	$.ajax({
		url:'json/cityCode.json',
		method:"get",
		async:false,
		success:function(res){
			retCode =getAreaCode(res,place);
		},
		error:function(error){
			console.log(error);
		}
	});
	return retCode;
}


function getAreaCode(res,place){
	for(var i = 0;i < res.length; i++){
	 	if( res[i].address == place){
	 		areaCode = res[i].code;
	 	}
	}
	return areaCode;
}

//获取城市名称
function getCityName(){
	$.ajax({
		url:'json/city.json',
		method:"get",
		async:false,
		success:function(res){
			province = res.citylist;
			getProvincelist();
		},
		error:function(error){
			console.log(error);
		}
	});
}

//获取省份列表
function getProvincelist(){
	var html = "";
	for (var i = 0; i < province.length; i++) {
		html += "<option value='"+ province[i].name +"'>"+province[i].name+"</option>";
	}
	$("#province").append(html);
	$("#province").on("change",function(){
		var cityDate = null;
		for (var j = 0; j < province.length; j++) {
			if(province[j].name == $("#province").val()){
				cityDate = province[j].city;
				getCityList(cityDate);

				var areaDate = null;
				for (var j = 0; j < cityDate.length; j++) {
					if(cityDate[j].name == $("#city").val()){
						areaDate = cityDate[j].area;
						getAreaList(areaDate);
						break;
					}
				}
				break;	
			}
		}
	});
}
//获取城市列表
function getCityList(cityDate){
	var html = "";
	for(var i = 0; i< cityDate.length; i++){
		html += "<option value='"+ cityDate[i].name +"'>"+cityDate[i].name+"</option>";
	}
	$("#city").html(html);
	$("#city").on("change",function(){
		var areaDate = null;
		for (var j = 0; j < cityDate.length; j++) {
			if(cityDate[j].name == $("#city").val()){
				areaDate = cityDate[j].area;
				getAreaList(areaDate);
				break;
			}
		}
	});
}
//获取区域列表
function getAreaList(areaDate){
	var html = "";
	for(var i = 0; i< areaDate.length; i++){
		html += "<option value='"+ areaDate[i] +"'>"+areaDate[i]+"</option>";
	}
	$("#_area").html(html);
}

var yearValue = null;
var monthValue = null;
var dayValue = null;

getYear();
getMonth();
//获取年份
function getYear(){
	var html = "";
	var curYear = new Date().getFullYear();
	for (var i = 1900; i <= curYear; i++) {
		html += "<option value='"+ i +"'>"+i+"年</option>";
	}
	$("#year").html(html);
	$("#year").on("change",function(){
		yearValue = $("#year").val();
		getDay();
		getMonth();
	});
}
//获取月份
function getMonth(){
	var year = (new Date()).getFullYear();
	var month = (new Date()).getMonth()+1;
	getDay();
	var html = "";
	var v = 12;
	if(yearValue == year){
		v = month;
	}
	for (var i = 1; i <= v; i++) {
		html += "<option value='"+ i +"'>"+i+"月</option>";
	}
	$("#month").html(html);
	$("#month").on("change",function(){
		monthValue = $("#month").val();
		getDay();
	});
}
//获取日期
function getDay(){
	var day = (new Date()).getDate();
	var month = (new Date()).getMonth()+1;
	var year = (new Date()).getFullYear();
	var html = "";
	if(monthValue == 2){
		if( yearValue%4 == 0 && yearValue%100 != 0 || yearValue%400 == 0 ){
			dayValue=29;
		}else{
			dayValue = 28;
		}
	}else if(monthValue == 4 || monthValue == 6 || monthValue == 9 || month ==11){
		dayValue = 30;
	}else{
		dayValue = 31;
	}

	if(yearValue == year && month == monthValue){
		dayValue = day;
	}

	for(var i = 1; i <= dayValue; i++){
		html += "<option value='"+ i +"'>"+i+"日</option>";
	}
	$("#day").html(html);
}
//格式日期
function format(num){
	if(num<10){
		return "0"+num;
	}else{
		return num;
	}
}