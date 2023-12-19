var output = document.getElementById("output");

function disp(num)
{
    output.value += num;
}
function calc(){
    try{
        output.value = eval(output.value);
    }
    catch(err)
    {
        alert('Invalid Input');
    }
}
function cl()
{
    output.value = "";  
}
function del()
{
    output.value = output.value.slice(0,-1);
}