let canvas = document.getElementById('can');
let ctx = canvas.getContext('2d');
document.getElementById('body').addEventListener('keydown', movePlayer);

function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawPlayer(){
    clearCanvas();
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
    ctx.fillStyle = player2.color;
    ctx.fillRect(player2.x, player2.y, player2.width, player2.height);
}

function isCollision(lhs, rhs){
    lt = lhs.y;
    lb = lhs.y + lhs.height;
    ll = lhs.x;
    lr = lhs.x + lhs.width;
    rt = rhs.y;
    rb = rhs.y + rhs.height;
    rl = rhs.x;
    rr = rhs.x + rhs.width;
    //console.log('lt',lt,'lb',lb,'ll',ll,'lr',lr)
    //console.log('rt',rt,'rb',rb,'rl',rl,'rr',rr)
    if (lt <= rb && lt >= rt && lr >= rl && lr <= rr) return true;
    if (lb <= rb && lb >= rt && lr >= rl && lr <= rr) return true;
    if (lt <= rb && lt >= rt && ll >= rl && ll <= rr) return true;
    if (lb <= rb && lb >= rt && ll >= rl && ll <= rr) return true;
    return false;
}

function movePlayer(e){
    //console.log(e.keyCode)
    switch(e.keyCode){
        case 37:
            if(player.x > 0)
                player.x -= player.speed;
            break;
        case 38:
            if(player.y > 0)
                player.y -= player.speed;
            break;
        case 39:
            if(player.x < (canvas.width - player.width))
                player.x += player.speed;
            break;
        case 40:
            if(player.y < (canvas.height - player.height))
                player.y += player.speed;
            break;
        case 87://up
            if(player2.y > 0)
                player2.y -= player2.speed;
            break;
        case 65://left
            if(player2.x > 0)
                player2.x -= player2.speed;
            break;
        case 83://down
            if(player2.y < (canvas.width - player2.width))
                player2.y += player2.speed;
            break;
        case 68://right
            if(player2.x < (canvas.height - player2.height))
                player2.x += player2.speed;
            break;
    }
    if(isCollision(player, player2))
        console.log("collision")
}

let player = { x:50,
               y:50,
               height:20,
               width:20,
               speed:2,
               color:"#ff0000"
             }

let player2= { x:100,
               y:100,
               height:20,
               width:20,
               speed:2,
               color:"#0000ff"
             }

setInterval(drawPlayer, 1000/60);


