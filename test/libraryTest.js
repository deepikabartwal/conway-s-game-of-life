const { equal, deepEqual } = require('assert');

const {
  createArray,
  generateBoard
} = require('../src/library.js');

describe('createArray', function(){
  it('should return empty array', function(){
    deepEqual(createArray(0,0),[]);
  });
  it("should return an single element array", function(){
    deepEqual(createArray(1,0),[0]);
    deepEqual(createArray(1,'hi'),['hi']);
  });
  it("should create an array of n elements", function(){
    deepEqual(createArray(2,1),[1,1]);
    deepEqual(createArray(4,8),[8,8,8,8]);
  });
});

describe('generateBoard', function(){
  it('should create an 0*0 board', function(){
    deepEqual(generateBoard(0,0),[]);
  });
  it("should create an 1*1 board", function(){
    deepEqual(generateBoard(1,1),[[0]]);
  });
  it("should create an m*n board", function(){
    deepEqual(generateBoard(2,1),[[0],[0]]);
    deepEqual(generateBoard(3,3),[[0,0,0],[0,0,0],[0,0,0]]);
  });
});
