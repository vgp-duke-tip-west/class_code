let operation = "";
let stored = 0;
new_num = false;
function doit(e){
    console.log(e);
    let what = e.target.innerHTML;
    switch(what){
        case "+":
        case "-":
        case "*":
        case "/":
            //stored = parseFloat(document.getElementById("screen").value);
            operation = what;
            new_num = true;
            //document.getElementById("screen").value = "0";
            //break;
        
        case "=":

            curr = parseFloat(document.getElementById("screen").value);
            
            let n;
            switch(operation){
                case "+":
                    n = stored + curr;
                    break;
                case "-":
                    n = stored - curr;
                    break;
                case "*":
                    n = stored * curr;
                    break;
                case "/":
                    n = stored / curr;
                    break;
            }
            console.log(stored, curr, operation, n)
            document.getElementById("screen").value = n;
            
            break;
        case ".":
            if(new_num){
                stored = parseFloat(document.getElementById("screen").value);
                document.getElementById("screen").value = 0;
                new_num = false;                
            }
            // Check to see if there is already a '.' in the number
            if(document.getElementById("screen").value.indexOf('.') >= 0){
                break;
            }
        default:
            if(new_num){
                stored = parseFloat(document.getElementById("screen").value);
                document.getElementById("screen").value = 0;
                new_num = false;                
            }
            //any of the numbers.
            if(document.getElementById("screen").value == "0" && what != "."){
                document.getElementById("screen").value = what;
            }else{
                document.getElementById("screen").value += what;
            }
    }
}


$("td").click(doit);