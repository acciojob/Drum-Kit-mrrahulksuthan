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

window.addEventListener('keydown', function(event) {
  const audioPath = keySounds[event.keyCode];
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audioPath || !key) 

  const audio = new Audio(audioPath); 
  audio.currentTime = 0; 
  audio.play(); 

  key.classList.add('active'); 
});

function removeTransition(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('active');
}

const keys = document.querySelectorAll('.key');
keys.forEach(function(key) {
  key.addEventListener('transitionend', removeTransition);
});
