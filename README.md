# odin-etch-a-sketch
TOP's Project: Etch-a-Sketch

Create a Etch-a-Sketch game by using DOM manipulation and event handlers in JavaScript.

To-Do:
- initial structure with fixed values
- arbitrary size of square: 30px by 30px due to 500px by 500px initial constraints and gap consideration

- add hover effect
- add button to prompt sketchpad size and reset workspace
- enhance auto-scaling with respect to aspect-ratio
- check possibility to auto-set height and width size according to user prompt thru JavaScript

- add optional style effects, centering, etc.

Notes:
- box-sizing: border-box; allows squares to collapse internally
- instead of using event delegation, make use of:

let element = document.querySelectorAll(".elementClass");
element.forEach((item)=>{
    item.addEventListener("mouseleave",()=>{
    item.setAttribute("style","background-color:red;");
    })
})

- be careful when using parent.replaceChildren() to clear child nodes as it may remove the event listeners attached to it

- checking the type of CSS styles returns strings!
    - typeof square.style.opacity 
    - typeof square.getAttribute("style")