const displayi=document.getElementById("disp")
function display(input)
{
    displayi.value+=input
}

function clearD()
{
    displayi.value="";
}
function output()
{
    try{
        displayi.value=eval(displayi.value)
    }
    catch{
        displayi.value="Type numerical value"
    }
}
function single_clear()
{
    displayi.value=displayi.value.slice(0,-1);
}
