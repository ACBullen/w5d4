class Board {
  constructor () {
    this.grid =[
      ["x", null, null],
      [null, "x", null],
      [null, null, "x"],
    ];
  }

  inBounds(x, y) {
    if (x < 0 || x > 2 || y < 0 || y > 2){
      return false;
    } else {
      return true;
    }
  }

  isEmpty(x, y){
    if (this.grid[x][y]){
      return false;
    } else {
      return true;
    }
  }

  placeMark(mark, x, y){
    if (this.inBounds(x, y) && this.isEmpty(x, y)){
      this.grid[x][y] = mark;
    } else {
      throw "Error";
    }
  }

  isWon(mark){
    let won = false;
    let flipped = this.gridTransposer();
    this.grid.concat(flipped).forEach(row =>{
      if (row[0] === mark && row[1] === mark && row[2] === mark){
        won = true;
      }
    });
    if (!won){
      if (this.grid[1][1] === mark){
        if (this.grid[0][2] === mark && this.grid[2][0] === mark){
          won = true;
        } else if(this.grid[0][0] === mark && this.grid[2][2]){
          won = true;
        }
      }
    }

    return won;
  }

  gridTransposer(){
    let newArray = [[],[],[]];

    for(var i = 0; i < this.grid.length; i++){
      for(var j = 0; j < this.grid.length; j++){
        newArray[j].push(this.grid[i][j]);
      }
    }
    return newArray;
  }

}
 module.exports = Board;
