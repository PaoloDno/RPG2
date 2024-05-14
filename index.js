window.addEventListener("load", function() {
  console.log("Page loaded!");
  console.log(character)
  if(character === null){
    runLoad("title-screen","flex");
  } else {
    const target = document.querySelector("#title-screen");
    target.style.display = "flex";
  }

//title screen loaded

  const screenMessage = document.querySelector("#screen-message");

  document.querySelector("#createCharacterButton").addEventListener("click", function () {
    const titleScreen = document.querySelector("#title-screen");
    titleScreen.style.display = "none";
    runLoad("goddess-welcome-panel", "flex");
  });

// Check if a character has been created
  if (character && character.created) {

  }else {
    // If no character has been created
    screenMessage.innerHTML = `No load and turorial yet. Straight click "Start New Game"`;
}

  //setting up character stats
  // Submit Name
  document.querySelector("#submit-item-button").addEventListener("click", function (e) {
    e.preventDefault();
    let charName = document.querySelector("#characterNameInput").value;

        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        if (format.test(charName)) {
            document.querySelector("#name-alert").innerHTML = "Your name cannot contain special characters!";
        } else {
            if (charName.length < 3 || charName.length > 15) {
                document.querySelector("#name-alert").innerHTML = "Name should be between 3-15 characters!";
            } else {
            character = {
                name: charName,
                lvl: 1,
                class: null,
                title: null,
                skills: [],
                ultimateSkill: null,
                passive: [],
                blessings: [],
                stats: {
                    str: null,
                    mgk: null,
                    spd: null,
                    dex: null,
                    res: null,
                    def: null,
                    dur: null
                },
                baseStats: {
                  str: 20,
                  mgk: 20,
                  spd: 20,
                  dex: 20,
                  res: 20,
                  def: 20,
                  dur: 30
                },
                equippedStats: {
                  str: 0,
                  mgk: 0,
                  def: 0,
                  spd: 0,
                  dex: 0,
                  res: 0,
                  def: 0,
                  dur: 0
                },
                blessingStats: {
                  str: 0,
                  mgk: 0,
                  def: 0,
                  spd: 0,
                  dex: 0,
                  res: 0,
                  def: 0,
                  dur: 0
                },
                hitpoint: {
                  hp: 100,
                  hpMax: 100
                },
                manapoint: {
                  mana: 100,
                  manaMax: 100
                },
                exp: {
                    expCurr: 0,
                    expMax: 100,
                    expCurrLvl: 0,
                    expMaxLvl: 100,
                    lvlGained: 0
                },
                inventory: {
                    consumables: [],
                    equipment: []
                },
                display: {
                    avatar: "",
                    charDisplay: "",
                    charHover: ""
                },
                equipped: [],
                gold: 0,
                kills: 0,
                inCombat: false
            };
            saveData()
            
            console.log(character)
            const targets = document.querySelector("#goddess-welcome-panel");
            targets.style.display = "none";
            runLoad("characterCreationPanel", "flex");
        }
    }


  });

  document.querySelector("#create-character-button").addEventListener("click", function (e) {
    e.preventDefault();
    const selectedGender = document.querySelector('input[name="gender"]:checked').value;
    const selectedJob = document.getElementById('job').value; // Corrected 'class' to 'job'
    const selectedSkill = document.getElementById('skill').value;
    const selectedPassive = document.getElementById('passive').value;
    const selectedcharacterNameInput = document.getElementById('characterNameInput').value;


    let skillset = [...character.skills, selectedSkill];
    console.log(skillset);
    character.skills = skillset;
    console.log(character);

    if (selectedGender === 'male') {
      switch (selectedJob) {
        case 'warrior':
          src = `images/male-warrior.png`;
          break;
        case 'mage':
          src = `images/male-mage.png`;
          break;
        case 'rogue': 
          src = `images/male-rogue.png`; 
          break;
        case 'tank':
          src = `images/male-tank.png`; 
          break;
        
        default:
        
          src = `images/male-warrior.png`;
          break;
      }
    } else if (selectedGender === 'female') {
      switch (selectedJob) {
        case 'warrior':
          src = `images/female-warrior.png`;
          break;
        case 'mage':
          src = `images/female-mage.png`;
          break;
        case 'rogue': 
          src = `images/female-rogue.png`; 
          break;
        case 'tank':
          src = `images/female-tank.png`; 
          break;
        default:
          src = `images/female-mage.png`;
          break;
      }
    }


  });
});
const runLoad = (id, display) => {
    let loader = document.querySelector("#loader");
    loader.style.display = "flex";
    setTimeout(async () => {
        loader.style.display = "none";
        document.querySelector(`#${id}`).style.display = `${display}`;
    }, 1100);
}

const saveData = () => {
  const charData = JSON.stringify(character);
  localStorage.setItem("charData", charData)
}
/*

the fucking failed trial to initiating values



document.addEventListener('DOMContentLoaded', function() {
  const runLoad = (id, display) => {
    let loader = document.querySelector(".loader");
    loader.style.display = "flex";
    setTimeout(async () => {
        loader.style.display = "none";
        document.querySelector(`#${id}`).style.display = `${display}`;
    }, 1250);
    console.log("RPAPA");
  
  const createCharacterButton = document.getElementById('createCharacterButton');
  const selectedCharacterButton = document.getElementById('selectedCharacterButton');
  createCharacterButton.addEventListener('click', function() {
      // Hide the character creation panel
      runLoad('title-screen', 'none')
      .then(runLoad('characterCreationPanel', 'flex'));
  });
  selectedCharacterButton.addEventListener('click', function() {
    // Hide the character creation panel
    characterCreationPanel.style.display = 'none';
});
}});

const runLoad = (id, display) => {
  let loader = document.querySelector(".loader");
  loader.style.display = "flex";
  setTimeout(async () => {
      loader.style.display = "none";
      document.querySelector(`#${id}`).style.display = `${display}`;
  }, 1250);


  runload('title-screen', 'flex');

window.addEventListener("load", function () {
  if (player === null) {
      runLoad("character-creation", "flex");
  } else {
      let target = document.querySelector("#title-screen");
      target.style.display = "flex";
  }
});

  
};
*/


