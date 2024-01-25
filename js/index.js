const containerStartGame = document.querySelector('.containerStartGame')
const startGame = document.querySelector('.startGame')
const btnStartGame = document.querySelector('.btnStartGame')
const gameOver = document.querySelector('.gameOver')
const btnGameOver = document.querySelector('.btnGameOver')
const btnLetter = document.querySelectorAll('.btnLetter')
const attempts = document.querySelector('#attempts')
const wordContainer = document.querySelector('#wordContainer')

// Corpo do carinha
const head = document.querySelector('.head')
const body = document.querySelector('.body')
const arm1 = document.querySelector('.arm1')
const arm2 = document.querySelector('.arm2')
const leg1 = document.querySelector('.leg1')
const leg2 = document.querySelector('.leg2')

let numAttempts = 0

let arraypalavrasteste = [
  { name: 'arroz', qtdLetters: new Set('arroz'.split('')).size },
  { name: 'batata', qtdLetters: new Set('batata'.split('')).size },
  { name: 'manga', qtdLetters: new Set('manga'.split('')).size },
  { name: 'abacaxi', qtdLetters: new Set('abacaxi'.split('')).size },
  { name: 'banana', qtdLetters: new Set('banana'.split('')).size },
  { name: 'cenoura', qtdLetters: new Set('cenoura'.split('')).size },
  { name: 'tomate', qtdLetters: new Set('tomate'.split('')).size },
  { name: 'abacate', qtdLetters: new Set('abacate'.split('')).size },
  { name: 'uva', qtdLetters: new Set('uva'.split('')).size },
  { name: 'laranja', qtdLetters: new Set('laranja'.split('')).size },
  { name: 'kiwi', qtdLetters: new Set('kiwi'.split('')).size },
  { name: 'morango', qtdLetters: new Set('morango'.split('')).size },
  { name: 'abacaxi', qtdLetters: new Set('abacaxi'.split('')).size },
  { name: 'melancia', qtdLetters: new Set('melancia'.split('')).size },
  { name: 'pera', qtdLetters: new Set('pera'.split('')).size },
  { name: 'abobora', qtdLetters: new Set('abobora'.split('')).size },
  { name: 'mexerica', qtdLetters: new Set('mexerica'.split('')).size },
  { name: 'goiaba', qtdLetters: new Set('goiaba'.split('')).size },
  { name: 'limao', qtdLetters: new Set('limao'.split('')).size },
  { name: 'abacaxi', qtdLetters: new Set('abacaxi'.split('')).size }
];

// console.log(arraypalavrasteste2);


let qtdChosenLetters = 0

// console.log(arraypalavrasteste[1].name)

let palavraescolhida = arraypalavrasteste[Math.floor(Math.random() * arraypalavrasteste.length)]
let palavra = palavraescolhida.name
let qtdLetrasPalavraEscolhida = palavraescolhida.qtdLetters
let actualLetter
let resposta = ''

console.log('ROUBAR NÃO VALE PÔ. ' + palavra)


for (let i = 0; i < palavra.length; i++) {
  let div = document.createElement('div')
  div.classList.add('word')
  // let letter = palavraescolhida[i]
  div.innerHTML = `<p></p>`


  wordContainer.appendChild(div)
}

function updateWordDisplay() {
  for (let i = 0; i < palavra.length; i++) {
    const div = document.querySelector(`#wordContainer div:nth-child(${i + 1})`)
    const letter = palavra[i]

    if (resposta.includes(letter)) {
      div.querySelector('p').innerText = letter
    }
  }
}


// wordContainer.innerText = palavraescolhida.length
btnStartGame.addEventListener('click', () => {
  containerStartGame.classList.add('close')


  // Desabilita a letra
  for (let btn of btnLetter) {
    btn.addEventListener('click', () => {
      btn.classList.add('notAgain')

      // Ler a letra
      let letter = btn.innerText

      // Se a letra esta na palavra escolhida
      if (palavra.includes(letter)) {
        actualLetter = letter
        resposta += letter
        console.log('Palavra atual: ' + actualLetter)
        console.log('Resposta atual: ' + resposta)
        console.log('Qtd de letras: ' + qtdChosenLetters)
        updateWordDisplay()
        qtdChosenLetters++

        // Se a resposta é igual a palavra escolhida
        if (qtdChosenLetters === qtdLetrasPalavraEscolhida) {
          alert('Parabêns, você acertou a palavra: ' + palavra.toUpperCase())
          containerStartGame.classList.remove('close')
          startGame.classList.add('close')
          gameOver.classList.remove('close')
        }
      }
      else {
        numAttempts++
      }


      // Chances
      if (numAttempts == 1) {
        head.classList.add('show')
      }

      else if (numAttempts == 2) {
        body.classList.add('show')
      }

      else if (numAttempts == 3) {
        arm1.classList.add('show')
      }

      else if (numAttempts == 4) {
        arm2.classList.add('show')
      }

      else if (numAttempts == 5) {
        leg1.classList.add('show')
      }

      else if (numAttempts >= 6) {
        leg2.classList.add('show')
        containerStartGame.classList.remove('close')
        startGame.classList.add('close')
        gameOver.classList.remove('close')
      }

      attempts.innerText = numAttempts
    })
  }
})

btnGameOver.addEventListener('click', () => {
  containerStartGame.classList.add('close')

  location.reload()
})
