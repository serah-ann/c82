var mouseEvent = "empty";{}

var last_position_of_x,  last_position_of_y;
canvas= document.getElementById("My Canvas");
ctx=canvas. getContext ("2d");

color="light purple";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
width_of_line=document.getElementById("width_of_line").value;

mouseEvent="mouseDown"
}
canvas.addEventListener("mouseMove", my_mouseMove);
function my_mouseMove(e)
{
    current_position_of_mouse_x=e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.moveTo(current_position_of_mouse_x, current_position_of_mouse_y);

        console.log("last position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
     }

     last_position_of_x = current_position_of_mouse_x;
     last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseUp", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseLeave", my_mouseLeave);
function my_mouseLeave(e){
    mouseEvent="mouseLeave";
}
function clearArea()
{
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}