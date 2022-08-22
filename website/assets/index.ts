import MediaPlayer from "@sugheiry/mediaplayer";
import AutoPlay from "@sugheiry/mediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@sugheiry/mediaplayer/lib/plugins/AutoPause";
import Ads from "@sugheiry/mediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");
const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const playButton: HTMLElement | null = document.querySelector("#playButton");
if (playButton) {
  playButton.onclick = () => player.togglePlay();
}
const muteButton: HTMLElement | null = document.querySelector("#muteButton");
if (muteButton) {
  muteButton.onclick = () => {
    if (player.media.muted) {
      player.unmute();
    } else {
      player.mute();
    }
  };
}

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("/sw.js").catch((error) => {
//     console.log(error.message);
//   });
// }