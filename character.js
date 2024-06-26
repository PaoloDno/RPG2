
let character = JSON.parse(localStorage.getItem("charData"));

//library for creating characters stats and skills
//UI Display


document.querySelector("#create-character-button").addEventListener("click", function (e) {
  e.preventDefault();
  const selectedGender = document.querySelector('input[name="gender"]:checked').value;
  const selectedJob = document.getElementById('job').value; // Corrected 'class' to 'job'
  const selectedSkill = document.getElementById('skill').value;
  const selectedBlessing = document.getElementById('blessing').value;

  let skillset = [...character.skills, selectedSkill];
  //console.log(skillset);
  character.class = selectedJob;
  character.title = "beginner"
  character.skills = skillset;
  //console.log(character);
  let setStat = character.stats;
  let setbaseStat = character.baseStats;
  let baseStat = [];
  let normalAtk;
  //console.log("1", setbaseStat);
  //console.log("2", setStat);
  //console.log(`basestat${baseStat}`)

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
        character.ultimateSkill = "Twinblade Assualt"
        baseStat = baseStats;
        normalAtk = "Quick Slash";
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
        normalAtk = "Earth Spike";
        break;
      case 'rogue': 
      baseStats = {
        str: 50,  //3
        mgk: 20,  //0
        spd: 70,  //5
        dex: 40,  //2
        res: 20,  //0
        def: 30,  //1
        dur: 60   //4
      }
      character.ultimateSkill = "Sonic Kick"
      baseStat = baseStats;
      normalAtk = "Quick Slash"; 
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
      character.ultimateSkill = "Forbidden Series: Wrath";
      normalAtk = "Shield Wrath";
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
        normalAtk = "Quick Slash";
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
        normalAtk = "Advance Magic: Magic Bullet";
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
        normalAtk = "Knife Stab";
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
        normalAtk = "Shield Attack";
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
  let imgAvatar = `images/avatar/avatar-${selectedGender}-${selectedJob}.png`;
  let imgHoverAvatar = `images/avatar/hover-avatar-${selectedGender}-${selectedJob}.png`;
  character.goddess = selectedBlessing;
  character.display = {
    avatar: imgAvatar,
    avatarHover: imgHoverAvatar,
    charDisplay: imgSrc,
    charHover: imgHover 
  }
  character.normalAtk = normalAtk;
  character.baseStats = baseStat;
  character.stats = calc(character.baseStats, character.equippedStats, character.blessingStats);
  console.log(character);
  saveData();
  runLoad("game-story", "flex");
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

function calcHpMana() {
  let charStatEnd = character.stats.dur;
  let charStatRes = character.stats.res;
  let charStatDef = character.stats.def;
  let charStatStr = character.stats.str;
  let charStatMgk = character.stats.mgk;
  let characterManaFull = 0
  let characterHealthFull = 0;
  characterHealthFull = 50 + (charStatEnd * 10) + (charStatDef * 2) + (charStatRes * 2) + (charStatStr);
  characterManaFull = 40 + (charStatMgk * 10) + (charStatStr * 5);
  
  character.hitpoint.hpMax = characterHealthFull;
  character.manapoint.manaMax = characterManaFull;
  saveData();
}
function initializeHpMana(){
  character.hitpoint.hp = character.hitpoint.hpMax;
  character.manapoint.mana = character.manapoint.manaMax;
  saveData();
}

function NoRepeatingArr() {
  let listedBlessing = character.blessings || [];
  let listedSkills = character.skills || [];
  
  function getUnique(listedArrays){
    if(!Array.isArray(listedArrays)){
      return listedArrays
    }
    let unique = [];
    for(const listedArray of listedArrays){
      if(!unique.includes(listedArray)){
        unique.push(listedArray);
      }
    }
    return unique;
  }
  console.log(getUnique(listedBlessing));
  character.blessings = getUnique(listedBlessing);
  character.skills = getUnique(listedSkills);
}

function todisplayArr(){
  console.log(character);
  let listedBlessing = [];
  let listedSkills = [];
  let listedCompanion = [];
  listedBlessing = character.blessings;
  listedSkills = character.skills;
  listedCompanion = character.companion;
  function ToListInUi(Arrays) {
    let text = "";
    if (!(Arrays.length > 1)) {
      text = `[${Arrays[0]}]`; // Only one item in the array
      return text;
    }
  
    for (let i = 0; i < Arrays.length; i++) {
      if (i === Arrays.length - 1) { 
        text += `[${Arrays[i]}]`; 
      } else {
        text += `[${Arrays[i]}], `;
      }
    }
      return text;
  }
  console.log(character.skills);
  console.log(ToListInUi(listedSkills));
  companionText.innerText = `${ToListInUi(listedCompanion)}`;
  blessingText.innerText = `${ToListInUi(listedBlessing)}`;
  skillSetsText.innerText = `${ToListInUi(listedSkills)}`;
}

function UpdateUIDisplay() {
  
  avatarName.innerText = character.name;
  avatarTitle.innerText = character.title;
  avatarClass.innerText = character.class;
  avatarAttStr.innerText = character.baseStats.str;
  avatarAttMgk.innerText = character.baseStats.mgk;
  avatarAttSpd.innerText = character.baseStats.spd;
  avatarAttDex.innerText = character.baseStats.dex;
  avatarAttDef.innerText = character.baseStats.def;
  avatarAttRes.innerText = character.baseStats.res;
  avatarAttDur.innerText = character.baseStats.dur;
  blessAttStr.innerText = character.blessingStats.str;
  blessAttMgk.innerText = character.blessingStats.mgk;
  blessAttSpd.innerText = character.blessingStats.spd;
  blessAttDex.innerText = character.blessingStats.dex;
  blessAttDef.innerText = character.blessingStats.def;
  blessAttRes.innerText = character.blessingStats.res;
  blessAttDur.innerText = character.blessingStats.dur;
  equipAttStr.innerText = character.equippedStats.str;
  equipAttMgk.innerText = character.equippedStats.mgk;
  equipAttSpd.innerText = character.equippedStats.spd;
  equipAttDex.innerText = character.equippedStats.dex;
  equipAttDef.innerText = character.equippedStats.def;
  equipAttRes.innerText = character.equippedStats.res;
  equipAttDur.innerText = character.equippedStats.dur;
  
  avatarImg.innerHTML = "";
  const CharacterAvatarImg = document.createElement('img');
  let imgsrc = "";
  imgsrc = character.display.avatar;
  console.log(imgsrc);
  CharacterAvatarImg.src = imgsrc;
  CharacterAvatarImg.classList.add('object-fit');
  CharacterAvatarImg.alt = "character avatar img";
  avatarImg.appendChild(CharacterAvatarImg);
  calcHpMana();
  initializeHpMana();
  saveData();
  goldText.innerText = character.gold
  lvlText.innerText = character.lvl;
  hpText.innerText = character.hitpoint.hp;
  hpMaxText.innerText = character.hitpoint.hpMax;
  goldText.innerText = character.gold;
  manaText.innerText = character.manapoint.mana;
  manaMaxText.innerText = character.manapoint.manaMax;
  console.log(character);

  NoRepeatingArr();
  todisplayArr();

}

function checkLvlUp() {

if(character.exp >= character.expToLvl){
  character.lvl += 1;
  character.expToLvl += (90 * 1.1);

  character.baseStats.str = Math.floor((character.baseStats.str * 1.1) + 5);
  character.baseStats.mgk = Math.floor((character.baseStats.mgk * 1.1) + 5);
  character.baseStats.spd = Math.floor((character.baseStats.spd * 1.1) + 5);
  character.baseStats.dex = Math.floor((character.baseStats.dex * 1.1) + 5);
  character.baseStats.def = Math.floor((character.baseStats.def * 1.1) + 5);
  character.baseStats.res = Math.floor((character.baseStats.res * 1.1) + 5);
  character.baseStats.dur = Math.floor((character.baseStats.dur * 1.1) + 5);

  character.blessingStats.str = Math.floor(character.blessingStats.str * 1.05);
  character.blessingStats.mgk = Math.floor(character.blessingStats.mgk * 1.05);
  character.blessingStats.spd = Math.floor(character.blessingStats.spd * 1.05);
  character.blessingStats.dex = Math.floor(character.blessingStats.dex * 1.05);
  character.blessingStats.def = Math.floor(character.blessingStats.def * 1.05);
  character.blessingStats.res = Math.floor(character.blessingStats.res * 1.05);
  character.blessingStats.dur = Math.floor(character.blessingStats.dur * 1.05);

  character.stats = calc(character.baseStats, character.equippedStats, character.blessingStats);

  addNotification("level", `${character.lvl}`);

}



//checkLVL




//improvebaseStat

//lvl 5
//add new skill


//lvl 10


}