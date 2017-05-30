// the factory pattern
var peopleFactory = function(name, age, state){
	//object
	var temp = {};

	temp.age = age;
	temp.name = name;
	temp.state = state;

	temp.printPerson = function(){
		console.log(this.name + "," + this.age + ", "+this.age);
	};
	return temp;
};

var person1 = peopleFactory( 'john', 23, 'CA');
var person2 = peopleFactory('kim', 27, 'SC');

person1.printPerson();
person2.printPerson();

// constructor pattern
var peopleConstructor = function(name, age, state){
	
	this.name = name;
	this.age = age;
	this.state = state;
	this.printPerson = function(){
		console.log(this.name + ", " + this.age + ", " + this.state);
	};
};

var person1 = new peopleConstructor('john', 23, 'CA');
var person2 = new peopleConstructor('kim', 27, 'SC');

person1.printPerson();
person2.printPerson();

//prototype pattern

var peopleProto = function(){

};

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPeron = function(){
	console.log(this.name + ", " +this.age + ", "+this.city);
};

var person1 = new peopleProto();
person1.name = 'john';
person1.age = 23;
person1.city = 'CA';

console.log('name' in person1);
console.log(person1.hasOwnProperty('name'));
// console.dir(peopleProto);

//dynamic prototype pattern

var peopleDynamicProto = function(name, age, state){

	this.age = age;
	this.name = name;
	this.state = state;

	//make the method only once
	if( typeof this.printPerson !== 'function'){
		peopleDynamicProto.prototype.printPeron = function(){
			console.log(this.name + ", " +this.age + ", "+this.state);
		};
	}
};


var person1 = new peopleDynamicProto('john', 23, 'CA');

person1.printPeron();
console.log('name' in person1);
console.log(person1.hasOwnProperty('name'));
