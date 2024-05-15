
let character = JSON.parse(localStorage.getItem("charData"));

document.querySelector("#create-character-button").addEventListener("click", function (e) {
  e.preventDefault();
  const selectedGender = document.querySelector('input[name="gender"]:checked').value;
  const selectedJob = document.getElementById('job').value; // Corrected 'class' to 'job'
  const selectedSkill = document.getElementById('skill').value;
  const selectedBlessing = document.getElementById('passive').value;

  let skillset = [...character.skills, selectedSkill];
  console.log(skillset);
  character.class = selectedJob;
  character.title = "unknown"
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
  character.goddess = selectedBlessing;
  character.display = {
    avatar: imgAvatar,
    charDisplay: imgSrc,
    charHover: imgHover 
  }
  character.baseStats = baseStat;
  character.stats = calc(character.baseStats, character.equippedStats, character.blessingStats);
  console.log(character);
  saveData();
  runLoad("game-modal", "flex");
  characterCreationPanel.style.display = "none";
  nextStory(storyProgress[0]);
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
