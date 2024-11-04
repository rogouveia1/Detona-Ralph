const state = {
    view:{
        squares: document.querySelectorAll(".square"),
        enemy:document.querySelector(".enemy"),
        timeleft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    values:{
        timeId: null,
        gameVelocity: 1000,
    },  
};

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

    }

/*Mover o inimigo pelos quadrados*/    
function moveEnemy(){
    state.values.timeId = setInterval(randomSquare, state.values.gameVelocity);
}    


function addListenerHitBox(){
    state.view.squares.forEach((squares) => {}); 
}

function initalize() {
    moveEnemy();
}

initalize();

