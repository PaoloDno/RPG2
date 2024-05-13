window.addEventListener("load", function() {
  console.log("Page loaded!");
  if(character === null){
    runLoad("characterCreationPanel","flex");
  }
});

const character = null;
const runLoad = (id, display) => {
    let loader = document.querySelector("#loader");
    loader.style.display = "flex";
    setTimeout(async () => {
        loader.style.display = "none";
        document.querySelector(`#${id}`).style.display = `${display}`;
    }, 1000);
}

/*

the fucking failed trial i initiating values



document.addEventListener('DOMContentLoaded', function() {
  const runLoad = (id, display) => {
    let loader = document.querySelector(".loader");
    loader.style.display = "flex";
    setTimeout(async () => {
        loader.style.display = "none";
        document.querySelector(`#${id}`).style.display = `${display}`;
    }, 1250);
    console.log("RPAPA");
  
  const createCharacterButton = document.getElementById('createCharacterButton');
  const selectedCharacterButton = document.getElementById('selectedCharacterButton');
  createCharacterButton.addEventListener('click', function() {
      // Hide the character creation panel
      runLoad('title-screen', 'none')
      .then(runLoad('characterCreationPanel', 'flex'));
  });
  selectedCharacterButton.addEventListener('click', function() {
    // Hide the character creation panel
    characterCreationPanel.style.display = 'none';
});
}});

const runLoad = (id, display) => {
  let loader = document.querySelector(".loader");
  loader.style.display = "flex";
  setTimeout(async () => {
      loader.style.display = "none";
      document.querySelector(`#${id}`).style.display = `${display}`;
  }, 1250);


  runload('title-screen', 'flex');

window.addEventListener("load", function () {
  if (player === null) {
      runLoad("character-creation", "flex");
  } else {
      let target = document.querySelector("#title-screen");
      target.style.display = "flex";
  }
});

  
};
*/


