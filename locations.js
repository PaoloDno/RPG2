const gameLocations = [
  {
    name: "Towns",
    text: "Welcome to 'Towns'!",
    bgImg: "./images/locations/town.jpg",
    "button text": ["Inn", "Store", "Guild", "Dungeon"],
    "button functions": [GoInn, GoStore, GoGuild, GoDungeon],

  },
  {
    name: "Inn",
    text: "Inn Receptionist: Welcome Traveller would you like to Rent A Room!",
    bgImg: "./images/locations/town_inn.jpg",
    "button text": ["Rest", "Buy", "Sell", "Exit"],
    "button functions": ["", "", "", GoTown],
    
  },
  {
    name: "Store",
    text: "Store Receptionist: We got it all for you! ",
    bgImg: "./images/locations/town_store.jpg",
    "button text": ["Buy", "Sell", "Craft", "Exit"],
    "button functions": ["", "", "", GoTown],
    
  },
  {
    name: "Guild",
    text: "Guild Receptionsit: What can I help you with?",
    bgImg: "./images/locations/town_guild.jpg",
    "button text": ["Get Mission", "Buy", "Sell", "Exit"],
    "button functions": ["", "", "", GoTown],
  },
  {
    name: "Dungeon",
    text: "*Enter the Dungeon!",
    bgImg: "./images/locations/cave.jpg",
    "button text": ["Explore", "Explore", "Rest", "Exit"],
    "button functions": [StartExploring, "", "", GoTown]
  },
  
  {
    name: "Deeper Dungeon",
    text: "Enter the Deeper Dungeon!",
    bgImg: "./images/locations/cave_deep.jpg",
    "button text": ["Explore", "Explore", "Rest", "Exit"],
    "button functions": ["", "", "", GoTown]
  }
]

//initialize
uploadMonitor(gameLocations[0]);

function uploadMonitor(location) {
  console.log("uploading monitor");
  monitorpanel.style.backgroundImage = `url("${location.bgImg}")`;
  button1.innerText = location["button text"][0];
  button2.innerText = location["button text"][1];
  button3.innerText = location["button text"][2];
  button4.innerText = location["button text"][3];
  button1.onclick = location["button functions"][0];
  button2.onclick = location["button functions"][1];
  button3.onclick = location["button functions"][2];
  button4.onclick = location["button functions"][3];
  textpanelAppear(location.text);
}

function GoTown() {
  uploadMonitor(gameLocations[0]);
}
function GoInn() {
  uploadMonitor(gameLocations[1]);
}
function GoStore() {
  uploadMonitor(gameLocations[2]);
}
function GoGuild() {
  uploadMonitor(gameLocations[3]);
}
function GoDungeon() {
  uploadMonitor(gameLocations[4]);
}