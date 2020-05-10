// declare size and an empty "board" string
var size = 8;
var board = "";

// first looping for rows
for (let i = 1; i <= size; i++) {
  // inner loop for columns
  for (let j = 1; j <= size; j++) {

//(i as a row , j as a col) 
//(j will loop 8 time for a row)
//
    if ((i + j) % 2 == 0) { 
// check the position of row and col 
// if row + col is even then print " " 
      board += " ";
    } else { 
// if row + col is odd then print "#" 
      board += "#";
    }
  }

  board += "\n"; // jump to next row after finish looping for a column
}
console.log(board);

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 