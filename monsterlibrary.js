//calculateMonsterLVL, applyMultiplier, initializeMonster;


// Function to calculate monster level
function calculateMonsterLVL(floor, section) {
  return Math.floor(Math.random() * (floor * section) );
}

// Function to apply multiplier to stats
function applyMultiplier(stat, multiplier) {
  return Math.floor(stat * multiplier);
}

// Function to initialize a monster
function initializeMonster(name, floor, section) {
  let lvl = calculateMonsterLVL(floor, section);
  let multiplier = 1 + (lvl * 0.1); //multiplier based on level
  let imgs;
  let baseStats;
  let skills;

  let monster = {
    name: "",
    lvl: 0,
    hitpoint: 0,
    manapoint: 0,
    hitpointMax: 0,
    manapointMax: 0,
    stats: {
        str: null,
        mgk: null,
        spd: null,
        dex: null,
        def: null,
        res: null,
        dur: null
    },
    skills: [],
    img: ""
  };

  switch (name) {
      case 'Goblin':
          baseStats = {
              str: applyMultiplier(30, multiplier),
              mgk: applyMultiplier(20, multiplier),
              spd: applyMultiplier(40, multiplier),
              dex: applyMultiplier(20, multiplier),
              def: applyMultiplier(20, multiplier),
              res: applyMultiplier(20, multiplier),
              dur: applyMultiplier(50, multiplier)
          };
          skills = ["Clubbing", "Goblin Time"];
          imgs = "./images/battleImgs/goblin.png";
          break;
      case 'Goblin Shaman':
          baseStats = {
              str: applyMultiplier(10, multiplier),
              mgk: applyMultiplier(50, multiplier),
              spd: applyMultiplier(30, multiplier),
              dex: applyMultiplier(20, multiplier),
              def: applyMultiplier(20, multiplier),
              res: applyMultiplier(40, multiplier),
              dur: applyMultiplier(20, multiplier)
          };
          skills = ["Clubbing", "Dark Ball"];
          imgs = "./images/battleImgs/goblinShaman.png";
          break;
      case 'Hob Goblin':
          baseStats = {
              str: applyMultiplier(60, multiplier),
              mgk: applyMultiplier(20, multiplier),
              spd: applyMultiplier(50, multiplier),
              dex: applyMultiplier(30, multiplier),
              def: applyMultiplier(40, multiplier),
              res: applyMultiplier(40, multiplier),
              dur: applyMultiplier(60, multiplier)
          };
          skills = ["Trashing", "Heavy Smash"];
          imgs = "./images/battleImgs/goblinHob.png";
          break;
      default:
          throw new Error('Unknown monster type');
  }

  // Calculate hitpoints and manapoints based on stats
  let hitpoint = ( baseStats.dur * 10 ) + ( baseStats.res * 5 ) + ( baseStats.def * 5 );
  let manapoint = ( baseStats.mgk * 10) + ( baseStats.str * 5 );

  // Assign values to the monster object
  monster.name = name;
  monster.lvl = lvl;
  monster.hitpoint = hitpoint;
  monster.manapoint = manapoint;
  monster.hitpointMax = hitpoint;
  monster.manapointMax = manapoint;
  monster.stats = baseStats;
  monster.skills = skills;
  monster.img = imgs;
  return monster;
}

const monstersSkillLibrary = [
  {
      name: "Goblin",
      offensiveSkills: ["Clubbing", "Goblin Time"],
      defensiveSkills: [],
      display: {
          avatar: "./images/battleImgs/goblin.png",
          display: "./images/battleImgs/goblin.png"
      }
  },
  {
    name: "Goblin Shaman",
    offensiveSkills: ["Clubbing", "Dark Ball"],
    defensiveSkills: ["Heal"],
    display: {
        avatar: "./images/battleImgs/goblinShaman.png",
        display: "./images/battleImgs/goblinShaman.png"
    }
  },
  {
    name: "Hob Goblin",
    offensiveSkills: ["Trashing", "Heavy Smash"],
    defensiveSkills: ["Heal"],
    display: {
        avatar: "./images/battleImgs/goblinHob.png",
        display: "./images/battleImgs/goblinHob.png"
    }
  },
]