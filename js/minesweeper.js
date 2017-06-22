document.getElementById("start").addEventListener("click", startGame);
const COLS = 10;
const ROWS = 10;
const DIFFICULTY = .2;
let isGameOver = false;

function isWin(){
    let clickedCount = document.querySelectorAll('[clicked]').length;
    let mineCount = document.querySelectorAll('[mine]').length;
    let cellCount = ROWS * COLS;
    if(cellCount == clickedCount + mineCount){
        isGameOver = true;
        return true;
    }
    return false;
}

function getNeighbors(cell){
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
    return [nw, n, ne, w, e, sw, s, se];
}

function countNeighbors(cell){
    let count = 0;
    let neighbors = getNeighbors(cell);
    for(var i = 0; i < neighbors.length; i++){
        if(neighbors[i] && neighbors[i].hasAttribute("mine")){
            count++
        }
    }
    return count;
}

function clickCell(e){
    if(isGameOver){return;}
    if(this.classList.contains('flag')) { return; }
    if(this.hasAttribute('clicked')) { return; }
    this.setAttribute('clicked', true);
    if(this.hasAttribute("mine")){
        //You lose!
        isGameOver = true;
        let bombs = document.querySelectorAll("[mine]");
        for(var i = 0; i < bombs.length; i++){
            bombs[i].className = "boom";
        }
        return;
    }
    let neighbor_bombs = countNeighbors(this);
    if(neighbor_bombs){
        this.innerHTML = neighbor_bombs;
        this.className = "c" + neighbor_bombs;
    } else {
        let neighbors = getNeighbors(this);
        for(var i = 0; i < neighbors.length; i++){
            if(neighbors[i]) {
                neighbors[i].click();
            }
        }
    }
    isWin();
}

function flagCell(e){
    e.preventDefault();
    if(isGameOver) { return; }
    if(this.hasAttribute('clicked')) { return; }
    if(this.classList.contains('flag')){
        this.classList.remove('flag');
    } else {
        this.className = 'flag';
    }
    
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