let boxes = document.querySelectorAll(".box");
let resetBtn =document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
//playerO and playerX
let turnO = true ; // if true then print O.

// winning partterns.
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box is clicked ");
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; 

        checkWin();
    });
});

const checkWin = () => {
    for ( let pattern of winpatterns){

        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if ( pos1val != "" && pos2val != "" && pos3val != "" ){
            if ( pos1val === pos2val && pos2val === pos3val ){
                // alert("Player O wins !");
                console.log(`payer ${pos1val} wins !`);
                showWinner(pos1val);
            } 
        } 
    }
}
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
    });
}

const showWinner = (winner) => {
    msg.innerText = `Payer ${winner} wins !`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame = () => {
    turnO = true ;
    enableBoxes();
    boxes.forEach((box) => {
        box.innerText = "";
    });
    msgContainer.classList.add("hide");
}

newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);