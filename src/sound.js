import { Howl, Howler } from "howler";

// Setup the new Howl.
const sound = new Howl({
  src: ["../assets/sound/general/button.mp3"],
});
// Ensure the sound is loaded before playing
const clickbtn = document.querySelectorAll(".click-btn");
clickbtn.forEach(btn => {
  btn.addEventListener("click", () => {
    // console.log("Button clicked, playing sound");
    sound.play();
  });
});
