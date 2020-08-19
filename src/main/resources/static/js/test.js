
let num1 = 12.36;
alert( num1.toFixed(1) ); // "12.4"

let num = 1.23456;

alert( Math.floor(num * 100) / 100 ); // 1.23456 -> 123.456 -> 123 -> 1.23

/**

alert( 12345699..toString(36) ); // 2n9c

alert((123456).toString(36));
/**
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

/**
alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides


// -3 divides by 1 with 3 zeroes
let num = 1e-3;

//1e-3 = 1 / 1000 (=0.001)
alert(num);

// -6 divides by 1 with 6 zeroes
let num2 = 1.23e-6;
alert(num2);
//1.23e-6 = 1.23 / 1000000 (=0.00000123)

/**
let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes

alert( 7.3e9 );  // 7.3 billions (7,300,000,000)

"strict mode"

let word = "Hello";

word.test = 5;

alert(word.test);

/**
let num = Number("123");

alert(num + 2);


/**
let n = 0;

alert(n + " is type " + typeof n);

let num = new Number(0);

alert(num + " is type: " + typeof num);

if(num){
	alert(num + " is thruty");
}

/**
let num = 1.123456;

alert( num.toFixed(2) );


/**
let bob = "Hello";

alert(bob.toUpperCase());


/**
let user = {name: "John",
			age: 7,
			hiBoy: function(){
				alert("Hi boy " + this.name);
			}
		}

alert(user.hiBoy() + " " + user.name);
user.hiBoy();

/**

let obj = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return "2";
  }
};

alert(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number

/**

let user = {
		name: "John",
		money: 1000,
		
		toString(){
			return `{name: "${this.name}"}`;
		},
		
		valueOf(){
			return this.money;
		}
}

alert(user);
alert(+user);
alert(user + 500);
/**
let user = {
  name: "John",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    alert(`hint: ${hint}`);
    return hint == "string" ? `{name: "${this.name}"}` : this.money;
  }
};

// conversions demo:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500

/**

let globalSymbol = Symbol.for("global");
let localSymbol = Symbol("local");

alert(Symbol.keyFor(globalSymbol));
alert(Symbol.keyFor(localSymbol));

alert(globalSymbol.description);
alert(localSymbol.description);

/**

let sys = Symbol.for("name");
let sys2 = Symbol.for("id");

alert(Symbol.keyFor(sys));
alert(Symbol.keyFor(sys2));

/**
 * 
let id = Symbol.for("id");

let idAgain = Symbol.for("id");

alert(idAgain === id);



/**

let id = Symbol("id");

let user = {
		name: "John",
		[id]: 123
}

let clone = Object.assign({}, user);

alert(Object.keys(clone));

alert(clone.name + ", and " + clone[id]);

/**

let id = Symbol("id");

let user = {
  name: "John",
  age: 30,
  [id]: 123
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert( "Direct: " + user[id] );

alert(Object.keys(user));

/**
let id = Symbol("id");

let user = {
  name: "John",
  [id]: 123 // not "id": 123
};

alert(user[id]);

/**
let user = { // belongs to another code
  name: "John"
};

let id = Symbol("id");

user[id] = 1;

alert( user[id] ); // we can access the data using the symbol as the key

/**
let id = Symbol("what id");

alert(id.toString());
alert(id.description);


/**
let user = {
		name: "Aki"
}

alert(user?.name.lastName);


/**
let accumulator = new Accumulator(1); // initial value 1

function Accumulator(startingValue){
	
	this.value = startingValue;
	
	this.read = function(){
		this.value += +prompt("How much to add", 0);
	}
	
}

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value
accumulator.read();

alert(accumulator.value); // shows the sum of these values


/**

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); // true

/**
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "My name is: " + this.name );
  };
}

function Action(){
	this.swim = function(){
		alert("You are swiming");
	}
}

let john = new User("John");
let bob = new User("Bob");
let s = new Action();

s.swim();

john.sayHi(); // My name is: John
bob.sayHi();

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/

/**

let user = new User("Jack");

alert(user.name); // Jack
alert(user.isAdmin); // false


function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

/**
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert( this.step );
    return this;
  }
}

ladder.up().up().down().up().down().showStep(); // 1

/**

let calculator = {
  read(){
	  this.num1 = +prompt("Enter num 1: ", 0);
	  this.num2 = +prompt("Enter num 2: ", 0);
  },
  sum(){
	  return this.num1 + this.num2;
  },
  mul(){
	  return this.num1 * this.num2;
  }
  
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );



/**
function makeUser() {
  return {
    name: "John",
    ref: this
  };
};

let user = makeUser();

alert( user.ref.name ); // What's the result?

/**
let user = { name: "John" };
let admin = { name: "Admin" };

function sayHi() {
  alert( this.name );
}

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)

/**
let user = {
  name: "John",
  age: 30,

  sayHi() {
    alert( user.name ); // leads to an error
  }

};


let admin = user;
user = null; // overwrite to make things obvious

admin.sayHi(); // Whoops! inside sayHi(), the old name is used! error!

/**
let user = {name: "John",
			age: 77,
			goodDay(){
				alert("How are you John?");
			}
		};

user.sayHi = function(){
	alert("My name is " + user.name);
}

user.sayHi();
user.goodDay();

for(key in user)
	alert(user[key]);
/**

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert(user === clone);

alert( user.sizes === clone.sizes ); // true, same object

// user and clone share sizes
user.sizes.width++;       // change a property from one place
alert(clone.sizes.width); // 51, see the result from the other one

let deep = _.cloneDeep(user);
console.log(deep[0] === objects[0]);
// => false

/**
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

alert( user.sizes.height ); // 182

/**
let user = {name: "Jasmin", age: 44};

let admin = Object.assign({}, user);

for(key in admin)
	alert(admin[key]);

alert(user == admin);


/**
let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);


let admin = {name: "Master"};

Object.assign(admin, user);


for(key in admin)
alert(admin[key]);

// now user = { name: "John", canView: true, canEdit: true }

/**

let user = {
  name: "John",
  age: 30
};

let clone = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
	alert(key + ":, " + user[key]);
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert( user.name ); // still John in the original object

/**
let user = {name: "John"};

let admin = user;

admin.name = "Bob";

alert(user.name);


/**

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

for(key in menu){
	alert(menu[key]);
}

function multiplyNumeric(menu){
	for(key in menu){
		if(typeof menu[key] == "number")
		menu[key] *= 2;
	}
}

/**
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = calculate(salaries);
alert(sum);

function calculate(salaries){
	let sum = 0;
	for(salary in salaries){
		sum += salaries[salary];
	}
	return sum;
}

/**
let schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

alert(isEmpty(schedule));
alert(schedule["8:30"]);


function isEmpty(schedule){
	for(key in schedule){
		return false;
	}
	return true;
}
/**
let user = {name: "John",
			surename: "Smith",
			}

alert(user.name + ", " + user.surename);

user.name = "Pete";

alert(user.name + ", " + user.surename);

delete user.name;

alert(user.name + ", " + user.surename);


/**

let user = {name: "Bob", age: 9, isAdmin: true};

for(list in user){
	alert(list);
}

for(list in user){
	alert(user[list]);
}

/**
let user1 = {name: "aki", age: 33};

alert("name" in user1);

alert("baba" in user1);


let user = {};

alert(user.noSuchProperty === undefined);


/**
let obj = {
		broj1: 1,
		broj2: 2,
		broj3: 3
}

alert(obj.broj1 + obj.broj2 + obj.broj3);

/**
let name = prompt("Enter name: ", "name");
let age = prompt("Enter age: ", 0);

let user = makeUser(name, age);

alert(user.name + " and " + user.age);


function makeUser(name, age){
	return {
		name,
		age
	}
}


/**

let fruit = prompt("What fruit do you want", "apple");

let basket = {[fruit]: 7};

alert(basket.apple);

let bag = {};

bag[fruit] = 10;

alert(bag.orange);

let total = {
	[fruit + "Banana"]: 11
};

alert(total.limunBanana);

/**
let user = { name: "John",
			age: 5};

let key = prompt("What value dou you want to know?", "name");

alert(user[key]);


/**
alert(user["likes birds"]);

user["likes birds"] = false;

alert(user["likes birds"]);

/**
let user1 = new Object();
  let user2 = {name: "John",
		  		age: 44,
		  		"likes birds": true};
  
  user1.name = "Jasmin";
  user1.age = 99;
  
  alert(user1.name);
  alert(user1.age);
  
  user2.isAdmin = true;
  
  alert(user2.name);
  alert(user2.age);
  alert(user2.isAdmin);

  delete(user1.age);
  alert(user1.age);
  
  
  const user3 = {name: "John"};
  user3.name = "Bob";
  alert(user3.name);

/**
describe("pow", function() {

  describe("raises x to power 3", function() {

    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  describe("testing negative and not integer", function(){
	  
	  it("for negative n the result is NaN", function() {
		    assert.isNaN(pow(2, -1));
		  });

		  it("for non-integer n the result is NaN", function() {
		    assert.isNaN(pow(2, 1.5));
		  }); 
  });
  // ... more tests to follow here, both describe and it can be added
});




describe("pow", function() {

  it("raises to n-th power", function() {
    assert.equal(pow(2, 3), 8);
  });
  
  it("3 raised to the power of 4", function() {
	    assert.equal(pow(3, 4), 81);
	  });
  
  function makeTest(x){
	  let expected = x * x * x;
	  it(`${x} raised to the power of 3 is ${expected}`, 
		function(){
		  	assert.equal(pow(x, 3), expected);
	  		}
	  	);
  	}
  
  for(let i = 1; i < 5; i++){
	  makeTest(i);
  }

});


describe("test", function() {

  before(() => alert("Testing started – before all tests"));
  after(() => alert("Testing finished – after all tests"));

  beforeEach(() => alert("Before a test – enter a test"));
  afterEach(() => alert("After a test – exit a test"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});
**/
