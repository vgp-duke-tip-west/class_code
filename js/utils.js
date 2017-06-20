function randInt(min, max){
    //return a random integer between min (inclusive) and max (exclusive)
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomHexColor(){
    let r = "0" + randInt(0, 256).toString(16);
    let g = "0" + randInt(0, 256).toString(16);
    let b = "0" + randInt(0, 256).toString(16);
    r = r.slice(-2)
    g = g.slice(-2)
    b = b.slice(-2)
    return "#" + r + g + b;
}