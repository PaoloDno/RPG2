


// Function to calculate monster level
function calculateMonsterLVL(floor, section) {
  return Math.floor(Math.random() * (floor * 2) * (section * 1));
}

// Function to apply multiplier to stats
function applyMultiplier(stat, multiplier) {
  return Math.floor(stat * multiplier);
}

// Function to initialize a monster
function initializeMonster(name, floor, section) {
  let lvl = calculateMonsterLVL(floor, section);
  let multiplier = 1 + (lvl * 0.1); //multiplier based on level

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
    skills: []
  };

  switch (name) {
      case 'goblin':
          baseStats = {
              str: applyMultiplier(30, multiplier),
              mgk: applyMultiplier(20, multiplier),
              spd: applyMultiplier(40, multiplier),
              dex: applyMultiplier(20, multiplier),
              def: applyMultiplier(20, multiplier),
              res: applyMultiplier(20, multiplier),
              dur: applyMultiplier(50, multiplier)
          };
          skills = ["clubbing"];
          break;
      case 'goblin shaman':
          baseStats = {
              str: applyMultiplier(10, multiplier),
              mgk: applyMultiplier(50, multiplier),
              spd: applyMultiplier(30, multiplier),
              dex: applyMultiplier(20, multiplier),
              def: applyMultiplier(20, multiplier),
              res: applyMultiplier(40, multiplier),
              dur: applyMultiplier(20, multiplier)
          };
          skills = ["clubbing", "dark ball"];
          break;
      case 'hob goblin':
          baseStats = {
              str: applyMultiplier(60, multiplier),
              mgk: applyMultiplier(20, multiplier),
              spd: applyMultiplier(50, multiplier),
              dex: applyMultiplier(30, multiplier),
              def: applyMultiplier(40, multiplier),
              res: applyMultiplier(40, multiplier),
              dur: applyMultiplier(60, multiplier)
          };
          skills = ["trashing", "heavy smash"];
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

  return monster;
}

// Example usage
//let floor = 1;
//let section = 1;
//let selectedEnemyName = monsterNames[Math.floor(Math.random() * monsterNames.length)];  
//initializeMonster(selectedEnemyName, floor, section);
