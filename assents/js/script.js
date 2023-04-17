const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo');
const nuvem = document.querySelector('.nuvens')
const gameOver = document.querySelector('.game-over')
const score = document.querySelector('.cronometro')
let pontuacao = 0;
const distanciaP = document.querySelector('.distancia')

const pula = ()=>{
    mario.classList.add('pula-mario');

    setTimeout(()=>{
        mario.classList.remove('pula-mario');
    },600);
}

const loop = setInterval(() => {
    
    const tuboPosicao = tubo.offsetLeft;
    const nuvemPosicao = nuvem.offsetLeft;
    const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px','');

    //quando der game over
    if(tuboPosicao <= 100 && tuboPosicao > 0 && marioPosicao < 80){

        tubo.style.animation = 'none'; 
        tubo.style.left = `${tuboPosicao}px`

        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosicao}px`;

        nuvem.style.animation ='none';
        nuvem.style.left = `${nuvemPosicao}px`;

        score.style.display = 'none';

        gameOver.style.display = 'flex';
        
        distanciaP.innerHTML = (`Sua pontuação foi ${pontuacao}`)
        pontuacao = 0;

        clearInterval(loop);
    }
    pontuacao++;
    score.innerHTML = pontuacao;
}, 10);


document.addEventListener('keydown',pula);