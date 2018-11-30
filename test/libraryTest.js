const { equal, deepEqual } = require('assert');

const {
  createArray 
} = require('../src/library.js');

describe('createArray', function(){
  it('should return empty array', function(){
    deepEqual(createArray(0,0),[]);
  });
});
