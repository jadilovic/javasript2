

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