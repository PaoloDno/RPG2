
const gameModal = document.querySelector("#game-modal");
const gameNotif = document.querySelector("#game-notif");
const notifButton = document.querySelector("#button-notif");
const notifTitle = document.querySelector("#notif-title");
const curtain = document.querySelector("#curtain");

let storyProgress = [
  {
    storyTitle: "Prolouge",
    storyText: "The goddess seems to laugh at ur fate",
    buttonText: "(☉_☉)",
    buttonFunc: progress2,
    bgimg: './images/misc/goddess2.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: "The goddess also giving you one legendary item you bring to the new world!",
    buttonText: "I choose YOU",
    buttonFunc: progress3,
    bgimg: './images/misc/goddess3.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: "*continously laugh hysterically at your face",
    buttonText: "...",
    buttonFunc: progress4,
    bgimg: './images/misc/goddess3.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: `"because im such a good and benevolent god you are to be given one legendary item to take in your next life..`,
    buttonText: "...",
    buttonFunc: progress5,
    bgimg: './images/misc/goddess3.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: `"You can pick any legendary item you want since you'll bla.. bla.. bla.."`,
    buttonText: "... I.. I choose you",
    buttonFunc: progress6,
    bgimg: './images/misc/goddess5.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: `"No way that can work thats not allowed.. probably.."`,
    buttonText: "...",
    buttonFunc: progress7,
    bgimg: './images/misc/goddess5.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: `"Aaaahhhh"`,
    buttonText: "...",
    buttonFunc: progress8,
    bgimg: './images/misc/goddess6.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: `You have been reincarnated`,
    buttonText: "...",
    buttonFunc: progress9,
    bgimg: './images/misc/goddess6.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: `Aqua has been added to your party`,
    buttonText: "...",
    buttonFunc: progress10,
    bgimg: './images/misc/goddess4.jpg'
  },
  {
    storyTitle: "Prolouge",
    storyText: `You are being granted a blessing`,
    buttonText: "...",
    buttonFunc: closeStory,
    bgimg: './images/misc/goddess4.jpg'
  }
]

function nextStory(storyProgress) {
  console.log("story progressing")
  loadStory();
  gameModal.style.backgroundImage = `url("${storyProgress.bgimg}"`;
  notifButton.innerText = storyProgress.buttonText;
  notifButton.onclick = storyProgress.buttonFunc;
  notifTitle.innerText = storyProgress.storyTitle;
  gameNotif.innerText = storyProgress.storyText;
}
function loadStory() {
  curtain.style.display = "flex";
  setTimeout(async () => {
    curtain.style.display = "none";
}, 1100);
}


function progress2() {
  nextStory(storyProgress[2]);
}
function progress3() {
  nextStory(storyProgress[3]);
}
function progress4() {
  nextStory(storyProgress[3]);
}
function progress5() {
  nextStory(storyProgress[4]);
}
function progress6() {
  nextStory(storyProgress[5]);
}
function progress7() {
  nextStory(storyProgress[6]);
}
function progress8() {
  nextStory(storyProgress[7]);
}
function progress9() {
  nextStory(storyProgress[8]);
}
function progress9() {
  nextStory(storyProgress[8]);
}



function progress10() {
  console.log("you are receiving a blessing");
  loadStory();
  let choosenBlessing = character.goddess;
  let godimg = ''; // Initialize godimg here
  
  switch (choosenBlessing) {
    case 'fire-blessing':
      godimg = `#ac120d`;
      gameNotif.innerText = "The GOD of Fire is burning with passion";
      recievedBlessing = FireBlessing(recievedBlessing); 
      
      break;
    case 'wind-blessing':
      godimg = `#9ac6ee`;
      gameNotif.innerText = "The GOD of Wind is thrilled for your journey";
      recievedBlessing = WindBlessing(recievedBlessing); // Pass the receivedBlessing object
      
      break;
    case 'earth-blessing':
      godimg = `#9ee74a`;
      gameNotif.innerText = "The GOD of Earth is worried for your safety";
      recievedBlessing = EarthBlessing(recievedBlessing); // Pass the receivedBlessing object
      break;
    case 'water-blessing':
      godimg = `#2c68c2`;
      gameNotif.innerText = "The GOD of Water is not in his realm right now";
      recievedBlessing = WaterBlessing(recievedBlessing); // Pass the receivedBlessing object
      break;
    default:
      godimg = `#2c68c2`;
      break;
  }

  console.log("Receive blessing", recievedBlessing);
  
  gameModal.style.backgroundImage = "none";
  gameModal.style.backgroundColor = `${godimg}`;
  notifButton.onclick = closeStory;
  notifTitle.innerText = "Prologue";
  gameNotif.innerText += ` you receive a ${recievedBlessing.name}`;
  character.blessings.push(recievedBlessing.name);
  character.blessingStats.str += recievedBlessing.attributes.str;
  character.blessingStats.mgk += recievedBlessing.attributes.mgk;
  character.blessingStats.spd += recievedBlessing.attributes.spd;
  character.blessingStats.dex += recievedBlessing.attributes.dex;
  character.blessingStats.def += recievedBlessing.attributes.def;
  character.blessingStats.res += recievedBlessing.attributes.res;
  character.blessingStats.dur += recievedBlessing.attributes.dur;
  console.log(character);
}

function closeStory() {

  gameModal.style.display = "none";
}

