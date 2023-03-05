//The navbar section
let menuEl = document.querySelector(".menu");
let listEl = document.querySelector(".list");

menuEl.addEventListener("click", () => {
  if (listEl.style.display == "none") {
    listEl.style.display = "block";
  } else {
    listEl.style.display = "none";
  }
});

//The diary section
let notes = document.querySelector(".notes");
let note = document.querySelector(".note");
let deleteButton = document.querySelector(".deleteButton");
let arr = [];

let newNotes = function () {
  let newNote = notes.value;
  let date = new Date();
  localStorage.setItem("savedNote", newNote);
  const savedInput = localStorage.getItem("savedNote");
  note.innerHTML += `<div style='padding:20px;font-size:1.2rem;'>
    <h3>${savedInput}</h3>
    <p>${date.toDateString()}, ${date.toLocaleTimeString()}</p>
        <i class="fa-sharp fa-solid fa-xmark deleteButton"></i>
    <div>`;
  return arr.push(savedInput);
};

//Clear the input box
function clearNotes() {
  notes.value = "";
}
// deleteButton.addEventListener('click', clearNote)

// function clearNote(){
//     let item = e.target
//     if(item.classList[0]==='deleteButton'){
//         item.parentElement.remove()
//     }else{
//         console.log('Hello')
//     }
// }
