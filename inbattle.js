// initializeBattleDisplay
//  everyoneSpeedIndexes

function initializeBattleDisplay() {
  runLoad('inbattle-modal', 'flex');
  inBattleModal.innerHTML = "";

  let teamSectionHTML = "";
  let monsSectionHTML = "";
  let everyoneSpeedIndex = [];

  for(let i = 0; i < combat.party.length; i++){
    teamcards = `
    <div class="inbattle-card">
      <div class="inbattle-img-card">
      <img src="${combat.partyStats.imgs[i]}"></img>
      </div>
        <p><span class="name-value-inbattle">${combat.party[i]}</span></p>
        <p>hp:<span class="hpText-inbattle">${combat.partyStats.hitpoint[i]}</span></p>
        <p>mn:<span class="manaText-inbattle">${combat.partyStats.manapoint[i]}</span></p>
    </div>
    `;
    everyoneSpeedIndex.push({name: `${combat.party[i]}`, spd: combat.partyStats.spd[i]});
    teamSectionHTML += teamcards;
  }
  
  for(let i = 0; i < combat.monster.length; i++){
    monscards = `
    <div class="inbattle-card">
      <div class="inbattle-img-card">
      <img src="${combat.monstersStats.imgs[i]}"></img>
      </div>
        <p><span class="name-value-inbattle">${combat.monster[i]}</span></p>
        <p>hp:<span class="hpText-inbattle">${combat.monstersStats.hitpoint[i]}</span></p>
        <p>mn:<span class="manaText-inbattle">${combat.monstersStats.manapoint[i]}</span></p>
    </div>
    `;
    everyoneSpeedIndex.push({name: `${combat.monster[i]}`, spd: combat.monstersStats.spd[i]});
    monsSectionHTML += monscards;
  }

  inBattleModal.innerHTML = `
  <div class="teamsection" id="teamsection">
  ${teamSectionHTML}
  </div>
  <div id="battleSeqeunceSlideshowBigger">
    <div id='current-index'></div>
    <div id="battleSeqeunceSlideshow"></div>
  </div>
  <div class="monstersection" id="monstersection">
  ${monsSectionHTML}
  </div>
  `;
  //console.log(everyoneSpeedIndex);
  //console.log(teamSectionHTML, monsSectionHTML);
   
  let arrangeMentsInBattle = everyoneSpeedIndexes(everyoneSpeedIndex);
  combat.speedIndex = everyoneSpeedIndex;
  combat.roundIndex = arrangeMentsInBattle

  saveCombatData();
  console.log(combat);
  InbattleKeys(gameBattlePhase[6]);
  InbattleSequenceColoredBoxIndicator(arrangeMentsInBattle);
  setTimeout(async () => {
    WhosTurnRightNow(arrangeMentsInBattle);
  }, 2000);
  
}
//initializeBattle();



function WhosTurnRightNow(arrangeMentsInBattle) {
  if(arrangeMentsInBattle.length < 1){
    arrangeMentsInBattle = everyoneSpeedIndexes(combat.speedIndex);
    combat.roundIndex = arrangeMentsInBattle;
  }

  let HisTurn = arrangeMentsInBattle[0];
  
  InbattleSequenceColoredBoxIndicator(arrangeMentsInBattle);
  combat.roundIndex.shift();
  
  console.log(arrangeMentsInBattle);
  
  
  
  if (HisTurn == character.name) {
    InbattleSequence();
    console.log(arrangeMentsInBattle);
  } else if (HisTurn == combat.party[1] || HisTurn == combat.party[2]) {
    let newIndex = 0;
    for(let i = 0; i < combat.party.length; i++){
      if(HisTurn = combat.party[i]){
      newIndex = i;
      }
    }
    
    automatedAction(HisTurn, newIndex);

  } else if(HisTurn == combat.monster[0] || HisTurn == combat.monster[1] || HisTurn == combat.monster[2]){
    console.log(arrangeMentsInBattle);
    let newIndex = 0;
    for(let i = 0; i < combat.monster.length; i++){
      if(HisTurn = combat.monster[i]){
      newIndex = i;
      }
    }

    automatedActionEnemy(HisTurn, newIndex);
  } else {
    WhosTurnRightNow(combat.roundIndex);
  }
}

function automatedAction(HisTurn, Index){
  let whatSkillToUse = Math.floor(Math.random * 100);
  let userSkillIndex = 0;
  for(let i = 0; i < companionSkillLibrary.length; i++){
    if(HisTurn = companionSkillLibrary[i].name){
      userSkillIndex = i;
    }
  }


  for(let i = 0; i < combat.party.length; i++){
    if(combat.partyStats.hitpoint[i] <  (combat.partyStats.hitpointMax[i] * 0.4) && companionSkillLibrary[userSkillIndex].defensiveSkills.length > 0){
      console.log(whatSkillToUse);
      if(whatSkillToUse < 80){
        let useSkill = companionSkillLibrary[userSkillIndex].defensiveSkills[0];
        return useSkillOnATarget( useSkill, Index, i , "party", "buff");
      } else {
        let useSkill = companionSkillLibrary[userSkillIndex].offensiveSkills[Math.floor(Math.random() * companionSkillLibrary[userSkillIndex].offensiveSkills.length)];
        let target = Math.floor(Math.random() * combat.monster.length); 
        return useSkillOnATarget( useSkill, Index, target, "party", "damage");
      }
    }
  }
  let useSkill = companionSkillLibrary[userSkillIndex].offensiveSkills[Math.floor(Math.random() * companionSkillLibrary[userSkillIndex].offensiveSkills.length)];
  let target = Math.floor(Math.random() * combat.monster.length); 
  return useSkillOnATarget(useSkill, Index, target, "party", "damage");
} 
function automatedActionEnemy( HisTurn, Index){
  let whatSkillToUse = Math.floor(Math.random * 100);
  let userSkillIndex = 0;
  for(let i = 0; i < monstersSkillLibrary.length; i++){
    if(HisTurn === monstersSkillLibrary[i].name){
      userSkillIndex = i;
    }
  }


  for(let i = 0; i < combat.monster.length; i++){
    if(combat.monstersStats.hitpoint[i] <=  (combat.monstersStats.hitpointMax[i] * 0.4) && monstersSkillLibrary[userSkillIndex].defensiveSkills.length < 1 ){
      
      if(whatSkillToUse < 80){
        let useSkill = mosntersSkillLibrary[userSkillIndex].defensiveSkills[0];
        return useSkillOnATarget( useSkill, Index, i , "monster", "buff");

      } else {
        let useSkill = monstersSkillLibrary[userSkillIndex].offensiveSkills[Math.floor(Math.random() * monstersSkillLibrary[userSkillIndex].offensiveSkills.length)];
        let target = Math.floor(Math.random() * combat.party.length); 
      
        return useSkillOnATarget(useSkill, Index, target, "monster", "damage");
      
      }
    }
  }
  let useSkill = monstersSkillLibrary[userSkillIndex].offensiveSkills[Math.floor(Math.random() * monstersSkillLibrary[userSkillIndex].offensiveSkills.length)];
  let target = Math.floor(Math.random() * combat.party.length); 
  return useSkillOnATarget(useSkill, Index, target, "monster", "damage");
}



function everyoneSpeedIndexes(speedIndex) {
  let everyoneSpeed = [];
  let maxSpd = 0;
  everyoneSpeed = speedIndex;
  console.log(speedIndex);
  console.log(everyoneSpeed);
  everyoneSpeed.map(spd => maxSpd += spd.spd );
  console.log(maxSpd);
  console.log(everyoneSpeed);
  maxSpd *= 3; //multiply max spd for more dynamic arrangement
  let everyoneSpeedIndex = everyoneSpeed.map(spd => spd.spd = Math.floor((maxSpd / spd.spd)) );
  console.log(everyoneSpeedIndex); 
  console.log("everyoneSpeed", everyoneSpeed);
  //damn this unpredictable mutation in the object creates what i want it to make;
  let arrangeMentInBattle = []
  for(let i = 0; arrangeMentInBattle.length < 20; i++ ){
 
    for(let j = 0; j < everyoneSpeed.length; j++){
      if(i == everyoneSpeed[j].spd){
        arrangeMentInBattle.push(everyoneSpeed[j].name);
        everyoneSpeed[j].spd = Math.floor((everyoneSpeed[j].spd * 1.8)); //multilication instead of addition so it closes gap in speed
      }
    }
  }
  console.log(arrangeMentInBattle);
  return arrangeMentInBattle;
}

function InbattleSequenceColoredBoxIndicator(arrangeMentInBattle) {
  const battleSeqeunceSlideshowBigger = document.querySelector("#battleSeqeunceSlideshowBigger");
  const battleSeqeunceSlideshow = document.querySelector("#battleSeqeunceSlideshow");
  const currentSeq = document.querySelector("#current-index");
  //clear bar
  battleSeqeunceSlideshowBigger.innerHTML = "";
  battleSeqeunceSlideshow.innerHTML = "";
  currentSeq.innerHTML = " ";
  
  const colorBoxSequenceIndex = [ "rd", "blu", "yel", "org", "gre", "whi" ]
  let sequenceColoredBox = [];
  let arrangeMentsInBattle = [...arrangeMentInBattle];
  let arrangementsImgs = [...combat.partyStats.imgs, ...combat.monstersStats.imgs];
  for(let i = 0; i < combat.inBattle.length; i++){
    sequenceColoredBox.push({
      name: combat.inBattle[i],
      bgColor: colorBoxSequenceIndex[i],
      bgImgs: arrangementsImgs[i]
    });
  }
  
        
  
  let battleSeqSlide = "";
  for(let i = 0; i < arrangeMentsInBattle.length; i++){

    for(let j = 0; j< sequenceColoredBox.length; j++){

      if( arrangeMentsInBattle[0] == sequenceColoredBox[j].name){
        battleSeqeunceSlideshowBigger.innerHTML = `<div id='current-index'><img class='object-fit' src='${sequenceColoredBox[j].bgImgs}'></img></div>`;
      }

      if(arrangeMentsInBattle[i] == sequenceColoredBox[j].name){
        battleSeqSlide += `
        <div class="sequence-box ${sequenceColoredBox[j].bgColor}">
        <img src="${sequenceColoredBox[j].bgImgs}" class="object-fit"></img>
        </div>
        `;
      }
    }
  }
  battleSeqeunceSlideshowBigger.innerHTML += `<div id="battleSeqeunceSlideshow">${battleSeqSlide}</div>`
  
}


function InbattleSequence() {
  InbattleKeys(gameBattlePhase[0]);
}
function InbattleSequence2() {
  InbattleKeys(gameBattlePhase[2]);
}
function InbattleKeys(phase) {
  console.log(`${phase.name}`);
  button1.innerText = phase["button text"][0];
  button2.innerText = phase["button text"][1];
  button3.innerText = phase["button text"][2];
  button4.innerText = phase["button text"][3];
  button1.onclick = phase["button functions"][0];
  button2.onclick = phase["button functions"][1];
  button3.onclick = phase["button functions"][2];
  button4.onclick = phase["button functions"][3];
  if (phase.text != "") { textpanelAppear(phase.text); }

}

const gameBattlePhase = [
  {
    name: "Start",
    text: "Your Turn",
    "button text": ["Attack", "Skill", "Unique Skill", "Defend"],
    "button functions": [battleChoiceOne, battleChoiceTwo, battleChoiceThree, battleChoiceFour],
  },
  {
    name: "Normal",
    text: `use normal attack.\n(${character.normalAtk})`,
    "button text": ["---", "---", "---", "Back"],
    "button functions": ["", "", "", InbattleSequence],
  },
  {
    name: "Skill",
    text: "What skill you want to use",
    "button text": ["---", "---", "---", "Back"],
    "button functions": ["", "", "", InbattleSequence],
  },
  {
    name: "UseSkill",
    text: `Use a skill on..`,
    "button text": ["---", "---", "---", "Back"],
    "button functions": ["", "", "", InbattleSequence],
  },
  {
    name: "Unique Skill", //4
    text: "Ultimate Skill!!!",
    "button text": ["---", "---", "---", "Back"],
    "button functions": ["", "", "", InbattleSequence2],
  },
  {
    name: "Defend", //5
    text: "You use Defend",
    "button text": ["---", "---", "---", "Back"],
    "button functions": ["", "", "", InbattleSequence],
  },
  {
    name: "Standby", //6
    text: "",
    "button text": ["---", "---", "---", "---"],
    "button functions": ["", "", "", ""],
  },
]


function battleChoiceOne() {
  InbattleKeys(gameBattlePhase[1]);
  let enemyNum = combat.monster.length;
  console.log(enemyNum);
  switch(enemyNum){
    case 3:
      button1.innerText = combat.monster[0];
      button2.innerText = combat.monster[1];
      button3.innerText = combat.monster[2];
    
      button1.onclick  = () => useSkillOnATarget(character.normalAtk, 0, 0, "party", "damage");
      button2.onclick  = () => useSkillOnATarget(character.normalAtk, 0, 1, "party", "damage");
      button3.onclick  = () => useSkillOnATarget(character.normalAtk, 0, 2, "party", "damage");
      
      break;
    case 2:
      button1.innerText = combat.monster[0];
      button2.innerText = combat.monster[1];
      
      button1.onclick  = () => useSkillOnATarget(character.normalAtk, 0, 0, "party", "damage");
      button2.onclick  = () => useSkillOnATarget(character.normalAtk, 0, 1, "party", "damage");
      break;
    case 1:
      button1.innerText = combat.monster[0];
      button1.onclick  = () => useSkillOnATarget(character.normalAtk, 0, 0, "party", "damage");
      console.log("yah");
      break;
  }


}

function battleChoiceTwo() {
  InbattleKeys(gameBattlePhase[2]);
  let skillNumbers = character.skills.length;
  switch(skillNumbers){
    case 3:
      button1.innerText = character.skills[0];
      button2.innerText = character.skills[1];
      button3.innerText = character.skills[2];
    
      button1.onclick  = () => battleChoiceTwoPhaseTwo(character.skills[0]);
      button2.onclick  = () => battleChoiceTwoPhaseTwo(character.skills[1]);
      button3.onclick  = () => battleChoiceTwoPhaseTwo(character.skills[2]);

      break;
    case 2:
      button1.innerText = character.skills[0];
      button2.innerText = character.skills[1];
      
      button1.onclick  = () => battleChoiceTwoPhaseTwo(character.skills[0]);
      button2.onclick  = () => battleChoiceTwoPhaseTwo(character.skills[0]);
      break;
    case 1:
      button1.innerText = character.skills[0];
      button1.onclick  = () => battleChoiceTwoPhaseTwo(character.skills[0]);
      break;
  }

}
function battleChoiceTwoPhaseTwo(SkillName) {
  InbattleKeys(gameBattlePhase[3]);
  if(SkillName == "Heal" || SkillName == "Dragon Scale"){
    let partyNum = combat.party.length;

    switch(partyNum){
      case 3:
        button1.innerText = combat.party[0];
        button2.innerText = combat.party[1];
        button2.innerText = combat.party[2];
        
        button1.onclick  = () => useSkillOnATarget(SkillName, 0, 0, "party", "buff");
        button2.onclick  = () => useSkillOnATarget(SkillName, 0, 1, "party", "buff");
        button3.onclick  = () => useSkillOnATarget(SkillName, 0, 2, "party", "buff");
        
        break;
      case 2:
        button1.innerText = combat.party[0];
        button2.innerText = combat.party[1];
        
        button1.onclick  = () => useSkillOnATarget(SkillName, 0, 0, "party", "buff");
        button2.onclick  = () => useSkillOnATarget(SkillName, 0, 1, "party", "buff");
        break;
      case 1:
        button1.innerText = combat.party[0];
      
        button1.onclick  = () => useSkillOnATarget(SkillName, 0, 0, "party", "buff");
        console.log("yah");
        break;
    }

  } else {
  let enemyNum = combat.monster.length;
  switch(enemyNum){
    case 3:
      button1.innerText = combat.monster[0];
      button2.innerText = combat.monster[1];
      button2.innerText = combat.monster[2];
      
      button1.onclick  = () => useSkillOnATarget(SkillName, 0, 0, "party", "damage");
      button2.onclick  = () => useSkillOnATarget(SkillName, 0, 1, "party", "damage");
      button3.onclick  = () => useSkillOnATarget(SkillName, 0, 2, "party", "damage");
      
      break;
    case 2:
      button1.innerText = combat.monster[0];
      button2.innerText = combat.monster[1];
      
      button1.onclick  = () => useSkillOnATarget(SkillName, 0, 0, "party", "damage");
      button2.onclick  = () => useSkillOnATarget(SkillName, 0, 1, "party", "damage");
      break;
    case 1:
      button1.innerText = combat.monster[0];
    
      button1.onclick  = () => useSkillOnATarget(SkillName, 0, 0, "party", "damage");
      console.log("yah");
      break;
  }
  }
}
function battleChoiceThree() {
  InbattleKeys(gameBattlePhase[4]);
  let enemyNum = combat.monster.length;
  console.log(enemyNum);
  switch(enemyNum){
    case 3:
      button1.innerText = combat.monster[0];
      button2.innerText = combat.monster[1];
      button3.innerText = combat.monster[2];
    
      button1.onclick  = () => useSkillOnATarget(character.ultimateSkill, 0, 0, "party", "damage");
      button2.onclick  = () => useSkillOnATarget(character.ultimateSkill, 0, 1, "party", "damage");
      button3.onclick  = () => useSkillOnATarget(character.ultimateSkill, 0, 2, "party", "damage");
      
      break;
    case 2:
      button1.innerText = combat.monster[0];
      button2.innerText = combat.monster[1];
      
      button1.onclick  = () => useSkillOnATarget(character.ultimateSkill, 0, 0, "party", "damage");
      button2.onclick  = () => useSkillOnATarget(character.ultimateSkill, 0, 1, "party", "damage");
      break;
    case 1:
      button1.innerText = combat.monster[0];
      button1.onclick  = () => useSkillOnATarget(character.ultimateSkill, 0, 0, "party", "damage");
      console.log("yah");
      break;
  }


}
function battleChoiceFour() {
  InbattleKeys(gameBattlePhase[5]);
  useSkillOnATarget("Defend", 0, 0, "party", "buff");

}

function updataBattleDisplay() {

  inBattleModal.innerHTML = "";

  let teamSectionHTML = "";
  let monsSectionHTML = "";
  let everyoneSpeedIndex = [];

  for(let i = 0; i < combat.party.length; i++){
    teamcards = `
    <div class="inbattle-card">
      <div class="inbattle-img-card">
      <img src="${combat.partyStats.imgs[i]}"></img>
      </div>
        <p><span class="name-value-inbattle">${combat.party[i]}</span></p>
        <p>hp:<span class="hpText-inbattle">${combat.partyStats.hitpoint[i]}</span></p>
        <p>mn:<span class="manaText-inbattle">${combat.partyStats.manapoint[i]}</span></p>
    </div>
    `;
    everyoneSpeedIndex.push({name: `${combat.party[i]}`, spd: combat.partyStats.spd[i]});
    teamSectionHTML += teamcards;
  }
  
  for(let i = 0; i < combat.monster.length; i++){
    monscards = `
    <div class="inbattle-card">
      <div class="inbattle-img-card">
      <img src="${combat.monstersStats.imgs[i]}"></img>
      </div>
        <p><span class="name-value-inbattle">${combat.monster[i]}</span></p>
        <p>hp:<span class="hpText-inbattle">${combat.monstersStats.hitpoint[i]}</span></p>
        <p>mn:<span class="manaText-inbattle">${combat.monstersStats.manapoint[i]}</span></p>
    </div>
    `;
    everyoneSpeedIndex.push({name: `${combat.monster[i]}`, spd: combat.monstersStats.spd[i]});
    monsSectionHTML += monscards;
  }

  inBattleModal.innerHTML = `
  <div class="teamsection" id="teamsection">
  ${teamSectionHTML}
  </div>
  <div id="battleSeqeunceSlideshowBigger">
    <div id='current-index'></div>
    <div id="battleSeqeunceSlideshow"></div>
  </div>
  <div class="monstersection" id="monstersection">
  ${monsSectionHTML}
  </div>
  `;

   
  

}