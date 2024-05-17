let combat = JSON.parse(localStorage.getItem("combatData"));

let monsterNames = [
  'goblin', 'goblin shaman', 'hob goblin'
];

function StartExploring() {
  
  //initialize combat
  if(combat === null){
    combat = {
      currentFloor: 0,
      party: [],
      monster: [],
      partyStats: {
        lvl: [],
        hitpoint: [],
        manapoint: [],
        str: [],
        mgk: [],
        spd: [],
        dex: [],
        def: [],
        res: [],
        dur: [],
      },
      monstersStats: {
        lvl: [],
        hitpoint: [],
        manapoint: [],
        str: [],
        mgk: [],
        spd: [],
        dex: [],
        def: [],
        res: [],
        dur: [],
      },
      roundIndex: 0,
      floor: 12,
      section: 1,
    };
  } else {

    combat.monster = [];
    combat.monstersStats.lvl = [];
    combat.monstersStats.hitpoint = [];
    combat.monstersStats.manapoint = [];
    combat.monstersStats.str = [];
    combat.monstersStats.mgk = [];
    combat.monstersStats.spd = [];
    combat.monstersStats.dex = [];
    combat.monstersStats.def = [];
    combat.monstersStats.res = [];
    combat.monstersStats.dur = [];
  
  } 
  
    
  saveCombatData(); // Save initial combat data
  
  InitializeCombat(combat.floor);
};

function InitializeCombat(floor) {
  let RandomNumberOfMonster = Math.floor(Math.random() * (15 * floor));
  console.log(RandomNumberOfMonster);
  let numberOfMonster = 0;
  
  if (RandomNumberOfMonster <= 50) {
    numberOfMonster = 1;
  } else if (RandomNumberOfMonster <= 90) {
    numberOfMonster = 2;
  } else {
    numberOfMonster = 3;
  }
  console.log(numberOfMonster);

  // Example of how you might set monster stats (this is just a placeholder)
  for (let i = 0; i < numberOfMonster; i++) {
    
    let selectedEnemyName = monsterNames[Math.floor(Math.random() * monsterNames.length)];
    let monster = initializeMonster(selectedEnemyName, combat.floor, combat.section);
    combat.monster.push(`${selectedEnemyName} ${i + 1}`);
    combat.monstersStats.hitpoint.push(monster.hitpoint);
    combat.monstersStats.manapoint.push(monster.manapoint);
    combat.monstersStats.lvl.push(monster.lvl);
    combat.monstersStats.str.push(monster.stats.str);
    combat.monstersStats.mgk.push(monster.stats.mgk);
    combat.monstersStats.spd.push(monster.stats.spd);
    combat.monstersStats.dex.push(monster.stats.dex);
    combat.monstersStats.def.push(monster.stats.def);
    combat.monstersStats.res.push(monster.stats.res);
    combat.monstersStats.dur.push(monster.stats.dur);
    // Add other stats similarly
  }
  console.log(combat);
  saveCombatData(); // Save updated combat data
}

const saveCombatData = () => {
  const combatData = JSON.stringify(combat);
  localStorage.setItem("combatData", combatData);
}

// Example usage
//StartExploring();

