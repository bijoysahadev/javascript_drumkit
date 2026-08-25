window.addEventListener ('keydown',function(e){
  console.log(e.keyCode);
  const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key=document.querySelector(`.key[data-key="${e.keyCode}"]`)
  console.log(audio);
  if(!audio)return;  //stop the function from running all together
  audio.currentTime = 0 ;//rewrite to start to play over and over again
  audio.play();
  console.log(key);
  key.classList.add("playing");
  function removeTransition (e) {
    // console.log(e);
    if (e.propertyName !=='transform' ) return; //skip it if its not a fucntion
    console.log(e.propertyName);
    this.classList.remove('playing');
    
  }
  const keys =this.document.querySelectorAll('.key')
  keys.forEach(key =>key.addEventListener('transitionend',removeTransition) )
},)
