
const card = document.querySelector(".card")
const groceryList = document.querySelector(".grocery-list")
const Add = document.querySelector(".add")
const clearBtn = document.querySelector(".clear-btn")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("itemInput")
const alert = document.querySelector(".alert")

// Variables for edit functionality
let editElement;        // stores the item which we are currently editing
let editFlag = false;   // true when we click edit button


// When form is submitted -> add or edit item
form.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();

    const value = grocery.value;

    // add new item

    if (value && !editFlag) {
        createItem(value);
        grocery.value = "";
        saveData();
    }

    // update existing item
 
    else if (value && editFlag) {
        // change only the title text of selected item
        editElement.querySelector(".title").textContent = value;
        grocery.value = "";   
        editFlag = false;     // turn off edit mode
        saveData();
        displayAlert("Edit successfully", "success")
    }

    // empty input alert
    else {
        displayAlert("Please enter value", "danger")
    }
}


// create a new item and add to the list
function createItem(value) {
    let element = document.createElement("article");
    element.className = "grocery-item";

    // creating item structure
    element.innerHTML = `
         <p class="title">${value}</p>
         <div class="btn-container">
              <img class="edit-btn" src="https://cdn-icons-png.flaticon.com/128/10336/10336582.png">
              <img class="delete-btn" src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png">
         </div>
     `;
   
    groceryList.appendChild(element);
}


// alert message 
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert after 1 sec
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}



// SAVE LIST TO LOCAL STORAGE

function saveData() {
    // saving whole list HTML
    localStorage.setItem("data", groceryList.innerHTML);
}


// LOAD SAVED TASKS ON PAGE LOAD
function showTask() {
    groceryList.innerHTML = localStorage.getItem("data");
}
showTask();


// delete, edit, and click handler

groceryList.addEventListener("click", (e) => {

    // Delete button
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest(".grocery-item").remove();  // remove the selected item
        saveData();
    }

    // Edit button
    if (e.target.classList.contains("edit-btn")) {
        // store selected item to edit
        editElement = e.target.closest(".grocery-item");

        // bring text inside input field for editing
        grocery.value = editElement.querySelector(".title").textContent.trim();
        editFlag = true;    // activate edit mode
    }
   
});


// clear all list items

clearBtn.onclick = () => {
    groceryList.textContent = "";  // remove all items
    saveData();                    // save empty list
};
