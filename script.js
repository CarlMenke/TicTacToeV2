let board = {};
let bArr = [[],[],[]];
let currXO = 'X';
let xScore = 0;
let oScore = 0; 
let xScoreElement = document.getElementById('xScoreChange');
let oScoreElement = document.getElementById('oScoreChange');
let resetButton = document.getElementById('resetButton');
let winMessage = document.getElementById('winMessage');

xScoreElement.innerText = 0;
oScoreElement.innerText = 0;

const winCheck = () =>{
    let counter1 = 0;
    let counter2 = 0;
    for(let i = 0; i  < 3 ;i++){
        for(let j = 0; j < 3; j++){
            if(i === 0 ){
                bArr[i][j] = board['box'+j].value;
            }
            if(i === 1){
                bArr[i][j] = board['box'+(j+3)].value;
            }
            if(i === 2){
                bArr[i][j] = board['box'+(j+6)].value;
            }
        }
    }
    for(let i = 0; i < 3 ; i++){
        counter1 = 0;
        counter2 = 0;
        for(let j = 0; j < 3; j++){
            counter1 += bArr[i][j];
            counter2 += bArr[j][i];
        } 
            if(counter1 === 3 || counter2 === 3){
                winMessage.innerText = 'O Wins!';
                winMessage.style.opacity = 1;
                oScore++;
                oScoreElement.innerText = oScore;
                for(let i = 0; i < 9; i++){
                    board['box'+i].clicked = true;
                }
                break;
            };
            if(counter1 === -3 || counter2 === -3){
                winMessage.innerText = 'X Wins!';
                winMessage.style.opacity = 1;
                xScore++;
                xScoreElement.innerText = xScore;
                for(let i = 0; i < 9; i++){
                    board['box'+i].clicked = true;
                }
                break;

            };
            if(bArr[0][0] + bArr[1][1] + bArr[2][2] === 3 || bArr[2][0] + bArr[1][1] + bArr[0][2] === 3){
                oScore++;
                oScoreElement.innerText = oScore;
                winMessage.innerText = 'O Wins!';
                winMessage.style.opacity = 1;
                for(let i = 0; i < 9; i++){
                    board['box'+i].clicked = true;
                }
                break;

            }
            if(bArr[0][0] + bArr[1][1] + bArr[2][2] === -3 || bArr[2][0] + bArr[1][1] + bArr[0][2] === -3){
                xScore++;
                xScoreElement.innerText = xScore;
                winMessage.innerText = 'X Wins!';
                winMessage.style.opacity = 1;
                for(let i = 0; i < 9; i++){
                    board['box'+i].clicked = true;
                }
                break;
            }
            if(bArr[0][0] != 0 && bArr[0][1] != 0 && bArr[0][2] != 0 && bArr[1][0] != 0 && bArr[1][1] != 0 && bArr[1][2] != 0 && bArr[2][0] != 0 && bArr[2][1] != 0 && bArr[2][2] != 0){
                winMessage.innerText = 'Draw !'
                winMessage.style.opacity = 1;
            }
    }

console.log(bArr);
bArr = [[],[],[]];
}


const preBoardChange1 = (event) =>{
    if(!event.target.clicked){
    event.target.innerText=currXO;
    event.target.classList.add('HoveredOver');
    event.target.classList.remove('Unclicked');
    event.target.classList.remove('Clicked');
}
};

const preBoardChange2 = (event) => {
    if(!event.target.clicked ){
        event.target.classList.add('Unclicked');
        event.target.classList.remove('HoveredOver');
        event.target.classList.remove('Clicked');
    }
};

const changeBoard = (event) =>{
    if(!event.target.clicked){
    event.target.style.opacity = 1;
    Audio.volume = .5;
    new Audio('zapsplat_multimedia_button_click_fast_wooden_organic_005_78839.mp3').play();
    if(currXO === 'X'){
        currXO = 'O'
        event.target.value = -1;
       }else{
        currXO = 'X';
        event.target.value = 1;
    }; 
    event.target.clicked = true;
    event.target.classList.add('Clicked');
    event.target.classList.remove('HoveredOver');
    event.target.classList.remove('Unclicked');
    winCheck();
    }
}; 

const resetFunction = () => {
    for(let i = 0; i < 9; i++){
        board['box'+i].value = 0;
        board['box'+i].clicked = false;
        board['box'+i].innerText = '';
    }
    winMessage.style.opacity = 0;
}
const preResetClick1 = () =>{
    resetButton.classList.toggle('boldText')
}
const preResetClick2 = () => {
    resetButton.classList.toggle('boldText')
}

for(let i = 0; i < 9; i++){
    board['box'+i] = document.querySelectorAll('.Unclicked')[i];
    board['box'+i].addEventListener('click', changeBoard);
    board['box'+i].addEventListener('mouseover',preBoardChange1);
    board['box'+i].addEventListener('mouseout',preBoardChange2);
    board['box'+i].value = 0;
}

resetButton.addEventListener('click',resetFunction);
resetButton.addEventListener('mouseover',preResetClick1);
resetButton.addEventListener('mouseout',preResetClick2);