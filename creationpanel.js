
function updateCharacterImage(event) {
  event.preventDefault();

  const selectedGender = document.querySelector('input[name="gender"]:checked').value;
  const selectedJob = document.getElementById('job').value; // Corrected 'class' to 'job'
  const selectedSkill = document.getElementById('skill').value;
  const selectedPassive = document.getElementById('passive').value;
  const selectedcharacterNameInput = document.getElementById('characterNameInput').value;
  const characterImageDiv = document.getElementById('img-creation');
  characterImageDiv.innerHTML = ''; // Clear previous image

  const img = document.createElement('img');
  let src = '';

  // Check gender and set image source accordingly
  if (selectedGender === 'male') {
    switch (selectedJob) {
      case 'warrior':
        src = `images/male-warrior.png`;
        break;
      case 'mage':
        src = `images/male-mage.png`;
        break;
      case 'rogue': 
        src = `images/male-rogue.png`; 
        break;
      case 'tank':
        src = `images/male-tank.png`; 
        break;
      
      default:
      
        src = `images/male-warrior.png`;
        break;
    }
  } else if (selectedGender === 'female') {
    switch (selectedJob) {
      case 'warrior':
        src = `images/female-warrior.png`;
        break;
      case 'mage':
        src = `images/female-mage.png`;
        break;
      case 'rogue': 
        src = `images/female-rogue.png`; 
        break;
      case 'tank':
        src = `images/female-tank.png`; 
        break;
      default:
        src = `images/female-mage.png`;
        break;
    }
  }

  img.src = src;
  img.alt = 'Character Image';
  characterImageDiv.appendChild(img);
  console.log(selectedGender, selectedJob, selectedcharacterNameInput, selectedPassive, selectedSkill);
}

document.getElementById('characterForm').addEventListener('change', updateCharacterImage);



