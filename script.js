
function createGrid() {
    let n = 16*16;
    
    for (let i = 0;i<n;i++) {
        let sketchSquare = document.createElement("div");
        sketchSquare.classList.toggle("square");
        sketchPad.appendChild(sketchSquare);
    }
}

let sketchPad = document.querySelector(".container");

createGrid();

let sketchSquare = document.querySelectorAll(".square");

sketchSquare.forEach((square)=> {
    square.addEventListener("mouseleave",()=>{
    square.classList.toggle("hover");
    }
    )
}
)