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
//other dom const
  
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
            if (charName.length < 3 || charName.length > 9) {
                document.querySelector("#name-alert").innerHTML = "Name should be between 3-9 characters only!";
            } else {
            character = {
                name: charName,
                lvl: 1,
                class: null,
                title: null,
                normalAtk: null,
                skills: [],
                ultimateSkill: null,
                passive: [],
                blessings: [],
                goddess: "",
                companion: [],
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
                    avatarHover: "",
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

  
  



});


