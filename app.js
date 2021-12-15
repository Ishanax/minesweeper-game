document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    let bombAmount = 25;
    let width = 10;
    let squares = [];

    
    createBoard = () => {
        //random bombs:
        const bombsArray = Array(bombAmount).fill("bomb"); //fill fills whole array with bomb
        const emptyArray = Array(width*width - bombAmount).fill("empty"); 
        console.log(bombsArray);
        console.log(emptyArray);
        const joinBombsAndEmptyArray = emptyArray.concat(bombsArray);
        console.log(joinBombsAndEmptyArray);
        const randomGameArray = joinBombsAndEmptyArray.sort(()=> Math.random() -0.5);
        
        console.log(randomGameArray);

        //make board:
        for(let i = 0; i < width*width; i++) {
            const square = document.createElement("div");
            square.setAttribute("id", i);
            grid.appendChild(square);
            squares.push(square);
        }
    }
    createBoard()
})