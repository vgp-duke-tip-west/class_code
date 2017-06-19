//MOUSE EVENTS
function click(e){
    if(e.button == 0){
        console.log("click", e);
    } else if(e.button == 2){
        e.preventDefault();
        console.log("right click", e);
    }
    if(e.x < 600 && e.x > 400 && e.y > 50 && e.y < 100){
        console.log("clicked in this region");
    } else{
        console.log("clicked outside of this region");
    }
}

function dblclick(e){
    console.log("double click", e);
}

function down(e){
    console.log("down", e);
}

function up(e){
    console.log("up", e);
}

let the_div = document.getElementById("first_div");
the_div.addEventListener('click', click);
the_div.addEventListener('contextmenu', click);
the_div.addEventListener('dblclick', dblclick);
the_div.addEventListener('mousedown', down);
the_div.addEventListener('mouseup', up);

function drag(e){
    console.log('drag', e);
}

the_div.addEventListener('drag', drag);

//KEYBOARD EVENTS
function keydown(e){
    console.log('keydown', e)
}

function keyup(e){
    console.log('keyup', e)
}

function keypress(e){
    console.log('keypress', e)
}
let the_body = document.body;
the_body.addEventListener('keydown', keydown);
the_body.addEventListener('keyup', keyup);
the_body.addEventListener('keypress', keypress);

//WINDOW EVENTS
function resize(e){
    console.log('resize', e);
}
function scroll(e){
    console.log('scroll', e);
}
window.addEventListener('resize', resize);
window.addEventListener('scroll', scroll);


let second_div = document.getElementById('second_div');
second_div.addEventListener('click', function(e) {console.log("blah", e, this);});

