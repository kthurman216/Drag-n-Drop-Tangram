//variables to calculate difference in x and y position of element and determine currently selected element
let diffX, diffY;
let selectedElem;

function dragElem(event) {
    //set currently selected element on mousedown
    selectedElem = event.currentTarget;

    //get current position of the selected element
    let posX = parseInt(selectedElem.style.left);
    let posY = parseInt(selectedElem.style.top);
    
    //calculate difference between mouse click position and where object is
    diffX = event.clientX - posX;
    diffY = event.clientY - posY;

    //event handlers for moving object and dropping object
    document.addEventListener("mousemove", moveElem, true);
    document.addEventListener("mouseup", dropElem, true);

    //stop event propagation and prevent default actions
    event.stopPropagation();
    event.preventDefault();
}

//move element function
function moveElem(event) {
    selectedElem.style.left = (event.clientX - diffX) + "px";
    selectedElem.style.top = (event.clientY - diffY) + "px";

    //stop event propagation
    event.stopPropagation();
}

//drop element function
function dropElem(event) {
    //remove event listener for mouseup and mousemove
    document.removeEventListener("mousemove", moveElem, true);
    document.removeEventListener("mouseup", dropElem, true);

    //stop event propagation
    event.stopPropagation();
}