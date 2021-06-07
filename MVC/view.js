updateview();
function updateview() {
  let html;
  html = `
    <div class="slidecontainer">
        <input type="range" min="0" max="100" value="20" class="slider" id="volumRange">
        </br>
        <button id="initB" onclick="makeListeners()">Keybinding and Transition graphics</button>
        </div>
    <div class="keys">
        <div data-key="65" class="key" onclick="playSound('65')">
            <kbd>A</kbd>
            <span class="sound">Bubbles</span>
        </div>
        <div data-key="83" class="key" onclick="playSound('83')">
            <kbd>S</kbd>
            <span class="sound">Clay</span>
        </div>
        <div data-key="68" class="key" onclick="playSound('68')">
            <kbd>D</kbd>
            <span class="sound">Confetti</span>
        </div>
        <div data-key="70" class="key" onclick="playSound('70')">
            <kbd>F</kbd>
            <span class="sound">Glimmer</span>
        </div>
        <div data-key="71" class="key" onclick="playSound('71')">
            <kbd>G</kbd>
            <span class="sound">Moon</span>
        </div>
        <div data-key="72" class="key" onclick="playSound('72')">
            <kbd>H</kbd>
            <span class="sound">Ufo</span>
        </div>
    </div>
        <audio data-key="65" src="Sounds/Extras_soundboard_-_parametre_sounds_bubbles.mp3"></audio>
        <audio data-key="83" src="Sounds/Extras_soundboard_-_parametre_sounds_clay.mp3"></audio>
        <audio data-key="68" src="Sounds/Extras_soundboard_-_parametre_sounds_confetti.mp3"></audio>
        <audio data-key="70" src="Sounds/Extras_soundboard_-_parametre_sounds_glimmer.mp3"></audio>
        <audio data-key="71" src="Sounds/Extras_soundboard_-_parametre_sounds_moon.mp3"></audio>
        <audio data-key="72" src="Sounds/Extras_soundboard_-_parametre_sounds_ufo.mp3"></audio>
    `;
  app.innerHTML = html;
}
