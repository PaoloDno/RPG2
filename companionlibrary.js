function initializeCompany(name, charlvl) {
  let multiplier = 1 + (charlvl * 0.1); //multiplier based on level
  let imgs;
  let baseStats;
  let skills;

  let companion = {
    name: "",
    lvl: charlvl,
    hitpoint: 0,
    manapoint: 0,
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
      case 'Aqua':
          baseStats = {
              str: applyMultiplier(20, multiplier),
              mgk: applyMultiplier(50, multiplier), //3
              spd: applyMultiplier(50, multiplier), //3
              dex: applyMultiplier(40, multiplier), //2
              def: applyMultiplier(20, multiplier), //1
              res: applyMultiplier(60, multiplier), //4
              dur: applyMultiplier(40, multiplier)  //2
          };
          skills = ["God Blow", "Heal"];
          imgs = "./images/battleImgs/Aqua.png";
          break;
      case 'Goblin Slayer':
          baseStats = {
              str: applyMultiplier(60, multiplier), //4
              mgk: applyMultiplier(40, multiplier), //2
              spd: applyMultiplier(80, multiplier), //6
              dex: applyMultiplier(60, multiplier), //4
              def: applyMultiplier(50, multiplier), //3
              res: applyMultiplier(40, multiplier), //2
              dur: applyMultiplier(50, multiplier)  //3
          };
          skills = ["Quick Slash", "Shield Attack", "Backstab"];
          imgs = "./images/battleImgs/Aqua.png";
          break;
      default:
          throw new Error('Unknown monster type');
  }

  // Calculate hitpoints and manapoints based on stats
  let hitpoint = ( baseStats.dur * 10 ) + ( baseStats.res * 2 ) + ( baseStats.def * 2 ) + ( baseStats.str);
  let manapoint = ( baseStats.mgk * 10) + ( baseStats.str * 5 );

  // Assign values to the monster object
  companion.name = name;
  companion.lvl = charlvl;
  companion.hitpoint = hitpoint;
  companion.manapoint = manapoint;
  companion.hitpointMax = hitpoint;
  companion.manapointMax = manapoint;
  companion.stats = baseStats;
  companion.skills = skills;
  companion.img = imgs;

  return companion;
}

const companionSkillLibrary = [
    {
        name: "Aqua",
        offensiveSkills: ["Party Tricks", "Purification", "God Blow"],
        defensiveSkills: ["Heal"],
        display: {
            avatar: "./images/battleImgs/Aqua.png",
            display: "./images/battleImgs/Aqua.png"
        }
    }
]