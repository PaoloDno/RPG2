const gameModal = document.querySelector("#game-modal");
const gameNotif = document.querySelector("#game-notif");
const notifButton = document.querySelector("#game-notif");
const notifTitle = document.querySelector("#game-notif");
const curtain = document.querySelector("#curtain");

let storyProgress = [
  {
    storyTitle: "Prolouge",
    storyText: "The goddess seems to laugh at ur faith",
    buttonText: "(☉_☉)",
    "buttonFunct": progress2,
    bgimg: './images/misc/goddess2.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: "The goddess also giving you one legendary item you bring to the new world!",
    buttonText: "I choose YOU",
    "buttonFunct": progress3,
    bgimg: './images/misc/goddess2.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: "...",
    buttonText: "...",
    "buttonFunc": closeStory,
    bgimg: './images/misc/goddess2.jpg'
  }
]

export function nextStory(storyProgress) {
  console.log("story progressing")
  loadStory();
  gameModal.style.backgroundImage = `url("${storyProgress.bgimg}"`;
  notifButton.innerText = storyProgress.buttonText;
  notifButton.onclick = storyProgress["buttonFunc"];
}
function loadStory() {
  curtain.style.display = "flex";
  setTimeout(async () => {
    curtain.style.display = "none";
}, 1100);
}

function progress2() {

  nextStory(storyProgress[1]);
}
function progress3() {
  nextStory(storyProgress[2]);
}
function closeStory() {
  gameModal.style.display = "none";
}