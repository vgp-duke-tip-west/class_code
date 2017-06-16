document.getElementById("buildIt").addEventListener('click', buildIt);

function buildIt(){
    let place = document.getElementById("placeWhereImGoingToPutTheTable");
    let table_str = "<table>";
    let rows = document.getElementById("rows").value;
    let cols = document.getElementById("cols").value;
    for(var i = 0; i < rows; i++){
        table_str += "<tr>";
        for(var j = 0; j < cols; j++){
            table_str += "<td>(" + j + ", " + i + ")</td>";
        }
        table_str += "</tr>";
    }
    table_str += "</table>";
    console.log(table_str);
    place.innerHTML = table_str;
}