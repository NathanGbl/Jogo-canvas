var canvas = document.getElementById('jogo');
var ctx = canvas.getContext('2d');

function start(){
    var comeco = {
        x0 : 200,
        y0 : 125,
        largura : 400,
        altura : 250,
        cor : '#f00'
    }
    ctx.fillStyle = comeco.cor
    ctx.fillRect(comeco.x0, comeco.y0, comeco.largura, comeco.altura)

    ctx.font = '30pt Arial'
    ctx.fillStyle = '#fff'
    ctx.fillText('Start Game', 300, 255)
    canvas.addEventListener('click', setInterval(criabola, 2000))
}

canvas.addEventListener('load', modojogo())

function dificuldade(){
    var facil = {
        x0 : 20,
        y0 : 225,
        largura : 220,
        altura : 50,
    }
    var medio = {
        x0 : 260,
        y0 : 225,
        largura : 250,
        altura : 50,
    }
    var dificil = {
        x0 : 530,
        y0 : 225,
        largura : 250,
        altura : 50,
    }
    ctx.beginPath()
    ctx.fillStyle = '#f00'
    ctx.font = '30pt Arial'
    ctx.fillText('Dificuldades', 280, 100)

    ctx.beginPath()
    ctx.fillStyle = '#0f0'
    ctx.fillRect(facil.x0, facil.y0, facil.largura, facil.altura)
    ctx.fillStyle = '#000'
    ctx.font = '20pt Arial'
    ctx.fillText('Fácil', 97, 260)

    ctx.beginPath()
    ctx.fillStyle = '#FFFF00'
    ctx.fillRect(medio.x0, medio.y0, medio.largura, medio.altura)
    ctx.fillStyle = '#000'
    ctx.font = '20pt Arial'
    ctx.fillText('Médio', 350, 260)

    ctx.beginPath()
    ctx.fillStyle = '#f00'
    ctx.fillRect(dificil.x0, dificil.y0, dificil.largura, dificil.altura)
    ctx.fillStyle = '#000'
    ctx.font = '20pt Arial'
    ctx.fillText('Difícil', 620, 260)
}

function modojogo(){
    
}

var bolas
function criabola(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    bolas = {
        centro_x : Math.random()*canvas.width,
        centro_y : Math.random()*canvas.height,
        raio : 15,
        comprimento : 2*Math.PI,
        algo : 0,
        cor : '#0ff22d',
    }
    if (bolas.centro_x + bolas.raio > canvas.width){
        bolas.centro_x = canvas.width - bolas.raio
    } else if (bolas.centro_y + bolas.raio > canvas.height){
        bolas.centro_y = canvas.height - bolas.raio
    } else if (bolas.centro_x + bolas.raio < 0){
        bolas.centro_x = bolas.raio
    } else if (bolas.centro_y + bolas.raio < 0){
        bolas.centro_y = bolas.raio
    }
    ctx.beginPath();
    ctx.arc(bolas.centro_x, bolas.centro_y, bolas.raio, bolas.algo, bolas.comprimento, bolas.cor);
    ctx.fillStyle = bolas.cor;
    ctx.fill();
}

var erro
function erros(){
    erro = {
        x_centro : 10,
        y_centro : 10,
        raio : 10,
        algo : 0,
        comprimento : 2*Math.PI,
        cor: '#FF0000',
    }
    ctx.beginPath();
    ctx.arc(erro.x_centro, eroo.y_centro, erro.raio, erro.algo, erro.comprimento, erro.cor);
    ctx.fillStyle = erro.cor;
    ctx.fill();
}
canvas.addEventListener('mousemove', function(movemouse){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = movemouse.clientX - rect.left
    let y_mouse = movemouse.clientY - rect.top
})