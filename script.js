//your JS code here. If required.
window.addEventListener('keydown', function(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return; 

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