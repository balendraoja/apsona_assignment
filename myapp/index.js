let menuBtnEle = document.getElementById("menuBtn");
let menuBarEle = document.getElementById("menuBarContainer");
let buttonsContainerEle = document.getElementById("buttonsContainer");
let keepNotesContainerEle = document.getElementById("keepNotesContainer");

function deleteNote(noteId){
    let removeNoteElement = document.getElementById(noteId);
    console.log(removeNoteElement);
    keepNotesContainerEle.removeChild(removeNoteElement);
}

function onAddNote() {
    let noteId = keepNotesContainerEle.length;
    let userInputEle = document.getElementById("userInput");
    let userInputValue = userInputEle.value;
    let noteContainer = document.createElement("div");
    keepNotesContainerEle.appendChild(noteContainer);

    let noteEle = document.createElement("p");
    let newNoteId = keepNotesContainerEle.length + 1;
    noteEle.textContent = userInputValue;
    noteContainer.classList.add("each-note");
    noteContainer.appendChild(noteEle);
    userInputEle.value = "";
    
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can");
    noteContainer.appendChild(deleteIcon);
    
    deleteIcon.onclick = function(){
        deleteNote(noteId)
    }
}

function displayButtons() {
    buttonsContainerEle.classList.toggle("hide-buttons");
}

function addNote() {
    onAddNote()
}