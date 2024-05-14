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

    let skillset = [...character.skills, selectedSkill];
    console.log(skillset);
    
    character.skills = skillset;
    console.log(character);
    let setStat = character.stats;
    let setbaseStat = character.baseStats;
    let baseStat = [];
    console.log("1", setbaseStat);
    console.log("2", setStat);
    console.log(`basestat${baseStat}`)

    if (selectedGender === 'male') {
      switch (selectedJob) {
        case 'warrior':
          baseStats = {
            str: 50,  //3
            mgk: 30,  //1
            spd: 40,  //2
            dex: 20,  //0
            res: 40,  //2
            def: 40,  //2
            dur: 70   //5
          }
          character.ultimateSkill = "twinblade assualt"
          baseStat = baseStats;
          break;
        case 'mage':
          baseStats = {
          str: 20,  //0
          mgk: 80,  //6
          spd: 50,  //3
          dex: 30,  //1
          res: 30,  //1
          def: 30,  //1
          dur: 50   //3
          }
          character.ultimateSkill = "Mystic Vine"
          baseStat = baseStats;
          console.log(`basestat${baseStat}`)
          break;
        case 'rogue': 
        baseStats = {
          str: 60,  //4
          mgk: 20,  //0
          spd: 60,  //4
          dex: 40,  //2
          res: 20,  //0
          def: 30,  //1
          dur: 60   //4
        }
        character.ultimateSkill = "Sonic Kick"
        baseStat = baseStats;  
          break;
        case 'tank': 
        baseStats = {
          str: 30,  //1
          mgk: 30,  //1
          spd: 40,  //2
          dex: 30,  //1
          res: 50,  //3
          def: 40,  //2
          dur: 100  //5
        }
        character.ultimateSkill = "Wrath Pulse"
        baseStat = baseStats;
          break;
        
        default:
        
          src = `images/male-warrior.png`;
        baseStats = {
          str: 20,  //0
          mgk: 20,  //0
          spd: 20,  //0
          dex: 20,  //0
          res: 20,  //0
          def: 20,  //0
          dur: 20   //0
        }
          break;
      }
    } else if (selectedGender === 'female') {
      switch (selectedJob) {
        case 'warrior':
          baseStats = {
            str: 40,  //2
            mgk: 40,  //2
            spd: 50,  //3
            dex: 30,  //1
            res: 20,  //1
            def: 40,  //2
            dur: 60   //4
          }
          character.ultimateSkill = "Sword Wheel"
          baseStat = baseStats;
          break;
        case 'mage':
          baseStats = {
            str: 20,  //3
            mgk: 100,  //8
            spd: 40,  //2
            dex: 20,  //0
            res: 20,  //0
            def: 20,  //0
            dur: 40   //2
          }
          character.ultimateSkill = "Explosion"
          baseStat = baseStats;
          break;
        case 'rogue':
          baseStats = {
            str: 40,  //2
            mgk: 20,  //0
            spd: 50,  //3
            dex: 70,  //5
            res: 20,  //0
            def: 30,  //1
            dur: 60   //4
          }
          character.ultimateSkill = "Blicky"
          baseStat = baseStats; 
          break;
        case 'tank':
          baseStats = {
            str: 40,  //2
            mgk: 30,  //1
            spd: 30,  //1
            dex: 20,  //0
            res: 40,  //2
            def: 70,  //5
            dur: 60   //4
          }
          character.ultimateSkill = "Godzilla Breath"
          baseStat = baseStats;
          break;
        default:
          baseStats = {
            str: 20,  //0
            mgk: 20,  //0
            spd: 20,  //0
            dex: 20,  //0
            res: 20,  //0
            def: 20,  //0
            dur: 20   //0
          }
          break;
      }
    }
    let imgSrc = `images/${selectedGender}-${selectedJob}.png`;
    let imgHover = `images/hover-${selectedGender}-${selectedJob}.png`;
    let imgAvatar = 'images/avatar/avatar-f-w.png'

    character.display = {
      avatar: imgAvatar,
      charDisplay: imgSrc,
      charHover: imgHover 
    }
    character.baseStats = baseStat;
    character.stats = calc(character.baseStats, character.equippedStats, character.blessingStats);
    console.log(character);
    saveData();
          
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

const calc = (bas, eqp, bls) => {
  // Creating a new object to avoid mutating the original 'base' object
  let newstat = {
    str: bas.str + eqp.str + bls.str,
    mgk: bas.mgk + eqp.mgk + bls.mgk,
    spd: bas.spd + eqp.spd + bls.spd ,
    dex: bas.dex + eqp.dex + bls.dex ,
    res: bas.res + eqp.res + bls.res ,
    def: bas.def + eqp.def + bls.def ,
    dur: bas.dur + eqp.dur + bls.dur
  };
  
  console.log(newstat);
  
  // Updating the newbase stats
  return newstat;
};   
