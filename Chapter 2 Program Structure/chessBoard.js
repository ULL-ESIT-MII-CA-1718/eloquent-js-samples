// Board starts empty
var board = '';

//Put a loop inside a new loop
//So that the row prints out 8 times.
for(var y = 0; y < 8; y++){
  for(var x = 0; x < 8; x++){
    // Now we add ' ' if x is even, '#' if it is odd.
    if(x % 2 == 0){
      board += ' ';
    } else {
      board += '#';
    }
  }
  // Add a line break at the end of each row.
  board += '\n';
} // new loop end

console.log(board);
