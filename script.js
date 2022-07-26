const buttons = document.getElementsByClassName('options');
const response = []
const responsePc = []

let level = 1

const start

const randomPcResponse = () => {
    for(let i = 0; i < level; i++) {
        index = Math.floor(Math.random() * 4)
        idValue = buttons[index].id

        responsePc.push(idValue)
        console.log(responsePc)
    }
}

const blinker = () => {
    const blink = responsePc[0]
    document.getElementById(`${blink}`).classList.add('blinkeding')
}

const win = () => {
    console.log('win')
    level++
}

const loose = () => {
    console.log('You loose')
    level = 1
}

randomPcResponse()

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

blinker()