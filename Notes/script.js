const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function show(){
    notesContainer,innerHTML = localStorage.getItem("notes");
}
show();

function update(params){
    localStorage.setItem("notes", notesContainer.innerHTML);

}

createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "Screenshot 2025-08-03 154747.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        update();
    }
    else if(e.target.tagName==="P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(nt=>{
            nt.onkeyup = function(){
            update();
           }
        })
    }
})

document.addEventListener("keydown",event => {
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})