function playSound(e) {
  // e = event data from keydown and querySelector
  // e.keyCode = keyCode number from querySelector
  let audio;
  let key;
  let vol;
  //console.log(e); //show what is passed from e (event info if keydown number is onclick)
  if (e instanceof KeyboardEvent) {
    //console.log("keyboardEvent"); //show if keyboardEvent in console
    audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  } else {
    //console.log("!keyboardEvent"); //show if not a keyboardEvent in console
    audio = document.querySelector(`audio[data-key="${e}"]`);
    key = document.querySelector(`.key[data-key="${e}"]`);
  }
  //console.log(audio); //show what is passed on from variable "audio" in console (should be audio element if any <div class="key"> clicked (onclick) || key press down)
  if (!audio) return; //stop function from running all together (if not audio element, return. (end function))
  vol = document.querySelector(".slider").value / 100;
  audio.currentTime = 0; //rewind audio track to starth
  audio.volume = vol;
  audio.play();
  key.classList.toggle("playing"); //toggle, makes class "playing" not stuck. (.add would make "playing" stuck on keeping keydown)
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip if it's  not a tranform
  this.classList.remove("playing");
}

function makeListeners() {
  const keys = document.querySelectorAll(".key");
  keys.forEach((key) =>
    key.addEventListener('transitionend', removeTransition)
  );
  window.addEventListener("keydown", playSound);
  document.getElementById("initB").remove();
}
