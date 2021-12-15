document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    let bombAmount = 25;
    let width = 10;
    let squares = [];
    


    createBoard = () => {
        //random bombs:
        const bombsArray = Array(bombAmount).fill("bomb"); //fill fills whole array with bomb
        const emptyArray = Array(width*width - bombAmount).fill("empty"); 
        const joinBombsAndEmptyArray = emptyArray.concat(bombsArray);
        const randomGameArray = joinBombsAndEmptyArray.sort(() => Math.random() -0.5); //note to self: not sure this is the most random way
        
        //make board:
        for(let i = 0; i < width*width; i++) {
            const square = document.createElement("div");
            square.setAttribute("id", i);
            square.classList.add(randomGameArray[i]);
            grid.appendChild(square);
            squares.push(square);

        square.addEventListener("click", function (e) {
            click(square);
        })
    }

        for (let i =0; i <squares.length; i++) {
            let total = 0;
            const leftEdgeOfField = i % width === 0;
            const rightEdgeOfField = i === width -1;

            if (squares[i].classList.contains("empty")) {
                if (i > 0 && !leftEdgeOfField && squares[i -1].classList.contains('bomb')) total++;
                if (i > 9 &&!rightEdgeOfField && squares[i +1 - width].classList.contains("bomb")) total++;
                if (i > 10 && squares[i - width].classList.contains("bomb")) total ++;
                if (i > 11 && !leftEdgeOfField && squares[i -1 -width].classList.contains("bombs")) total++;
                if (i < 98 && !rightEdgeOfField && squares[i +1].classList.contains("bomb")) total++;
                if (i < 90 && !leftEdgeOfField && squares[i -1 + width].classList.contains("bomb")) total++;
                if (i < 88 && !rightEdgeOfField && squares[i +1 + width].classList.contains("bomb")) total++;
                if (i < 89 && squares[i + width].classList.contains("bomb")) total++;

                squares[i].setAttribute("data", total);
            }
        }
    }    
    
    createBoard()

       //clicking action:
    function click(square) {
        if(square.classList.contains("bomb")){
        console.log("Game over");
        }
    } 
})

