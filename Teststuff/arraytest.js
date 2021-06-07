//test code for auto gen. audio elements
//goal: make this * array length with each name and nr
//this: <audio data-key="65" src="Sounds/Extras_soundboard_-_parametre_sounds_bubbles.mp3"></audio>
function makeaudiotags() {
  let pSounds = "Sounds/";
  let tSounds = ".mp3";
  let cNSounds = "Extras_soundboard_-_parametre_sounds_";

  let aSoundN = ["bubbles", "clay", "confetti", "glimmer", "moon", "ufo"];
  let aKeyNR = ["65", "83", "68", "70", "71", "72"];

  for (i = 0; i < aSoundN.length; i++) {
    audio = document.createElement("AUDIO");
    audio.src = pSounds + cNSounds + aSoundN[i] + tSounds;
    audio.dataset.key = aKeyNR[i];
    //console.log(audio); //log output of audio
    //audio.play();  //check if valid audio elements
  }
}
