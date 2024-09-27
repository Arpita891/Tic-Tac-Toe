let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".resetButton");
let newButton = document.querySelector(".newButton");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector(".msg");

let turnO = true;

let winnerPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]

const reset = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";

    }
}

const showWinner = (winner) => {
    msg.innerText =  `Winner Winner Chicken Dinner !!! \n
    Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        if (turnO){
            box.innerText = "O";
            turnO = false;
        }else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (pattern of winnerPattern) {
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        
        if (posVal1 != "" && posVal2 != "" && posVal3 != ""){
            if (posVal1 === posVal2 && posVal2 === posVal3) {
                showWinner(posVal1);
                return true;

                }
            }
    }
};

newButton.addEventListener("click",reset);
resetButton.addEventListener("click",reset);