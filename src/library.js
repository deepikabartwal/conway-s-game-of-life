const read = require('readline-sync').question;

const getNumber = function(a){
  let msg = "give "+a+" of world : ";
  let number = read(msg);
  if(number > 0){
    return +number;
  }
  console.log("wrong input try again");
  return getNumber(a);
}

const getSize = function(){
  rows = getNumber("length");
  columns = getNumber("breadth");
  return { rows,columns };
}

const createArray = function(length,filler){
  return new Array(length).fill(filler);
}

const generateBoard = function(rows,columns){
  return createArray(rows,rows).map((x) => createArray(columns,0));
}

const placeAlives = function(aliveCellList,board){
  newBoard = board.map((x) => x.slice());
  aliveCellList.map((x) => newBoard[x[0]][x[1]] = 1);
  return newBoard;
}

const addSpaces = function(text){
  return " "+text+" ";
}

const checkCell = function(elem){
  let alivecell = '\u25A0';
  let deadcell = ' ';
  return elem == 1 ? alivecell : deadcell;
}

const printBoard = function(board){
  let length = board[0].length;
  let dashline = createArray(length*4+1,"-").join("");
  let lines = [];
  lines.push(dashline);
  let boardlines = board.map((x) => "|"+x.map(checkCell).map(addSpaces).join("|")+"|");
  boardlines = boardlines.map((x) => x+"\n"+dashline);
  return lines.concat(boardlines).join('\n');
};

const printWorld = function(world){
  let {aliveCellList,rows,columns} = world;
  let board = generateBoard(rows,columns);
  let newBoard = placeAlives(aliveCellList,board);
  return printBoard(newBoard);
}

module.exports = {
  createArray,
  printWorld,
  generateBoard,
  placeAlives,
  addSpaces,
  checkCell,
  printBoard
}
