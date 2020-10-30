function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`INPUT[data-key="${e.keyCode}"]`)

    if (!audio) {
        return
    }

    key.classList.add('clicked')
    audio.currentTime = 0
    audio.play()
}

function playSoundClick(e) {
    const audio = document.querySelector(`audio[data-key="${e}"]`)
    const key = document.querySelector(`INPUT[data-key="${e}"]`)

    if (!audio) {
        return
    }

    key.classList.add('clicked')
    audio.currentTime = 0
    audio.play()
}

function removeTransition(e) {
    e.target.classList.remove('clicked')
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
addEventListener('keydown', playSound)
