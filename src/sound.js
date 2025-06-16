import { Howl, Howler } from "howler";

// Setup the new Howl.
const sound = new Howl({
  src: ["../assets/sound/general/button.mp3"],
});
// Ensure the sound is loaded before playing
const clickbtn = document.querySelectorAll(".click-btn");
clickbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    // console.log("Button clicked, playing sound");
    sound.play();
  });
});

let isMuted = false;
let previousVolume = 1.0;

function toggleMute() {
  const muteButton = document.getElementById("muteButton");

  if (isMuted) {
    // Unmute
    Howler.volume(previousVolume);
    muteButton.classList.remove("muted");
    isMuted = false;
  } else {
    // Mute
    previousVolume = Howler.volume();
    Howler.volume(0);
    muteButton.classList.add("muted");
    isMuted = true;
  }
}

// Set up the button click handler
document.getElementById("muteButton").addEventListener("click", toggleMute);
