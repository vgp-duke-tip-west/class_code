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

function run(){
    let the_button = document.getElementById("bu");
    let new_x = randInt(0, window.innerWidth - the_button.offsetWidth)
    let new_y = randInt(0, window.innerHeight - the_button.offsetHeight);
    the_button.style.position = 'fixed';
    the_button.style.top = new_y + 'px';
    the_button.style.left = new_x + 'px';
    the_button.style.bottom = randInt(0, window.innerWidth - the_button.offsetWidth) + 'px';
    the_button.style.right = randInt(0, window.innerHeight - the_button.offsetHeight); + 'px';
    the_button.style.color = randomHexColor();
    the_button.style.backgroundColor = randomHexColor();
    the_button.style.borderRadius = randInt(0, 100) + "%";
    the_button.style.padding = randInt(10, 50) + "px";
}


setInterval(run, 500);
