document.addEventListener('DOMContentLoaded', () => {
  //Creo las cartas
  const cardArray = [
    {
        name: 'estrella',
        img: '../imagenes/estrella.jpg'
    },
    {
        name: 'vader',
        img: '../imagenes/vader.jpg'
    },
    {
        name: 'halcon',
        img: '../imagenes/halcon.jpg'
    },
    {
        name: 'c3po',
        img: '../imagenes/c3po.jpg'
    },
    {
        name: 'r2d2',
        img: '../imagenes/r2d2.jpg'
    },
    {
        name: 'nave',
        img: '../imagenes/nave.jpg'
    },
    {
        name: 'estrella',
        img: '../imagenes/estrella.jpg'
    },
    {
        name: 'vader',
        img: '../imagenes/vader.jpg'
    },
    {
        name: 'halcon',
        img: '../imagenes/halcon.jpg'
    },
    {
        name: 'c3po',
        img: '../imagenes/c3po.jpg'
    },
    {
        name: 'r2d2',
        img: '../imagenes/r2d2.jpg'
    },
    {
        name: 'nave',
        img: '../imagenes/nave.jpg'
    },
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#resultado')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //Crear el tablero
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', '../imagenes/base.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //Fijarse si las 2 cartas formas una pareja
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', '../imagenes/base.jpg')
      cards[optionTwoId].setAttribute('src', '../imagenes/base.jpg')
      alert('Hiciste click en la misma imagen')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Encontraste una pareja')
      cards[optionOneId].setAttribute('src', '../imagenes/vacio.jpg')
      cards[optionTwoId].setAttribute('src', '../imagenes/vacio.jpg')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', '../imagenes/base.jpg')
      cards[optionTwoId].setAttribute('src', '../imagenes/base.jpg')
      alert('Intentalo otra vez')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Felicidades, encontraste todas las parejas'
    }
  }

  //Dar vuelta la cartita
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})