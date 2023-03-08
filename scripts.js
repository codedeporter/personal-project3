//The navbar section
let menuEl = document.querySelector(".menu");
let listEl = document.querySelector(".list");

//This toggles the menu when the menu icon is visible
menuEl.addEventListener("click", () => {
  if (listEl.style.display === "none") {
    listEl.style.display = "block";
  } else {
    listEl.style.display = "none";
  }
});

//The diary section
let notes = document.querySelector(".notes");
let note = document.querySelector(".note");

// This function captures what is typed into the input box, saves it to local storage, pulls it from local storage and displays it on the screen along with the date and time
let newNotes = function () {
  let newNote = notes.value;
  let date = new Date();
  localStorage.setItem("savedNote", newNote);
  const savedInput = localStorage.getItem("savedNote");
  note.innerHTML += `<div class="div1" style='padding:20px;font-size:1.2rem;'>
    <h3 id="h3">${savedInput}</h3>
    <p>${date.toDateString()}, ${date.toLocaleTimeString()}</p>
    </div>`;
  return arr.push(savedInput);
};

//Clear the input box
function clearNotes() {
  notes.value = "";
}
