document.getElementById("start").addEventListener("click", startGame);
const COLS = 10;
const ROWS = 10;
const DIFFICULTY = .2;
let isGameOver = false;

function countNeighbors(cell){
    let count = 0;
    let x = parseInt(cell.getAttribute('x'));
    let y = parseInt(cell.getAttribute('y'));
    //(x-1, y-1)  (x, y-1)  (x+1, y-1)
    //(x-1, y)    (x, y)    (x+1, y)
    //(x-1, y+1)  (x, y+1)  (x+1, y+1)
    let nw = document.getElementById((x-1) + "_" + (y-1));
    let n  = document.getElementById((x)   + "_" + (y-1));
    let ne = document.getElementById((x+1) + "_" + (y-1));
    let w  = document.getElementById((x-1) + "_" + (y));
    let e  = document.getElementById((x+1) + "_" + (y));
    let sw = document.getElementById((x-1) + "_" + (y+1));
    let s  = document.getElementById((x)   + "_" + (y+1));
    let se = document.getElementById((x+1) + "_" + (y+1));
    if(nw && nw.hasAttribute("mine")){ count++; }
    if(n && n.hasAttribute("mine")){ count++; }
    if(ne && ne.hasAttribute("mine")){ count++; }
    if(w && w.hasAttribute("mine")){ count++; }
    if(e && e.hasAttribute("mine")){ count++; }
    if(sw && sw.hasAttribute("mine")){ count++; }
    if(s && s.hasAttribute("mine")){ count++; }
    if(se && se.hasAttribute("mine")){ count++; }
    return count;
}

function clickCell(e){
    if(isGameOver){return;}
    console.log("clickCell!", this);
    
    if(this.hasAttribute("mine")){
        //You lose!
        console.log("game over")
        isGameOver = true;
        let bombs = document.querySelectorAll("[mine]");
        for(var i = 0; i < bombs.length; i++){
            bombs[i].className = "boom";
        }
        return;
    }
    this.innerHTML = countNeighbors(this);
    console.log(countNeighbors(this));
    
}

function flagCell(e){
    console.log("flagCell!", e);
    e.preventDefault();
}

function startGame(){
    isGameOver = false;
    //clear out old gameboard (this allows for a new game.)
    document.getElementById("gameboard").innerHTML = "";
    //dynamically build table.
    var table = document.createElement("table");
    document.getElementById("gameboard").appendChild(table);
    for(var row = 0; row < ROWS; row++){
        var tr = document.createElement("tr");
        table.appendChild(tr);
        for(var col = 0; col < COLS; col++){
            var td = document.createElement("td");
            td.addEventListener("click", clickCell);
            td.addEventListener("contextmenu", flagCell);
            td.setAttribute("id", col + "_" + row);
            td.setAttribute("x", col);
            td.setAttribute("y", row);
            if(Math.random() < DIFFICULTY){
                //make me a mine!
                td.setAttribute("mine", true);
            }
            tr.appendChild(td);
        }
    }
}