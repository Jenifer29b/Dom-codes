📘 DOM Codes – JavaScript DOM Practice

A beginner-friendly repository focused on JavaScript DOM (Document Object Model) concepts.
This repo contains hands-on practice code for selecting, inspecting, and manipulating DOM elements using vanilla JavaScript.

🧠 What is the DOM?

The DOM (Document Object Model) represents an HTML document as a tree of nodes where:

Each HTML element is a node

JavaScript can read, modify, add, or remove elements dynamically

Think of the DOM as a bridge between HTML and JavaScript.

📅 Learning Breakdown
✅ Day 1 – DOM Basics: Selecting & Inspecting
🔹 Concepts Covered

What is the DOM (document, nodes, tree structure)

document object

Selecting elements:

getElementById()

getElementsByClassName()

getElementsByTagName()

querySelector()

querySelectorAll()

Reading content:

.innerText

.textContent

.innerHTML

Reading attributes:

.getAttribute()

.id

.className

.value (for inputs)

🔹 Practice Task


JavaScript tasks:

Select each element using different DOM methods

console.log() selected elements

Display text/content of each element in the console

✅ Day 2 – DOM Manipulation: Changing Content & Styles
🔹 Concepts Covered

Changing text & HTML:

.innerText

.innerHTML

Changing styles dynamically:

.style.property

Adding / removing classes:

.classList.add()

.classList.remove()

.classList.toggle()

📅 Day 3 – Creating & Removing Elements (DOM Manipulation)

This folder contains practice tasks and examples focused on creating, appending, removing, and updating DOM elements dynamically using JavaScript.

The goal of Day 3 is to understand how elements are created in memory, added to the DOM, removed, and updated based on user interactions.

📚 Concepts Covered
🆕 Creating New Elements

document.createElement()

element.textContent

Example:

let li = document.createElement("li");
li.textContent = "Apple";

➕ Appending Elements

appendChild() – appends one node

append() – appends multiple nodes or text

Examples:

ul.appendChild(li);
ul.append(li1, li2);

❌ Removing Elements

parent.removeChild(child)

element.remove()

Examples:

li.remove();
ul.removeChild(li);

🔄 Updating Lists Dynamically

Add list items from input

Update existing list items

Remove single or all list items

Count total items dynamically

Switch between view and edit mode

🧪 Practice Tasks Included

Create list items dynamically

Append items to an existing list

Remove first, last, or selected items

Clear all list items

Update list item text using input

Validate input before adding or updating

Display total count of list items

📂 Folder Structure (Example)
📁 Day-3-Creating-Removing-Elements
   ├── index.html
   ├── script.js
   ├── style.css 
   └── README.md

🎯 Learning Objectives

By completing this folder, you will be able to:

Understand how the DOM works

Create and manipulate elements dynamically

Handle user events effectively

Write clean and readable DOM-based JavaScript

Build interactive UI components without frameworks

🛠️ Technologies Used

HTML

JavaScript (ES6)

Browser DOM API

▶️ How to Run

Open index.html in a browser

Open DevTools (F12) to view console output

Interact with buttons and input fields


🛠️ Technologies Used

HTML5

CSS3

JavaScript (Vanilla JS)

🎯 Purpose of This Repository

Build a strong foundation in DOM manipulation

Practice real-world JavaScript use cases

Prepare for frontend interviews

Improve code readability and confidence

🚀 Future Improvements

Event handling (click, input, submit)

Mini projects:

Dark mode toggle

Modal popup

Todo list

DOM traversal

Form validation

👤 Author

Jenifer.B
Frontend Developer (Learning Phase 🚀)

GitHub: https://github.com/Jenifer29b

⭐ If you find this helpful, don’t forget to star the repo!