let combat = JSON.parse(localStorage.getItem("combatData"));

let monsterNames = [
  'goblin', 'goblin shaman', 'hob goblin'
];

function StartExploring() {
  
  //initialize combat
  if(combat === null){
    combat = {
      currentFloor: 0,
      inBattle: [],
      party: [],
      monster: [],
      partyStats: {
        lvl: [],
        hitpoint: [],
        hitpointMax: [],
        manapoint: [],
        manapointMax: [],
        str: [],
        mgk: [],
        spd: [],
        dex: [],
        def: [],
        res: [],
        dur: [],
        imgs: []
      },
      monstersStats: {
        lvl: [],
        hitpoint: [],
        hitpointMax: [],
        manapoint: [],
        manapointMax: [],
        str: [],
        mgk: [],
        spd: [],
        dex: [],
        def: [],
        res: [],
        dur: [],
        imgs: []
      },
      roundIndex: [],
      floor: 1,
      section: 1,
    };
  } else {

    combat.monster = [];
    combat.monstersStats.lvl = [];
    combat.monstersStats.hitpoint = [];
    combat.monstersStats.manapoint = [];
    combat.monstersStats.hitpointMax = [];
    combat.monstersStats.manapointMax = [];
    combat.monstersStats.str = [];
    combat.monstersStats.mgk = [];
    combat.monstersStats.spd = [];
    combat.monstersStats.dex = [];
    combat.monstersStats.def = [];
    combat.monstersStats.res = [];
    combat.monstersStats.dur = [];
    combat.monstersStats.imgs = [];
    
    
    combat.party = [];
    combat.partyStats.lvl = [];
    combat.partyStats.hitpoint = [];
    combat.partyStats.manapoint = [];
    combat.partyStats.hitpointMax = [];
    combat.partyStats.manapointMax = [];
    combat.partyStats.str = [];
    combat.partyStats.mgk = [];
    combat.partyStats.spd = [];
    combat.partyStats.dex = [];
    combat.partyStats.def = [];
    combat.partyStats.res = [];
    combat.partyStats.dur = [];
    combat.partyStats.imgs = [];

    combat.floor = 1;
    combat.section = 1;
    combat.inBattle = [];
    combat.roundIndex = [];
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
    combat.monster.push(`${selectedEnemyName} Lvl: ${monster.lvl}`);
    combat.monstersStats.hitpoint.push(monster.hitpoint);
    combat.monstersStats.manapoint.push(monster.manapoint);
    combat.monstersStats.hitpointMax.push(monster.hitpointMax);
    combat.monstersStats.manapointMax.push(monster.manapointMax);
    combat.monstersStats.lvl.push(monster.lvl);
    combat.monstersStats.str.push(monster.stats.str);
    combat.monstersStats.mgk.push(monster.stats.mgk);
    combat.monstersStats.spd.push(monster.stats.spd);
    combat.monstersStats.dex.push(monster.stats.dex);
    combat.monstersStats.def.push(monster.stats.def);
    combat.monstersStats.res.push(monster.stats.res);
    combat.monstersStats.dur.push(monster.stats.dur);
    combat.monstersStats.imgs.push(monster.img);
    // Add other stats similarly
  }
  console.log(combat);

  //party

  combat.party.push(character.name);
  combat.partyStats.hitpoint.push(character.hitpoint.hp);
  combat.partyStats.manapoint.push(character.manapoint.mana);
  combat.partyStats.hitpointMax.push(character.hitpoint.hpMax);
  combat.partyStats.manapointMax.push(character.manapoint.manaMax);
  combat.partyStats.lvl.push(character.lvl);
  combat.partyStats.str.push(character.stats.str);
  combat.partyStats.mgk.push(character.stats.mgk);
  combat.partyStats.spd.push(character.stats.spd);
  combat.partyStats.dex.push(character.stats.dex);
  combat.partyStats.def.push(character.stats.def);
  combat.partyStats.res.push(character.stats.res);
  combat.partyStats.dur.push(character.stats.dur);
  combat.partyStats.imgs.push(character.display.avatarHover);

  console.log(character);
  console.log(combat);

  for (let i = 0; i < character.companion.length; i++) {
  
  let companionName = character.companion[i]
  let companion = initializeCompany(companionName, character.lvl);
  combat.party.push(companionName);
  combat.partyStats.hitpoint.push(companion.hitpoint);
  combat.partyStats.manapoint.push(companion.manapoint);
  combat.partyStats.hitpointMax.push(companion.hitpointMax);
  combat.partyStats.manapointMax.push(companion.manapointMax);
  combat.partyStats.lvl.push(companion.lvl);
  combat.partyStats.str.push(companion.stats.str);
  combat.partyStats.mgk.push(companion.stats.mgk);
  combat.partyStats.spd.push(companion.stats.spd);
  combat.partyStats.dex.push(companion.stats.dex);
  combat.partyStats.def.push(companion.stats.def);
  combat.partyStats.res.push(companion.stats.res);
  combat.partyStats.dur.push(companion.stats.dur);
  combat.partyStats.imgs.push(companion.img);
  }
  
  console.log(combat);
  combat.inBattle = [...combat.party, ...combat.monster];
  saveCombatData(); // Save updated combat data
  
  initializeBattleDisplay();
}

const saveCombatData = () => {
  const combatData = JSON.stringify(combat);
  localStorage.setItem("combatData", combatData);
}

// Example usage
//StartExploring();

