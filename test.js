
let character = {
  skills: ["bb", "bb", "gg"],
  blessings: ["aa", "ab", "ab"]
};



function NoRepeatingArr() {
  let listedBlessing = []
  let listedSkills =[]
  listedBlessing = character.blessings;
  listedSkills = character.skills;
  
  function getUnique(listedArrays){
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
  console.log("a", character);
}

NoRepeatingArr();