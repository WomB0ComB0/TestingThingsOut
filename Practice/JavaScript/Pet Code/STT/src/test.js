import { synthesis } from 'simple-speech'
import { recognition } from 'simple-speech'
const startButton = document.querySelector('#startBtn')

startButton.addEventListener('click', () =>
  recognition
    .listen()
    .then(msg => console.log(`You said: ${msg}`))
)