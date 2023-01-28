let inputTitle = document.getElementById("note-title");
let addBtn = document.getElementById("addBtn");
let inputText = document.getElementById("note-text");
let output = document.getElementById("output");

let child, delBtn, h2, p;
addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // if we didn't fill title and trying to add note then pop up show
  if ((inputTitle.value == "") | (inputTitle.value == " ")) {
    alert("Please write title.");
  }
  // if note was not input
  else if ((inputText.value == "") | (inputText.value == " ")) {
    alert("please write some note.");
  }
  // if both are written then simply add it to the note
  else {
    //  creating elements of
    child = document.createElement("div");
    delBtn = document.createElement("button");
    h2 = document.createElement("h2");
    p = document.createElement("p");

    h2.innerHTML = inputTitle.value;
    p.innerHTML =inputText.value;
    delBtn.innerHTML = "Delete";

    // adding class to lists element
    child.classList.add("lists");
    delBtn.classList.add("delete");
    h2.classList.add("output-title");
    p.classList.add("text");

    // adding content in child
    child.appendChild(delBtn);
    child.appendChild(h2);
    child.appendChild(p);

    // adding child to output box
    output.appendChild(child);

    // after inserting make input text and input next blank
    inputTitle.value = "";
    inputText.value = "";
  }

  // deleting node after clicking on delete btn
  delBtn.addEventListener("click", function () {
    output.removeChild(this.parentElement);
  });
});
