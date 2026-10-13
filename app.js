// Nichuu ❤️ Ashii — Romantic Music

let audioCtx;
let musicTimer;
let musicPlaying = false;
let noteIndex = 0;

const melody = [
  523.25, 659.25, 783.99, 659.25,
  587.33, 698.46, 880.00, 698.46,
  523.25, 659.25, 783.99, 1046.50,
  880.00, 783.99, 659.25, 587.33
];

function playRomanticMusic() {
  if (musicPlaying) {
    stopRomanticMusic();
    return;
  }

  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  audioCtx.resume();

  musicPlaying = true;
  noteIndex = 0;

  const button = document.getElementById("musicButton");
  if (button) button.textContent = "⏸ Stop Romantic Music";

  function playNote() {
    if (!musicPlaying || !audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.value = melody[noteIndex % melody.length];

    gain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.12,
      audioCtx.currentTime + 0.08
    );
    gain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioCtx.currentTime + 0.65
    );

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.7);

    noteIndex++;
  }

  playNote();
  musicTimer = setInterval(playNote, 500);
}

function stopRomanticMusic() {
  musicPlaying = false;
  clearInterval(musicTimer);

  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }

  const button = document.getElementById("musicButton");
  if (button) button.textContent = "🎵 Play Romantic Music ❤️";
}
// Unlock the birthday surprise
document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("open");
  const content = document.getElementById("content");

  if (openButton && content) {
    openButton.addEventListener("click", function () {
      content.classList.remove("hidden");
      content.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }
});
