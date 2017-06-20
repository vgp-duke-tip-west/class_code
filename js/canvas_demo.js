let canvas = document.getElementById('can');
let ctx = canvas.getContext('2d');

function drawRandomBox(e){
    height = randInt(1, canvas.height/2);
    width = randInt(1, canvas.width/2);
    
    left = e.offsetX - width/2;
    topp = e.offsetY - height/2;

    ctx.fillStyle = randomHexColor();
    ctx.fillRect(left, topp, width, height);
}


function drawBox(e){
    height = document.getElementById('height').value;
    width = document.getElementById('width').value;
    
    left = e.offsetX - width/2;
    topp = e.offsetY - height/2;

    ctx.fillStyle = document.getElementById('color').value;
    ctx.fillRect(left, topp, width, height);
}

function drawArc(e){
    e.preventDefault();
    radius = document.getElementById('height').value;
    
    left = e.offsetX - radius/2;
    topp = e.offsetY - radius/2;
    ctx.beginPath();
    ctx.fillStyle = document.getElementById('color').value;
    ctx.arc(left, topp, radius, 0, 2*Math.PI, true);
   
    //ctx.fill();
    ctx.stroke();
}


function clearCanvas(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

style = true;
function toggleStyle(){
    style = !style;
    if(style){
        canvas.removeEventListener('click', drawRandomBox);
        canvas.addEventListener('click', drawBox);
    } else {
        canvas.removeEventListener('click', drawBox);
        canvas.addEventListener('click', drawRandomBox);
    }
}
canvas.addEventListener('contextmenu', drawArc);
document.getElementById('draw').addEventListener('click', toggleStyle);
document.getElementById('restart').addEventListener('click', clearCanvas);
canvas.addEventListener('click', drawBox);
//ctx.fillStyle=randomHexColor();
//ctx.fillText("Hi mom", 10, 10);
