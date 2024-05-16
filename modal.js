let arrayOfNotif = [
  {type: "start",  content: "reincarnated"}
];
let currentNotifIndex = 0;

//inintializing notif
function showNotif(index){
  console.log(arrayOfNotif)
  //stopshowing;
  if(index >= arrayOfNotif.length){
    clearNotifications();
    console.log(arrayOfNotif, currentNotifIndex);
    modalpanel.style.display = "none";
    return
  }

  let notif = arrayOfNotif[index];
  let text = "";

  switch (notif.type) {
    case "level":
      text = `You have reached level ${notif.content}`;
      break;
    case "companion":
      text = `You have a new companion: ${notif.content}`;
      break;
    case "experience":
      text = `You have gained ${notif.content} experience points`;
      break;
    case "gold":
      text = `You have received ${notif.content} gold`;
      break;
    case "blessing":
      text = `You have received ${notif.content}`;
      break;
    case "location":
      text = `You have reached ${notif.content}`;
      break;
    case "start":
      text = `You are successfully ${notif.content}`;
      break;
    default:
      text = `Unknown notification type: ${notif.type}`;
  };

  modalcontentpanel.innerText = text;
  modalpanel.style.display = "flex";
  modalcontent.style.display = "flex";
  modalcontent.classList.add("modal-notif-animate");
  
  // Remove the animation class after the animation ends
  modalcontent.addEventListener('animationend', function handleAnimationEnd() {
  modalcontent.classList.remove("modal-content-animate");
  modalcontent.removeEventListener('animationend', handleAnimationEnd);
  })

};


function clearNotifications() {
  arrayOfNotif.length = 0;  // This clears the array
  currentNotifIndex = 0;    // Reset the index
};

//add notification
function addNotification(type, content) {
  arrayOfNotif.push({ type, content });
};


modalcontentbttn.addEventListener("click", function () {
  currentNotifIndex++;
  showNotif(currentNotifIndex);
});
