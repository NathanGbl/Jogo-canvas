var canvas = document.getElementById('jogo');
var ctx = canvas.getContext('2d');
var start = document.getElementById('comeco')

// ctx.clearRect(0, 25, canvas.width, canvas.height)
// ctx.clearRect(115, 0, canvas.width, canvas.height)
var dif_selecionada;
var mod_selecionado;
var comeca;
var pontos = 0
var move1
var move2

var alvo = {
  x0 : Math.random() * canvas.width,
  y0 : Math.random() * canvas.height,
  raio : 20,
  comprimento: 2*Math.PI,
  algo : 0,
  cor : '#0ff22d'
}
var bolas = {
  centro_x : 0,
  centro_y : 0,
  raio : 15,
  comprimento : 2*Math.PI,
  algo : 0,
  cor : '#0ff22d'
}

document.addEventListener('DOMContentLoaded', () => {
  var dificuldades = document.getElementsByClassName('dificuldade');

  for (var i = 0; i < dificuldades.length; i++) {
    dificuldades[i].addEventListener('click', function(event) {
      if (event.target.id === 'facil') {
        dif_selecionada = 'facil';
      } else if (event.target.id === 'medio') {
        dif_selecionada = 'medio';
      } else if (event.target.id === 'dificil') {
        dif_selecionada = 'dificil';
      }

      verificarCondicoes();
    });
  }

  var modo_jogo = document.getElementsByClassName('modos');

  for (var i = 0; i < modo_jogo.length; i++) {
    modo_jogo[i].addEventListener('click', function(event) {
      if (event.target.id === 'tracking') {
        mod_selecionado = 'tracking';
      } else if (event.target.id === 'reflexo') {
        mod_selecionado = 'reflexo';
      }

      verificarCondicoes();
    });
  }

  var start = document.getElementById('comeco')
  start.addEventListener('click', () => {
    comeca = true
    verificarCondicoes()
  })
});

function verificarCondicoes() {
  if (mod_selecionado === 'tracking' && dif_selecionada === 'facil' && comeca === true) {
    console.log('Boa')
    move1 = 1;
    move2 = 1;
    tracking()
  } else if (mod_selecionado === 'tracking' && dif_selecionada === 'medio' && comeca === true) {
    console.log('Boa')
    move1 = 2;
    move2 = 2;
    tracking()
  } else if (mod_selecionado === 'tracking' && dif_selecionada === 'dificil' && comeca === true) {
    console.log('Boa')
    move1 = 3;
    move2 = 3;
    tracking()
  } else if (mod_selecionado === 'reflexo' && dif_selecionada === 'facil' && comeca === true) {
    setInterval(reflexo, 3000)
  } else if (mod_selecionado === 'reflexo' && dif_selecionada === 'medio' && comeca === true) {
    setInterval(reflexo, 2000)
  } else if (mod_selecionado === 'reflexo' && dif_selecionada === 'dificil' && comeca === true) {
    setInterval(reflexo, 1000)
  }
}

// Funcionalidade Modos de jogo
function tracking(){
    desenhabola()
}

function desenhabola(){
  if (alvo.x0 > canvas.width - alvo.raio && alvo.y0 > canvas.height - alvo.raio){
    alvo.x0 = canvas.width - alvo.raio
    alvo.y0 = canvas.height - alvo.raio
    move1 *= -1
    move2 *= -1
} else if (alvo.x0 < alvo.raio && alvo.y0 > canvas.height - alvo.raio){
    alvo.x0 = alvo.raio
    alvo.y0 = canvas.height - alvo.raio
    move1 *= -1
    move2 *= -1
} else if (alvo.x0 < alvo.raio && alvo.y0 < 60){
    alvo.x0 = 20
    alvo.y0 = 60
    move1 *= -1
    move2 *= -1
} else if (alvo.x0 > canvas.width - alvo.raio){
    alvo.x0 = canvas.width - alvo.raio
    move1 *= -1
} else if (alvo.y0 > canvas.height - alvo.raio){
    alvo.y0 = canvas.height - alvo.raio
    move2 *= -1
} else if (alvo.x0 < 20){
    alvo.x0 = 20
    move1 *= -1
} else if (alvo.y0 < 60){
    alvo.y0 = 60
    move2 *= -1
}
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()
  alvo.x0 += move1
  alvo.y0 += move2
  ctx.fillStyle = alvo.cor
  ctx.arc(alvo.x0, alvo.y0, alvo.raio, alvo.algo, alvo.comprimento, alvo.cor)
  ctx.fill()
  ctx.closePath()

    ctx.beginPath()
    ctx.fillStyle = '#f00'
    ctx.font = '20pt Arial'
    ctx.fillText('Pontos: ' + pontos, 0, 25)
    canvas.addEventListener('mousemove', mouseover)
    requestAnimationFrame(desenhabola)
}

function mouseover(event) {
    var rect = canvas.getBoundingClientRect();
    var x_mouse = event.clientX - rect.left;
    var y_mouse = event.clientY - rect.top;
    if (
      x_mouse >= alvo.x0 - alvo.raio &&
      x_mouse <= alvo.x0 + alvo.raio &&
      y_mouse >= alvo.y0 - alvo.raio &&
      y_mouse <= alvo.y0 + alvo.raio
    ) {
      pontos += 1;
      canvas.removeEventListener('mousemove', mouseover)
    } else {
      pontos -= 1
      canvas.removeEventListener('mousemove', mouseover)
    }
  };


function reflexo(){
    ctx.clearRect(0, 25, canvas.width, canvas.height)
    bolas.centro_x = Math.random() * canvas.width;
    bolas.centro_y = Math.random() * canvas.height;
    if (bolas.centro_x > canvas.width - bolas.raio && bolas.centro_y > canvas.height - bolas.raio){
        bolas.centro_x = canvas.width - bolas.raio
        bolas.centro_y = canvas.height - bolas.raio
    } else if (bolas.centro_x < bolas.raio && bolas.centro_y > canvas.height - bolas.raio){
        bolas.centro_x = bolas.raio
        bolas.centro_y = canvas.height - bolas.raio
    } else if (bolas.centro_x < bolas.raio && bolas.centro_y < 40){
        bolas.centro_x = bolas.raio
        bolas.centro_y = 40
    } else if (bolas.centro_x > canvas.width - bolas.raio){
        bolas.centro_x = canvas.width - bolas.raio
    } else if (bolas.centro_y > canvas.height - bolas.raio){
        bolas.centro_y = canvas.height - bolas.raio
    } else if (bolas.centro_x < bolas.raio){
        bolas.centro_x = bolas.raio
    } else if (bolas.centro_y < 40){
        bolas.centro_y = 40
    }
    ctx.beginPath()
    ctx.fillStyle = '#f00'
    ctx.font = '20pt Arial'
    ctx.fillText('Pontos: ' + pontos, 0, 25)

    ctx.beginPath();
    ctx.arc(bolas.centro_x, bolas.centro_y, bolas.raio, bolas.algo, bolas.comprimento, bolas.cor);
    ctx.fillStyle = bolas.cor;
    ctx.fill();

    canvas.addEventListener('click', mouseclick)
}
function mouseclick(movemouse) {
  let rect = canvas.getBoundingClientRect();
  let x_mouse = movemouse.clientX - rect.left
  let y_mouse = movemouse.clientY - rect.top
  if (x_mouse >= bolas.centro_x - bolas.raio && 
      x_mouse <= bolas.centro_x + bolas.raio && 
      y_mouse >= bolas.centro_y - bolas.raio && 
      y_mouse <= bolas.centro_y + bolas.raio){
      pontos += 1
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      canvas.removeEventListener('click', mouseclick)
  } else {
      pontos += -1
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      canvas.removeEventListener('click', mouseclick)
  }
}
ctx.beginPath()
ctx.fillStyle = '#f00'
ctx.font = '20pt Arial'
ctx.fillText('Pontos: ' + pontos, 0, 25)
// canvas.addEventListener('mousemove', function(movemouse){
//     let rect = canvas.getBoundingClientRect();
//     let x_mouse = movemouse.clientX - rect.left
//     let y_mouse = movemouse.clientY - rect.top
// })
