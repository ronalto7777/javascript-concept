//Nether step to closure
//Let's get right into it

//###Example 1
var passed = 3;

var addTo = function() {
	var inner = 2;
	return passed + inner;
};
console.log(`Example 1-1 : ${addTo()}`);
var passed = 4;
console.log(`Example 1-2 : ${addTo()}`);

//###Example 2

var addTo = function(passed){
	var add = function(inner){
		return passed + inner;
	};
	return add;
};

var addThree = new addTo(3);
var addFour = new addTo(4);

// console.dir(addThree);
// console.dir(addFour);

console.log(`Example 2-1 : ${addThree(1)}`);
console.log(`Example 2-2 : ${addFour(1)}`);
console.log(addTo(2)("hi"));

//###Example 3
function foo(x) {
	function bar(y){
		console.log(x + y);
	}
	bar(2);
}

foo(2);

//###Example 4
function foo(x){
	//does something with x or not
	return function(){
		/*A closure only exists when a function accesses a
		variable(s) outside of its immediate scope
		*/
		return true;
	}
}

console.log(foo(false)()); //>true

//###Example 5
//without closure
function foo2(){
	var private = [0, 1, 2]; //Imaginary large data set - 
							//instantiated per invocation
	console.log(private);
}

foo2(); //> [0,1,2]

//with closure
var bar = (function (){
	var private = [0, 1, 2];//Same large imaginary data set -
							//only instantiated once
	//As long as this function exists, it has a reference to the
	//private variable
	return function (){
		console.log(private);
	}
}());
bar(); //>[0, 1, 2]




