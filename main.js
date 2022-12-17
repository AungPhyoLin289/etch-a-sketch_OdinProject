let color = "black";
function boardBuilding (size)
{
    let board = document.querySelector(".board");
    let sq = document.querySelectorAll("div")
    sq.forEach((div)=> div.remove);
board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
board.style.gridTemplateRows = `repeat(${size}, 1fr)`;


for (let i = 0; i < (size*size); i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSq);
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
  }
}

boardBuilding(16);
function changeBoardSize (input)
{
    boardBuilding(input)
}

function lonesomeInVoid ()
{
    lonesomeInVoid();
}
function colorSq ()
{
    if (color === "rainbow")
    {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor = color;
    }
    
}

function changeColor (choice)
{
   
    
        color = choice;
    
    
}

function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => (div.style.backgroundColor = "white"));
  }