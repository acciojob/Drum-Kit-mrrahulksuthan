//your JS code here. If required.


const keySounds = {
  65: 'C:\Users\rahul\Downloads\thunder-25689.mp3', 
  83: 'sounds/sound2.mp3', 
  68: 'sounds/sound3.mp3', 
  70: 'sounds/sound4.mp3', 
  71: 'sounds/sound5.mp3', 
  72: 'sounds/sound6.mp3', 
  74: 'sounds/sound7.mp3', 
  75: 'sounds/sound8.mp3', 
  76: 'sounds/sound9.mp3'  
};

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const audioBuffers = {};
const loadSounds = async () => {
  const keys = Object.keys(keySounds);
  for (let i = 0; i < keys.length; i++) {
    const keyCode = keys[i];
    const soundPath = keySounds[keyCode];

    const response = await fetch(soundPath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

    audioBuffers[keyCode] = audioBuffer;
  }
};
loadSounds();

const playSound = keyCode => {
  const audioBuffer = audioBuffers[keyCode];

  if (!audioBuffer) return;

  const source = audioContext.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioContext.destination);
  source.start(0);
};

window.addEventListener('keydown', event => {
  const keyCode = event.keyCode;
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!key) return; 

  playSound(keyCode);

  key.classList.add('active'); 
});

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('active');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});

