const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy:document.querySelector(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values:{
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
    }, 
        actions: {
            timeId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval (countDown, 1000),
        }, 
};

function countDown(){
    state.values.curretTime--;
    state.view.timeleft.textContent = state.values.curretTime;

    if (state.values.curretTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timeId);
        alert("Game Over! O seu resultado foi: " + state.values.result);
    }
}
function playSound(){
    let audio = new Audio("./src/audios/hit.m4a");
    audio.volume = 0.2;
    audio.play();
}

/*Definir onde estará o inimigo*/
function randomSquare(){
/*Limpar todos os quadrados onde possa estar o inimigo*/ 
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");    
    })
/*Sortear o quadrado onde estará o inimigo*/
    let randomNumber = Math.floor(Math.random() * 9);
/*Pegar o quadrado sorteado e incluir o inimigo*/
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;

    }

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            }
        })
    })
}

function initalize() {
    addListenerHitBox();
}

initalize();

