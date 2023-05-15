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
    canvas.addEventListener('click', function(movemouse){
        let rect = canvas.getBoundingClientRect();
        let x_mouse = movemouse.clientX - rect.left
        let y_mouse = movemouse.clientY - rect.top
        if (x_mouse >= 200 && x_mouse <= 400 && y_mouse >= 125 && y_mouse <= 300){
            setInterval(criabola, 3000)
        }
    })
}

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

    canvas.addEventListener('click', function(movemouse){
        let rect = canvas.getBoundingClientRect();
        let x_mouse = movemouse.clientX - rect.left
        let y_mouse = movemouse.clientY - rect.top
        if (x_mouse >= 20 && x_mouse <= 220 && y_mouse >= 225 && y_mouse <= 275){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
        }
    })
}

function modojogo(){
    var tracking = {
        x0 : 45,
        y0 : 225,
        largura : 240,
        altura : 50,
    }
    var reflexo = {
        x0 : 510,
        y0 : 225,
        largura : 240,
        altura : 50,
    }

    ctx.beginPath()
    ctx.fillStyle = '#f00'
    ctx.font = '30pt Arial'
    ctx.fillText('Modos de Jogo', 280, 100)

    ctx.beginPath()
    ctx.fillStyle = '#f00'
    ctx.fillRect(tracking.x0, tracking.y0, tracking.largura, tracking.altura)
    ctx.fillStyle = '#000'
    ctx.font = '20pt Arial'
    ctx.fillText('Rastrear alvo', 85, 260)

    ctx.beginPath()
    ctx.fillStyle = '#f00'
    ctx.fillRect(reflexo.x0, reflexo.y0, reflexo.largura, reflexo.altura)
    ctx.fillStyle = '#000'
    ctx.font = '20pt Arial'
    ctx.fillText('Reflexo', 585, 260)

    canvas.addEventListener('click', function(movemouse){
        let rect = canvas.getBoundingClientRect();
        let x_mouse = movemouse.clientX - rect.left
        let y_mouse = movemouse.clientY - rect.top
        if (x_mouse >= 45 && x_mouse <= 220 && y_mouse >= 225 && y_mouse <= 275){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            dificuldade()
        } else if (x_mouse >= 510 && x_mouse <= 750 && y_mouse >= 225 && y_mouse <= 275){
            ctx.clearRect(0, 0 , canvas.width, canvas.height)
            dificuldade()
        }
    })
}

// Funcionalidade Modos de jogo
function tracking(){
    var alvo = {
        x0 : Math.random() * (canvas.width - alvo.raio),
        y0 : Math.random() * (canvas.height - alvo.raio),
        rai0 : 20,
        comprimento: 2*Math.PI,
        algo : 0,
        cor : '#0ff22d'
    }
    ctx.arc(alvo.x0, alvo.y0, alvo.raio, alvo.algo, alvo.comprimento, alvo.cor)
    ctx.fillStyle = alvo.cor
    ctx.fill()
    
    canvas.addEventListener('mousemove', function(movemouse){
        let rect = canvas.getBoundingClientRect();
        let x_mouse = movemouse.clientX - rect.left
        let y_mouse = movemouse.clientY - rect.top
        while ((x_mouse >= alvo.x0 && x_mouse <= alvo.x0 + alvo.raio) || (x_mouse >= alvo.x0 - alvo.raio && x_mouse <= alvo.x0 + alvo.raio) && (y_mouse >= alvo.y0 && y_mouse <= alvo.y0 + alvo.raio) || (y_mouse >= alvo.y0 - alvo.raio && y_mouse <= alvo.y0 + alvo.raio)){
            var cont = 0
            cont ++
        }
    })
}

function reflexo(){
    ctx.clearRect(0,0, canvas.width, canvas.height)
    var bolas = {
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

//
function erros(){
    var erro = {
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
canvas.addEventListener('load', modojogo())