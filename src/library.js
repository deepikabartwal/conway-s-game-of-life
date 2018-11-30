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

module.exports = {
  createArray,
  generateBoard
}
