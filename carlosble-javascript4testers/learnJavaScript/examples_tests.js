// Run theses tests using Mocha
var chai = require('chai');
var expect = chai.expect;
var examples = require('./examples');

describe("the behavior of the code in the examples", function(){

  it("calculates the average of an array", function(){
      expect(examples.average([2,2,2])).equal(2);      
  });
  it("calculates the average of an array with decimals", function(){
      expect(examples.average([7,7,9])).equal(7.666666666666667);      
  });

});

