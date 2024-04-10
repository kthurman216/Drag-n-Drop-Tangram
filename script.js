//get all elements of "dragElem" class
let dragItems = document.getElementsByClassName("dragElem");
console.log(dragItems);
let selectedElem;

//jquery function to make objects of "dragElem" class draggable
$( function() {
    $( ".dragElem" ).draggable();
  } );

//when a piece is clicked set that piece to "selected"
for (let i = 0; i < dragItems.length; i++) {
    dragItems[i].addEventListener("click", () => {
        selectedElem = dragItems[i];
        console.log(selectedElem);
    });
}