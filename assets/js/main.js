let canvas; //Espaço no qual o jogo funcionará
let ctx; //contexto, no caso 2D
let dx = 5; //trava de variação de vel. horizontal do obj
let dy = 5; //trava de variação de vel. horizontal do obj
let x = 250; //posição horizontal inicial do obj
let y = 100; //posição vertical inicial do obj
let WIDTH = 600; //largura do painel
let HEIGHT = 400; //altura do painel

function desenhar(){
    ctx.beginPath()
    ctx.arc(x, y, 10, 0, Math.PI*2, true)
    ctx.fill()
}
function limparTela(){
    ctx.fillStyle = 'purple' //background do circulo
    ctx.strokeStyle = 'black' //cor da borda
    ctx.beginPath()
    ctx.rect(0, 0, WIDTH, HEIGHT)
    ctx.closePath()
    ctx.fill() //desenho do circulo
    ctx.stroke() //desenho da borda do circulo
}
function keyDown(e){ //definindo o começo da movimentação
    switch(e.keyCode){
        case 38: //seta para cima
        if(y - dy > 0) y -= dy;
        break;
        case 40: //seta para baixo
        if(y + dy < HEIGHT) y += dy;
        break;
        case 37: //seta para esquerda
        if(x - dx > 0) x -= dx;
        break;
        case 39: //seta para direita
        if(x + dx < WIDTH) x += dx;
        break;
    }
}
function atualizar(){
    limparTela()
    desenhar()
}
function iniciar(){
    canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    return setInterval(atualizar, 10)
}
window.addEventListener('keydown', keyDown,true)
iniciar()