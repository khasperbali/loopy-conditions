/**
 * Create a function called 'greaterNumber'
 * This function will take in 2 Parameters.
 * You need to check which number is greater and return that number
 * @param  { Number } a
 * @param  { Number } b
 * @return { Number }
 */

function greaterNumber(a, b){
	if(a > b){
		return a; 
	}
	else{
		return b;
	}
}
greaterNumber(10, 50);

/**
 * Create a function called 'stringOfNumbers'.
 * This function will take in 1 parameter
 * Your task is to add all the numbers in between 0 and n
 * For example if the number is 10 than the function should return:
 * "0,1,2,3,4,5,6,7,8,9,10"
 * @param  { Number } n
 * @return { String }
 */

function stringOfNumbers(x){
		var numberArray = [];
	for (var i = 0; i < x; i++){
		numberArray += i;
	}
	return numberArray;
}

stringOfNumbers(3);


/**
 * Create a function called 'sumOfArray'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return the sum of all the numbers in the array.
 * You must check if the item in the array is a number
 * @param  { array } arr
 * @return { Number }
 */

function sumOfArray(array){
	var total = 0;
	var x = array.toString();
	 if(x.includes("a") || x.includes("e") || x.includes("i") || x.includes("o") || x.includes("u") || x.includes("y")){
    console.log("Numbers Only!");
  }
  else{
    for(var i = 0; i < array.length; i++){
      total += array[i];
    }
    console.log(total);
    return total;
  }
}
sumOfArray([1, 2, 3, 4, 5]);

/**
 * Create a function called 'getEvens'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the even numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
function getEvens(array){
  var length =  array.length;
  var evenArray = [];
  for(var i = 0; i < length; i++){
  	var y = array[0].toString().split("").pop(); 
  	if(y == 0 || y == 2 || y == 4 || y == 6 || y == 8){
  		evenArray.push(array[0]);
  		array.shift();
  	}
  	else{
  		array.shift();
  	}  
  }
  if(evenArray.length <= 0){
    console.log("No even numbers in this array!")
    return "No even numbers in this array!";
  }
  else{
    console.log(evenArray);
    return evenArray;
  }
}
getEvens([2, 4, 6, 1163, 2048, 1207]);

/**
 * Create a function called 'getOdds'.
 * This function will take in a parameter that is an array.
 * Your task is to take the array and return all the odd numbers in a new array.
 * @param  { array } arr
 * @return { array }
 */
function getOdds(array){
  var length =  array.length;
  var oddArray = [];
  for(var i = 0; i < length; i++){
  	var y = array[0].toString().split("").pop(); 
  	if(y == 1 || y == 3 || y == 5 || y == 7 || y == 9){
  		oddArray.push(array[0]);
  		array.shift();
  	}
  	else{
  		array.shift();
  	}  
  }
  if(oddArray.length <= 0){
    console.log("No odd numbers in this array!")
    return "No odd numbers in this array!";
  }
  else{
    console.log(oddArray);
    return oddArray;
  }
}
getOdds([1, 2, 4, 7, 1136, 2147, -1]);

/**
 * Create a function called 'calculate'.
 * This function will take in 3 parameters:
 * The first parameter is a number.
 * The second parameter is a number.
 * The third param is a string that will be 'add', 'subtract', 'multiply', 'divide'.
 * Your task is to do a mathematical operation on the 2 numbers based on the third parameter.
 * The function should return the string "Invalid operator" if the operator is
 * not 'add', 'subtract', 'multiply', 'divide'.
 * @param  { Number } int1
 * @param  { Number } int2
 * @param  { String } operator ('add', subtract, 'multiply', 'divide')
 * @return { Number/String }
 */
function calculate(number1, number2, operator){
  if (operator == "add" || operator == "addition" || operator  == "sum"){
    output = number1 + number2;
  }
  else if (operator == "subtract" || operator == "subtraction" || operator == "difference"){
    output = number1 - number2;
  }
  else if (operator == "multiply" || operator == "multiplication" || operator == "product"){
    output = number1 * number2;
  }
  else if (operator == "divide" || operator == "division" || operator == "quotient"){
    output = number1 / number2;
  }
  else{
  	console.log("Invalid operator");
    return "Invalid operator";
  }
  console.log("Learn to math but your numbers are " + output);
  return output;
}
calculate(50, 27, "multiply");