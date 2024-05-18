// inbattle
// const inBattleModal = document.querySelector("#inbattle-modal");
// const teamSection = document.querySelector("#teamsection");
// const monsterSection = document.querySelector("#monstersection");


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
  <div class="monstersection" id="monstersection">
  ${monsSectionHTML}
  </div>
  `;
  console.log(everyoneSpeedIndex);
  console.log(teamSectionHTML, monsSectionHTML);
   
  let arrangeMentsInBattle = everyoneSpeedIndexes(everyoneSpeedIndex);
  
  combat.roundIndex = arrangeMentsInBattle

  saveCombatData();
  console.log(combat);
  InbattleSequence();
}
//initializeBattle();


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




function InbattleSequence() {
  InbattleKeys(gameBattlePhase[0]);
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
  if (phase.text != "") { textpanelAppear(location.text); }

}

const gameBattlePhase = [
  {
    name: "Start",
    text: "Battle Begins",
    "button text": ["Attack", "Skill", "Unique Skill", "Defend"],
    "button functions": [battlephaseOne, "", "", ""],
  },
  {
    name: "Normal",
    text: "",
    "button text": ["---", "---", "---", "Back"],
    "button functions": ["", "", "", InbattleSequence],
  },
  {
    name: "Skill",
    text: "",
    "button text": ["---", "---", "---", "Back"],
    "button functions": ["", "", "", ""],
  },
  {
    name: "Unique Skill",
    text: "",
    "button text": ["---", "---", "---", "Back"],
    "button functions": ["", "", "", ""],
  },
  {
    name: "Defend",
    text: "",
    "button text": ["---", "---", "---", "Back"],
    "button functions": ["", "", "", ""],
  },
]


function battlephaseOne() {
  InbattleKeys(gameBattlePhase[1]);
  for(let i = 0; i < combat.monster.length; i++){

  }
}