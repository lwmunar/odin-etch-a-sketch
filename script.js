function createGrid(size) {

    size = +size > 100? 100 : +size > 0 ? size : 1;

    gridArea = size ** 2;

    for (let i = 0;i<gridArea;i++) {
        let sketchSquare = document.createElement("div");

        sketchSquare.classList.toggle("square");
        sketchSquare.setAttribute("style",
            `height:${500/size}px;width:${500/size}px;opacity:0.1;`);
        sketchPad.appendChild(sketchSquare);
    }

    usePad();
}
    
function usePad() {

    let sketchSquare = document.querySelectorAll(".square");

    sketchSquare.forEach(square=>{
            square.addEventListener("mouseleave",()=>{

                square.classList.add("hover");

                if (+square.style.opacity >= 1) {
                        square.style.opacity = 1;
                    } 
                    else {
                        square.style.opacity = 0.1 + +square.style.opacity;
                    }
                }
            );
        }
    );
}

let sketchPad = document.querySelector(".container");
let buttonShake = document.querySelector(".shake");
let buttonNew = document.querySelector(".newpad");

createGrid(16);

buttonShake.addEventListener("click",()=>{

    let sketchSquare = document.querySelectorAll(".square");

    sketchSquare.forEach(square=>{
        square.classList.remove("hover");
        square.style.opacity = 0.1;
        }
    );
}
);

buttonNew.addEventListener("click",()=>{

    sketchPad.replaceChildren();
    let size = +window.prompt("Number of boxes per side:",1);
    createGrid(size);
    }
);