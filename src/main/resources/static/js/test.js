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
