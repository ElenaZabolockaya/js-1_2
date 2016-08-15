console.log ('Excersise 1');


var num = prompt ("Введите целое число: ", '');
var exponent = prompt ("Введите показатель степени", '');
var exponentNumber = pow();

console.log('Entered number: ', num);
console.log('Entered exponent:', exponent);
console.log('Result = ', exponentNumber);
console.log('___________________________');

function pow(){
	var result, convertExp;
	var numExp = 1;
	
	
	if (isNaN(num / 2)|| isNaN(exponent / 2)||(num=='')||(exponent=='')){
		return result = "Вы ввели неверное значение! Введите число.";
	}else{
		if (exponent === 0){
			numExp = 1;
		}else if (exponent < 0){
			convertExp = Math.abs(exponent);
			for (var i = 1; i <= convertExp; i++){
				numExp = numExp * num;
			}
			numExp = 1 / numExp;
		}else{
			for (var i = 1; i<= exponent; i++)
				numExp = numExp * num;
		}	
	}
	return result = numExp;	
}
alert("Равно: "+ exponentNumber);

          //Задание 2//

console.log('Excersise 2');


var name = prompt('Введите имя пользователя:', "");
var users = ["Саша", "Вася", "Коля", "Петя", "Антон"];
var p = "Имя пользователя введено неправильно!Сделайте еще одну попытку.";
for (var i = 0; i <=users.length; i++){
	if (name == users[0]){	
		alert('Добро пожаловать,Саша!');
		break;
	}else if(name == users[1]){
		alert('Добро пожаловать,Вася!');
		break;
	}else if(name == users[2]){
		alert('Добро пожаловать,Коля!');
		break;
	}else if(name == users[3]){
		alert('Добро пожаловать,Петя!');
		break;
	}else if(name == users[4]){
		alert('Добро пожаловать,Антон!');
		break;
	}else{
		alert(p);
		break;
	}
}


