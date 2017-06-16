function showSelectionsJQuery(){
    let $radios = $('[name=hour]');
    let $checkboxes = $('[name=need]');
    let $input = $('[name=something]')[0];
    let $output = $('#resultsJQuery');
    
    //console.log($output)
    $output.html("");
    for(var i=0; i<$radios.length; i++){
        if($radios[i].checked){
            $output.html($output.html() + "Radio Button Value: " + $radios[i].value + "<br>");
        }
    }
    for(var i=0; i<$checkboxes.length; i++){
        if($checkboxes[i].checked){
            $output.html($output.html() + "Checkbox Value: " + $checkboxes[i].value + "<br>");
        }
    }
    $output.html($output.html() + "Input Value: " + $input.value + "<br>");
        
}

function showSelections(){
    //getElementsByName returns an array of html elements whose name matches the one passed
    // so this is an array of elements whose name is "hour"
    let radios = document.getElementsByName("hour");
    let checkboxes = document.getElementsByName("need");
    let input = document.getElementsByName("something");
    
    //getElementById returns a single element with the matching id.
    let output = document.getElementById("results");
    output.innerHTML = "";
    
    for(var i=0; i<radios.length; i++){
        if(radios[i].checked){
            output.innerHTML += "Radio Button Value: " + radios[i].value + "<br>"
        }
    }

    for(var i=0; i<checkboxes.length; i++){
        if(checkboxes[i].checked){
            output.innerHTML += "Checkbox Value: " + checkboxes[i].value + "<br>"
        }
    }

    if(input[0].value){
        output.innerHTML += "Input Value: " + input[0].value + "<br>"
    }
}

//console.log($('body'))
document.getElementById('clickMe').addEventListener('click', showSelections);
$('#clickMeJQuery').click(showSelectionsJQuery)