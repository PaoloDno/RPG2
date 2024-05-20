//useSkillonATarget

function useSkillOnATarget(Skill, UserIndex, TargetIndex, Side, Type){
  let textDexription = [];
  let user = {};

  user = {
    username: "",
    hitpoint: 0,
    manapoint: 0,
    hitpointMax: 0,
    manapointMax: 0,
    skillName: "",
    UserIndex: UserIndex,
    side: '',
    str: 0,
    mgk: 0,
    spd: 0,
    dex: 0,
    def: 0,
    res: 0,
    dur: 0,
  };

  let target = {}
  target = {
    targetName: "",
    hitpoint: 0,
    manapoint: 0,
    hitpointMax: 0,
    manapointMax: 0,
    targetIndex: TargetIndex,
    str: 0,
    mgk: 0,
    spd: 0,
    dex: 0,
    def: 0,
    res: 0,
    dur: 0,
  };
  
  //no need to put in function this is only palce ill use this
  if(Side == "monster" && Type == "damage"){
    user.username = combat.monster[UserIndex];
    target.targetName = combat.party[TargetIndex];

    user.hitpoint = combat.monstersStats.hitpoint[UserIndex];
    user.manapoint = combat.monstersStats.manapoint[UserIndex];
    user.hitpointMax = combat.monstersStats.hitpointMax[UserIndex];
    user.manapointMax = combat.monstersStats.manapointMax[UserIndex];
    user.str = combat.monstersStats.str[UserIndex];
    user.mgk = combat.monstersStats.mgk[UserIndex];
    user.spd = combat.monstersStats.spd[UserIndex];
    user.dex = combat.monstersStats.dex[UserIndex];
    user.def = combat.monstersStats.def[UserIndex];
    user.res = combat.monstersStats.res[UserIndex];
    user.dur = combat.monstersStats.dur[UserIndex];

    target.hitpoint = combat.partyStats.hitpoint[TargetIndex];
    target.manapoint = combat.partyStats.manapoint[TargetIndex];
    target.hitpointMax = combat.partyStats.hitpointMax[TargetIndex];
    target.manapointMax = combat.partyStats.manapointMax[TargetIndex];
    target.str = combat.partyStats.str[TargetIndex];
    target.mgk = combat.partyStats.mgk[TargetIndex];
    target.spd = combat.partyStats.spd[TargetIndex];
    target.dex = combat.partyStats.dex[TargetIndex];
    target.def = combat.partyStats.def[TargetIndex];
    target.res = combat.partyStats.res[TargetIndex];
    target.dur = combat.partyStats.dur[TargetIndex];

    console.log("YAS")

  } else if(Side == "monster" && Type == "buff") {

    user.username = combat.monster[UserIndex];
    target.targetName = combat.monster[TargetIndex];

    user.hitpoint = combat.monstersStats.hitpoint[UserIndex];
    user.manapoint = combat.monstersStats.manapoint[UserIndex];
    user.hitpointMax = combat.monstersStats.hitpointMax[UserIndex];
    user.manapointMax = combat.monstersStats.manapointMax[UserIndex];
    user.str = combat.monstersStats.str[UserIndex];
    user.mgk = combat.monstersStats.mgk[UserIndex];
    user.spd = combat.monstersStats.spd[UserIndex];
    user.dex = combat.monstersStats.dex[UserIndex];
    user.def = combat.monstersStats.def[UserIndex];
    user.res = combat.monstersStats.res[UserIndex];
    user.dur = combat.monstersStats.dur[UserIndex];

    target.hitpoint = combat.monstersStats.hitpoint[TargetIndex];
    target.manapoint = combat.monstersStats.manapoint[TargetIndex];
    target.hitpointMax = combat.monstersStats.hitpointMax[TargetIndex];
    target.manapointMax = combat.monstersStats.manapointMax[TargetIndex];
    target.str = combat.monstersStats.str[TargetIndex];
    target.mgk = combat.monstersStats.mgk[TargetIndex];
    target.spd = combat.monstersStats.spd[TargetIndex];
    target.dex = combat.monstersStats.dex[TargetIndex];
    target.def = combat.monstersStats.def[TargetIndex];
    target.res = combat.monstersStats.res[TargetIndex];
    target.dur = combat.monstersStats.dur[TargetIndex];

    console.log("YASS")

  } else if(Side == "party" && Type == "damage") {

    user.username = combat.party[UserIndex];
    target.targetName = combat.monster[TargetIndex];

    user.hitpoint = combat.partyStats.hitpoint[UserIndex];
    user.manapoint = combat.partyStats.manapoint[UserIndex];
    user.hitpointMax = combat.partyStats.hitpointMax[UserIndex];
    user.manapointMax = combat.partyStats.manapointMax[UserIndex];
    user.str = combat.partyStats.str[UserIndex];
    user.mgk = combat.partyStats.mgk[UserIndex];
    user.spd = combat.partyStats.spd[UserIndex];
    user.dex = combat.partyStats.dex[UserIndex];
    user.def = combat.partyStats.def[UserIndex];
    user.res = combat.partyStats.res[UserIndex];
    user.dur = combat.partyStats.dur[UserIndex];

    target.hitpoint = combat.monstersStats.hitpoint[TargetIndex];
    target.manapoint = combat.monstersStats.manapoint[TargetIndex];
    target.hitpointMax = combat.monstersStats.hitpointMax[TargetIndex];
    target.manapointMax = combat.monstersStats.manapointMax[TargetIndex];
    target.str = combat.monstersStats.str[TargetIndex];
    target.mgk = combat.monstersStats.mgk[TargetIndex];
    target.spd = combat.monstersStats.spd[TargetIndex];
    target.dex = combat.monstersStats.dex[TargetIndex];
    target.def = combat.monstersStats.def[TargetIndex];
    target.res = combat.monstersStats.res[TargetIndex];
    target.dur = combat.monstersStats.dur[TargetIndex];

    console.log("YASSS")

  } else if(Side == "party" && Type == "buff") {

    user.username = combat.party[UserIndex];
    target.targetName = combat.party[TargetIndex];

    user.hitpoint = combat.partyStats.hitpoint[UserIndex];
    user.manapoint = combat.partyStats.manapoint[UserIndex];
    user.hitpointMax = combat.partyStats.hitpointMax[UserIndex];
    user.manapointMax = combat.partyStats.manapointMax[UserIndex];
    user.str = combat.partyStats.str[UserIndex];
    user.mgk = combat.partyStats.mgk[UserIndex];
    user.spd = combat.partyStats.spd[UserIndex];
    user.dex = combat.partyStats.dex[UserIndex];
    user.def = combat.partyStats.def[UserIndex];
    user.res = combat.partyStats.res[UserIndex];
    user.dur = combat.partyStats.dur[UserIndex];

    target.hitpoint = combat.partyStats.hitpoint[TargetIndex];
    target.manapoint = combat.partyStats.manapoint[TargetIndex]
    target.hitpointMax = combat.partyStats.hitpointMax[TargetIndex];
    target.manapointMax = combat.partyStats.manapointMax[TargetIndex]
    target.mgk = combat.partyStats.mgk[TargetIndex];
    target.spd = combat.partyStats.spd[TargetIndex];
    target.dex = combat.partyStats.dex[TargetIndex];
    target.def = combat.partyStats.def[TargetIndex];
    target.res = combat.partyStats.res[TargetIndex];
    target.dur = combat.partyStats.dur[TargetIndex];

    console.log("YASSSS")

  }

  let SkillIndexCurrent = 0;

  let SkillLibrary = [
    {
      name: "Party Tricks",
      action: "damage",
      type: "magical",
      dmg: user.mgk * 4,
      cost: 0,
      description: `Distracting party tricks casued the enemy to trip and hurt himself`
    },
    {
      name: "Purification",
      action: "damage",
      type: "magical",
      dmg: user.mgk * 6,
      cost: user.mgk * 2,
      description: `White beam of light that cleanse all evil`
    },
    {
      name: "God Blow",
      action: "damage",
      type: "magical",
      dmg: user.mgk * 10,
      cost: user.mgk * 5,
      description: `By the power given by all devotee.. she envelop his hands.. with god aura.. GOD BLOW!`
    },
    {
      name: "Defend",
      action: "buff",
      type: "magical",
      dmg: (-1 * ((user.dur * 4) + 20)),
      cost: -user.mgk,
      description: `${user.username} use Harden!`
    },
    {
      name: "Heal",
      action: "buff",
      type: "magical",
      dmg: (-1 * ((user.mgk * 3) + (target.dur * 3))),
      cost: user.mgk * 2,
      description: `${user.username} cast Heal on ${user.username}`
    },
    {
      name: "Fireball",
      action: "damage",
      type: "magical",
      dmg: ((user.mgk * 3) + user.spd) * 2,
      cost: user.mgk * 2,
      description: `using ninja signs.. ${user.username} created a fireball`
    },
    {
      name: "Backstab",
      action: "damage",
      type: "physical",
      dmg: ((user.spd  * 4) + user.dex) * 1.5,
      cost: user.spd * 3,
      description: `${user.username} creeps in the back and stab ${target.targetName}`
    },
    {
      name: "Quick Slash",
      action: "damage",
      type: "physical",
      dmg: (user.str + (user.dex / 2 ) + (user.spd / 2)) * 2,
      cost: 0,
      description: `${user.username} attack a opponent with a slash so quick`
    },
    {
      name: "Earth Spike",
      action: "damage",
      type: "magical",
      dmg: user.mgk * 3,
      cost: (-1 * user.mgk),
      description: "Raised the ground and crush the opponent and collect earth's mana"
    },
    {
      name: "Shield Wrath",
      action: "damage",
      type: "magical",
      dmg: user.dur * 4,
      cost: 0,
      description: "Use wrath from the shield"
    },
    {
      name: "Advance Magic: Magic Bullet",
      action: "damage",
      type: "magical",
      dmg: user.mgk * 4,
      cost: 0,
      description: `${user.username} attack a mana bullet`
    },
    {
      name: "Knife Stab",
      action: "damage",
      type: "physical",
      dmg: (user.dex + user.spd ) * 2,
      cost: 0,
      description: "Surprise Stab!"
    },
    {
      name: "Shield Attack",
      action: "damage",
      type: "physical",
      dmg: (user.def + user.str) * 2,
      cost: 0,
      description: "Push enemy with a shield"
    },
    {
      name: "Explosion",
      action: "damage",
      type: "magical",
      dmg: user.mgk * 12,
      cost: user.mgk * 6,
      description: "Burn to ashes within the crimson... EXPLOSION!"
    },
    {
      name: "Twinblade Assualt",
      action: "damage",
      type: "physical",
      dmg: (user.str * 8) + (user.spd * 2),
      cost: user.str * 4,
      description: "'Ahhh' *shh 'AAHHH' *shh *shhHH 'AaahhHHHHHHHH' *shuk!"
    },
    {
      name: "Mystic Vine",
      action: "damage",
      type: "magical",
      dmg: (user.mgk * 10) + (target.spd * 5),
      cost: user.mgk * 8,
      description: "Violet vine grows from the ground and bind the enemy"
    },
    {
      name: "Sonic Kick",
      action: "damage",
      type: "physical",
      dmg: user.spd * 10,
      cost: user.spd * 5,
      description: "High speed ninja kick"
    },
    {
      name: "Forbidden Series: Wrath",
      action: "damage",
      type: "magical",
      dmg: user.dur * 7.5,
      cost: (target.dur * 7.5) - (user.res * 3) - (user.def * 3),
      description: "By the power of the shield its scale and favor who has more vitality"
    },
    {
      name: "Sword Wheel",
      action: "damage",
      type: "magical",
      dmg: (user.dur * 5) + (user.spd * 5),
      cost: user.dur * 5,
      description: "Summons sword that encircles and slash the opponent"
    },
    {
      name: "Blicky",
      action: "damage",
      type: "physical",
      dmg: user.dex * 7,
      cost: user.dex * 3,
      description: "Call the ambulance but not for me!"
    },
    {
      name: "Godzilla Breath",
      action: "damage",
      type: "physical",
      dmg: (user.dur * 6) + (user.def * 6),
      cost: user.dur * 5,
      description: `Turns into a godzilla and annihilates ${target.targetName} with a monster breath of pure radioactive solid flame`
    },
    {
      name: "Clubbing",
      action: "damage",
      type: "physical",
      dmg: (user.dur * 2) + (user.str * 2),
      cost: 0,
      description: "Its clubbing t-t-time..! Goblin swings his club"
    },
    {
      name: "Goblin Time",
      action: "damage",
      type: "physical",
      dmg: (user.dex * 2) + (user.spd * 2 ) + (user.str * 2),
      cost: user.dex * 3,
      description: `The Goblins are in fenzied state and rushed ${target.targetName}` 
    },
    {
      name: "Dark Ball",
      action: "damage",
      type: "magical",
      dmg: (user.mgk * 5),
      cost: user.dur * 3,
      description: "in his little goblin voice and silly goblin language.. \n goblin shaman chants a black orb to hurl at you"
    },
    {
      name: "Trashing",
      action: "damage",
      type: "physical",
      dmg: (user.str * 2) + (user.dur * 2) + (user.spd),
      cost: 0,
      description: "Goblin Hob mad! Goblin Hob Smash!"
    },
    {
      name: "Heavy Smash",
      action: "damage",
      type: "physical",
      dmg: (user.dur * 4) + (user.str * 3),
      cost: user.dur * 3,
      description: "You dont like me when im H---y!"
    },
  ]


 
  
  user.skillName = Skill;
  user.side = Side;
  console.log(user);


  
  console.log(user);



  for(let i = 0; i < SkillLibrary.length; i++){
    if(Skill == SkillLibrary[i].name){
      SkillIndexCurrent = i;
    }
  }
  
  textDexription.push(`${user.username} used ${Skill} on ${target.targetName}`);

  let thisTurnDmg = Math.floor(SkillLibrary[SkillIndexCurrent].dmg);
  let thisturnCost = Math.floor(SkillLibrary[SkillIndexCurrent].cost);
  let letCriticalHit = Math.floor( 15 + (user.dex / 5));
  let letDodgeHit = Math.floor((10 + ((target.dex + target.spd) / 10)) - ((user.dex + user.spd) / 12));
  
  //crit and critDMG;
  if((Math.floor(Math.random()*100)) < letCriticalHit){
    thisTurnDmg = thisTurnDmg + (thisTurnDmg * (0.8 + (user.dex * 0.1)));
    textDexription.push("Its a CRITICAL HIT!");
  };
  //dodge
  if((Math.floor(Math.random()*100)) < letDodgeHit){
    thisTurnDmg = 0;
    textDexription.push("Its a MISSED!"); 
  }
  //regen
  
  if(user.manapoint < thisturnCost){
    thisTurnDmg = 0;
    thisturnCost = (-1 * user.mgk) + 30;
    textDexription.push(`Not Enough MANA! ${user.username} REST to regen some mana..`);
 
  }  else if(SkillLibrary[SkillIndexCurrent].type == "physical"){
    thisTurnDmg = Math.floor(thisTurnDmg - (((target.def * 2) + (target.res * 0.5))));
    target.hitpoint -= thisTurnDmg;
    textDexription.push(SkillLibrary[SkillIndexCurrent].description);
    
  } else if(SkillLibrary[SkillIndexCurrent].type == "magical"){
    thisTurnDmg = Math.floor(thisTurnDmg - (((target.res * 2) + (target.def * 0.5))));
    target.hitpoint -= thisTurnDmg;  
    textDexription.push(SkillLibrary[SkillIndexCurrent].description);

  } else {
    target.hitpoint -= Math.floor(thisTurnDmg);
    textDexription.push(SkillLibrary[SkillIndexCurrent].description);
  }

  user.manapoint -= thisturnCost;
  console.log(textDexription);

  //excess mana and health correction
  if(user.manapoint > user.manapointMax){
    user.manapoint = user.manapointMax;
  }
  if(user.hitpoint > user.hitpointMax){
    user.hitpoint = user.hitpointMax
  }
  if(target.manapoint > target.manapointMax){
    target.manapoint = target.manapointMax;
  }
  if(target.hitpoint > target.hitpointMax){
    target.hitpoint = target.hitpointMax
  }

  

  //save dmg calculations
  if(Side == "monster" && Type == "damage"){


    combat.monstersStats.hitpoint[UserIndex] = user.hitpoint;
    combat.monstersStats.manapoint[UserIndex] = user.manapoint;
    combat.monstersStats.hitpointMax[UserIndex] = user.hitpointMax;
    combat.monstersStats.manapointMax[UserIndex] = user.manapointMax;
    combat.monstersStats.str[UserIndex] = user.str;
    combat.monstersStats.mgk[UserIndex] = user.mgk;
    combat.monstersStats.spd[UserIndex] = user.spd;
    combat.monstersStats.dex[UserIndex] = user.dex;
    combat.monstersStats.def[UserIndex] = user.def;
    combat.monstersStats.res[UserIndex] = user.res;
    combat.monstersStats.dur[UserIndex] = user.dur;

    combat.partyStats.hitpoint[TargetIndex] = target.hitpoint;
    combat.partyStats.manapoint[TargetIndex] = target.manapoint;
    combat.partyStats.hitpointMax[TargetIndex] = target.hitpointMax;
    combat.partyStats.manapointMax[TargetIndex] = target.manapointMax;
    combat.partyStats.str[TargetIndex] = target.str;
    combat.partyStats.mgk[TargetIndex] = target.mgk;
    combat.partyStats.spd[TargetIndex] = target.spd;
    combat.partyStats.dex[TargetIndex] = target.dex;
    combat.partyStats.def[TargetIndex] = target.def;
    combat.partyStats.res[TargetIndex] = target.res;
    combat.partyStats.dur[TargetIndex] = target.dur;

    console.log("YAS");

    

  } else if(Side == "monster" && Type == "buff") {

    combat.monstersStats.hitpoint[UserIndex] = user.hitpoint;
    combat.monstersStats.manapoint[UserIndex] = user.manapoint;
    combat.monstersStats.hitpointMax[UserIndex] = user.hitpointMax;
    combat.monstersStats.manapointMax[UserIndex] = user.manapointMax;
    combat.monstersStats.str[UserIndex] = user.str;
    combat.monstersStats.mgk[UserIndex] = user.mgk;
    combat.monstersStats.spd[UserIndex] = user.spd;
    combat.monstersStats.dex[UserIndex] = user.dex;
    combat.monstersStats.def[UserIndex] = user.def;
    combat.monstersStats.res[UserIndex] = user.res;
    combat.monstersStats.dur[UserIndex] = user.dur;

    combat.monstersStats.hitpoint[TargetIndex] = target.hitpoint;
    combat.monstersStats.manapoint[TargetIndex] = target.manapoint;
    combat.monstersStats.hitpointMax[TargetIndex] = target.hitpointMax;
    combat.monstersStats.manapointMax[TargetIndex] = target.manapointMax;
    combat.monstersStats.str[TargetIndex] = target.str;
    combat.monstersStats.mgk[TargetIndex] = target.mgk;
    combat.monstersStats.spd[TargetIndex] = target.spd;
    combat.monstersStats.dex[TargetIndex] = target.dex;
    combat.monstersStats.def[TargetIndex] = target.def;
    combat.monstersStats.res[TargetIndex] = target.res;
    combat.monstersStats.dur[TargetIndex] = target.dur;

    console.log("YASS")

  } else if(Side == "party" && Type == "damage") {

    combat.partyStats.hitpoint[UserIndex] = user.hitpoint;
    combat.partyStats.manapoint[UserIndex] = user.manapoint;
    combat.partyStats.hitpointMax[UserIndex] = user.hitpointMax;
    combat.partyStats.manapointMax[UserIndex] = user.manapointMax;
    combat.partyStats.str[UserIndex] = user.str;
    combat.partyStats.mgk[UserIndex] = user.mgk;
    combat.partyStats.spd[UserIndex] = user.spd;
    combat.partyStats.dex[UserIndex] = user.dex;
    combat.partyStats.def[UserIndex] = user.def;
    combat.partyStats.res[UserIndex] = user.res;
    combat.partyStats.dur[UserIndex] = user.dur;

    combat.monstersStats.hitpoint[TargetIndex] = target.hitpoint;
    combat.monstersStats.manapoint[TargetIndex] = target.manapoint;
    combat.monstersStats.hitpointMax[TargetIndex] = target.hitpointMax;
    combat.monstersStats.manapointMax[TargetIndex] = target.manapointMax;
    combat.monstersStats.str[TargetIndex] = target.str;
    combat.monstersStats.mgk[TargetIndex] = target.mgk;
    combat.monstersStats.spd[TargetIndex] = target.spd;
    combat.monstersStats.dex[TargetIndex] = target.dex;
    combat.monstersStats.def[TargetIndex] = target.def;
    combat.monstersStats.res[TargetIndex] = target.res;
    combat.monstersStats.dur[TargetIndex] = target.dur;

    
    
  
    console.log(combat);

  } else if(Side == "party" && Type == "buff") {

    combat.partyStats.hitpoint[UserIndex] = user.hitpoint;
    combat.partyStats.manapoint[UserIndex] = user.manapoint;
    combat.partyStats.hitpointMax[UserIndex] = user.hitpointMax;
    combat.partyStats.manapointMax[UserIndex] = user.manapointMax;
    combat.partyStats.str[UserIndex] = user.str;
    combat.partyStats.mgk[UserIndex] = user.mgk;
    combat.partyStats.spd[UserIndex] = user.spd;
    combat.partyStats.dex[UserIndex] = user.dex;
    combat.partyStats.def[UserIndex] = user.def;
    combat.partyStats.res[UserIndex] = user.res;
    combat.partyStats.res[UserIndex] = user.dur;

    combat.partyStats.hitpoint[TargetIndex] = target.hitpoint;
    combat.partyStats.manapoint[TargetIndex] = target.manapoint;
    combat.partyStats.hitpointMax[TargetIndex] = target.hitpointMax;
    combat.partyStats.manapointMax[TargetIndex] = target.manapointMax;
    combat.partyStats.str[TargetIndex] = target.str;
    combat.partyStats.mgk[TargetIndex] = target.mgk;
    combat.partyStats.spd[TargetIndex] = target.spd;
    combat.partyStats.dex[TargetIndex] = target.dex;
    combat.partyStats.def[TargetIndex] = target.def;
    combat.partyStats.res[TargetIndex] = target.res;
    combat.partyStats.res[TargetIndex] = target.dur;

    console.log("YASSSS")

  }

 

  

  saveCombatData();
  displayTextSequence(textDexription);

  console.log("target.hitpoint", target.hitpoint);
  console.log(SkillLibrary[SkillIndexCurrent].dmg);

  
  console.log(combat);




  

}

async function displayTextSequence(textArray) {
  while (textArray.length > 0) {
    const text = textArray.shift(); // Remove and get the first element
    InbattleKeys(gameBattlePhase[6]);
    textpanelAppear(text);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Wait for 3 seconds before showing next text
  }

  // After the sequence, call WhosTurnRightNow if the array is empty
  if (textArray.length === 0) {
    
    
    combatUpdate();
    updataBattleDisplay();
    

    //this is end of battle
    if(combat.monster.length > 0){
    WhosTurnRightNow(combat.roundIndex);
    } else {
      
      
      character.DungeonFloor += 1;

      let goldGain = 0;
      let expGain = 0;
      if(combat.goldGains != 0 && combat.expGains != 0) {
      for(let i = 0; i < combat.goldGains.length; i++){
        goldGain +=  parseInt(combat.goldGains, 10);
      }
      for(let i = 0; i < combat.expGains.length; i++){
        expGain +=  parseInt(combat.expGains, 10);
      }
      
      character.gold += goldGain;
      character.exp += expGain;
      addNotification("experience", `${expGain}`);
      addNotification("gold", `${goldGain}`);
      }
      UpdateUIDisplay();
      runLoad('inbattle-modal', 'none');
      saveData();



      return uploadMonitor(gameLocations[4]);
    }
}
}
  //i actually messed up this part either i give monster unique ID with their position or i make some magic on logic here that will work but looks awkward
  //or i could properly initalized every mosnter stats and put a random unique ID for every slot not using their names anymore using position but that will make me go back to code many lines (not that many)
  //good thing this is programming and i can use any voodoo as long as they work
  //after 30 mins i just learned my lazy solutionwill make this easy to work to check if ther still monster to fight mylazyass now will help me chack total monster number

function combatUpdate() {
  let negativeHitpontNumberIndex;
  let ZeroesMonster = false;
  let ZeroesParty = false;
  let PartyNum = combat.party.length;
  let EnemyNum = combat.monster.length;

  
  

  for(let i = 0; i < combat.monster.length; i++){
    if(combat.monstersStats.hitpoint[i] <= 0){
      negativeHitpontNumberIndex = i;
      ZeroesMonster = true;
    }
  }
  if(ZeroesMonster) {
  combat.monster.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.hitpoint.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.hitpointMax.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.manapoint.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.manapointMax.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.str.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.mgk.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.spd.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.dex.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.def.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.res.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.dur.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.imgs.splice(negativeHitpontNumberIndex, 1);
  combat.monstersStats.lvl.splice(negativeHitpontNumberIndex, 1);
  combat.inBattle.splice(( PartyNum + negativeHitpontNumberIndex), 1);
  combat.speedIndex.splice(( PartyNum + negativeHitpontNumberIndex), 1);

  }



  for(let i = 0; i < combat.party.length; i++){
    if(combat.partyStats.hitpoint[i] <= 0){
      negativeHitpontNumberIndex = i;
      Zeroes = true;
    }
  }

  if(ZeroesParty) {
  combat.party.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.hitpoint.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.hitpointMax.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.manapoint.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.manapointMax.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.str.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.mgk.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.spd.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.dex.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.def.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.res.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.dur.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.imgs.splice(negativeHitpontNumberIndex, 1);
  combat.partyStats.lvl.splice(negativeHitpontNumberIndex, 1);
  combat.inBattle.splice(negativeHitpontNumberIndex, 1);
  combat.speedIndex.splice(negativeHitpontNumberIndex, 1);

  }

  ZeroesMonster = false;
  ZeroesParty = false;
  if(combat.monster.length < 0){
    runLoad('inbattle-modal', 'none');
    return uploadMonitor(gameLocations[4]);
  }
  
}
