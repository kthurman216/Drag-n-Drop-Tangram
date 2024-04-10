//get all elements of "dragElem" class
let dragItems = document.getElementsByClassName("dragElem");
// console.log(dragItems);
let selectedElem, selectedInd, prevX, prevY;

//variables for inital rotation for all pieces
let rotation = [0, 0, 1, 0, 0, 0, 0];

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
        if (selectedInd == 6) {
            return;
        }
        //get current rotation position from rotation array
        currRot = rotation[selectedInd] * 45;

        //check if rotation position is at 7 (max is 8, 360 degrees), if not rotate to next position
        if (rotation[selectedInd] != 7) {
            rotation[selectedInd] += 1;

            switch(rotation[selectedInd]) {
                case 1:
                    selectedElem.style.transform = "rotate(45deg)";
                    break;
                case 2:
                    selectedElem.style.transform = "rotate(90deg)";
                    break;
                case 3:
                    selectedElem.style.transform = "rotate(135deg)";
                    break;
                case 4:
                    selectedElem.style.transform = "rotate(180deg)";
                    break;
                case 5:
                    selectedElem.style.transform = "rotate(225deg)";
                    break;
                case 6:
                    selectedElem.style.transform = "rotate(270deg)";
                    break;
                case 7:
                    selectedElem.style.transform = "rotate(315deg)";
                    break;
                default:
                    selectedElem.style.transform = "rotate(0deg)";
                    break;
            }
        }
        //else set rotation to 0
        else {
            rotation[selectedInd] = 0;
            selectedElem.style.transform = "rotate(0deg)";
        }
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
