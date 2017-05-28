//comment out to try it
//-------The example of callback #1
let min = function(a,b){
	return a-b;
}

let add = function(a,b){
	return a+b;
}

let master = function(a,b,callback){
	return callback(a,b);
}

let a = master(2,3, add);
console.log(a);


//-------The example of callback #2
// var myArr = [{
// 	num: 5,
// 	str: 'apple'
// },{
// 	num: 7,
// 	str: 'cabbage'
// },{
// 	num: 1,
// 	str: 'ban'
// }];

// myArr.sort(function(val1, val2){
// 	if(val1.str > val2.str) {
// 		return -1;
// 	}
// 	else {
// 		return 1;
// 	}
// });

// console.log(myArr);