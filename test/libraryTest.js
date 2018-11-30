const { equal, deepEqual } = require('assert');

const {
  createArray 
} = require('../src/library.js');

describe('createArray', function(){
  it('should return empty array', function(){
    deepEqual(createArray(0,0),[]);
  });
  it("should return an single element array", function(){
    deepEqual(createArray(1,0),[0]);
    deepEqual(createArray(1,'hi'),['hi']);
  });
});
