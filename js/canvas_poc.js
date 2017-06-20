let canvas = document.getElementById('can');
let ctx = canvas.getContext('2d');
let player = {x:10, y:10}

function restart(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw(){
    ctx.fillStyle = "#123456";
    ctx.fillRect(0, 0, 150, 150);
}

function doKey(e){
    switch(e.keyCode){
        case 37: //left
            player.x -= 10;
            break;
        case 38: //up
            player.y -= 10;
            break;
        case 39: //right
            player.x += 10;
            break;
        case 40: //down
            player.y += 10;
            break;
            
            
    }
    console.log(e)
}

document.getElementById('draw').addEventListener('click', draw);
document.getElementById('restart').addEventListener('click', restart);
document.getElementById('body').addEventListener('keydown', doKey);
function update(){
    restart();
    ctx.fillStyle = "#123456";
    ctx.fillRect(player.x, player.y, 50, 50);
}
setInterval(update, 1000/60);