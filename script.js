//get all elements of "dragElem" class
let dragItems = document.getElementsByClassName("dragElem");
// console.log(dragItems);
let selectedElem, selectedInd, prevX, prevY;

//variables for inital rotation for all pieces
let rotation = [0, 45, 0];

//get all the buttons
const rotatebtn = document.getElementById("rotate");
const leftbtn = document.getElementById("left");
const rightbtn = document.getElementById("right");
const upbtn = document.getElementById("up");
const downbtn = document.getElementById("down");

//jquery function to make objects of "dragElem" class draggable
$( function() {
    $( ".dragElem" ).draggable();
  } );

//when a piece is clicked set that piece to "selected"
for (let i = 0; i < dragItems.length; i++) {
    dragItems[i].addEventListener("mousedown", () => {
        selectedElem = dragItems[i];
        selectedInd = i;
        prevX = parseInt(selectedElem.style.left);
        prevY = parseInt(selectedElem.style.top);
        console.log(selectedElem);
    });
}

//
rotatebtn.addEventListener("click", () => {
    if (selectedElem != null) {
        //get object's current rotation
        currRot = rotation[selectedInd];

        //add 45 to object's current rotation
        let newRot = currRot + 45;
        if (newRot > 360)
            newRot = newRot - 360;
        selectedElem.style.transform = "rotate(" + newRot + ")";
        rotation[selectedInd] = newRot;
    }
});

leftbtn.addEventListener("click", () => {
    if (selectedElem != null) {
        prevX = parseInt(selectedElem.style.left);
        let newX = prevX - 1;
        selectedElem.style.left = newX + "px";
    }
});

rightbtn.addEventListener("click", () => {
    if (selectedElem != null) {
        prevX = parseInt(selectedElem.style.left);
        let newX = prevX + 1;
        selectedElem.style.left = newX + "px";
    }
});

upbtn.addEventListener("click", () => {
    if (selectedElem != null) {
        prevY = parseInt(selectedElem.style.top);
        let newY = prevY - 1;
        selectedElem.style.top = newY + "px";
    }
});

downbtn.addEventListener("click", () => {
    if (selectedElem != null) {
        prevY = parseInt(selectedElem.style.top);
        let newY = prevY + 1;
        selectedElem.style.top = newY + "px";
    }
});
