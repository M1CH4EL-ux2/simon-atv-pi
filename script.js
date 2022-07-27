// Controle de inicialização do jogo
const buttonStart = document.getElementById('start')
const buttonOn = document.getElementById('on')
const buttonStrict = document.getElementById('strict')

//Controles dos botões coloridos
const buttons = document.getElementsByClassName('options');

// 
const response = []
const responsePc = []

let level = 1

const randomPcResponse = () => {
    for(let i = 0; i < level; i++) {
        index = Math.floor(Math.random() * 4)
        idValue = buttons[index].id

        responsePc.push(idValue)
    }
}

// Ao invés disso, crie uma função particular para que cada um brile, use setTimeOut e IF para receber cada blinker
const blinker = () => {
    const blink = responsePc[0]
    document.getElementById(`${blink}`).classList.add('blinkeding')
}

const win = () => {
    console.log('win')
    level++
    start()
}

const loose = () => {
    console.log('You loose')
    level = 1
}

buttons[0].addEventListener('click', () => {
    response.push('topleft')
    blinker()
    if(response.length == level) {
        if(isValid(response, responsePc)) {
            win()
        } else {
            loose()
        }
    }
})

buttons[1].addEventListener('click', () => {
    response.push('topright')
    blinker()
    if(response.length == level) {
        if(isValid(response, responsePc)) {
            win()
        } else {
            loose()
        }
    }
})

buttons[2].addEventListener('click', () => {
    response.push('bottomleft')
    blinker()
    if(response.length == level) {
        if(isValid(response, responsePc)) {
            win()
        } else {
            loose()
        }
    }
})

buttons[3].addEventListener('click', () => {
    response.push('bottomright')
    blinker()
    if(response.length == level) {
        if(isValid(response, responsePc)) {
            win()
        } else {
            loose()
        }
    }
})

const isValid = (responsePlayer, responsePcPlayer) => {
    for(let i = 0; i <= 4; i++){
        if(responsePlayer[i] != undefined || responsePcPlayer[i] != undefined) {
            if(responsePlayer[i] == responsePcPlayer[i]) {
                return true
            } else {
                return false
            }
        }
    }
}

const start = () => {
    randomPcResponse()
    blinker()
}

document.getElementById('start')
    .addEventListener('click', () => {
        start()
    })
