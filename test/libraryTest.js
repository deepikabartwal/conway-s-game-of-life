const { equal, deepEqual } = require('assert');

const {
  createArray,
  printWorld,
  generateBoard,
  placeAlives,
  addSpaces,
  checkCell,
  printBoard
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

describe('placeAlives', function(){
  it('should placeAlives cell in 1*1 board', function(){
    let board = generateBoard(1,1);
    deepEqual(placeAlives([[0,0]],board),[[1]]);
  });
  it("should place alives cells in 2*2 board", function(){
    let board = generateBoard(2,2);
    deepEqual(placeAlives([[0,0],[1,0]],board),[[1,0],[1,0]]);
  });
  it("should place alives in n*n board", function(){
    let board = generateBoard(4,4)
    deepEqual(placeAlives([[0,1],[3,3],[2,1],[1,1]],board),[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,1]])
  });
  it("should work for rectangular board", function(){
    let board = generateBoard(2,3);
    deepEqual(placeAlives([[1,1],[0,0],[1,2]],board),[[1,0,0],[0,1,1]]);
  });
});

describe("addSpaces",function(){
  it('should add spaces around single letter',function(){
    deepEqual(addSpaces("a")," a ");
  });
  it("should add spaces around a word", function(){
    deepEqual(addSpaces("sai")," sai ");
  });
  it("should add spaces around end of sentence", function(){
    deepEqual(addSpaces("i have a dog")," i have a dog ");
  });
});

describe("checkCell",function(){
  it("should print alive cell character when given one",function(){
    let alive = "\u25A0";
    deepEqual(checkCell(1),alive);
  });
  it("should print empty space when given zero",function(){
    deepEqual(checkCell(0)," ");
  });
});

describe("printBoard",function(){
  it("should print 1*1 board",function(){
    expected_output = "";
    expected_output += "-----\n";
    expected_output += "|   |\n";
    expected_output += "-----";
    deepEqual(printBoard(generateBoard(1,1)),expected_output);
  });
});

describe('printWorld', function(){
  it('should print the world grid of 1*1 dimensions', function(){
    let aliveCellList = [];
    let rows = 1;
    let columns = 1;
    let world = {aliveCellList,rows,columns};
    let actual_output = printWorld(world);
    let expected_output = printBoard(generateBoard(1,1));
    deepEqual(actual_output,expected_output);
  });
  it('should print the world grid of 2*2 dimensions', function(){
    let aliveCellList = [[0,0],[1,1]];
    let rows = 2;
    let columns = 2;
    let world = {aliveCellList,rows,columns};
    let actual_output = printWorld(world);
    let expected_output = printBoard([[1,0],[0,1]]);
    deepEqual(actual_output,expected_output);
  });
});
