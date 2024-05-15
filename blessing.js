let recievedBlessing = {
  name: "",
  rarity: "",
  attributes: {
    str: 0,
    mgk: 0,
    spd: 0,
    dex: 0,
    res: 0,
    def: 0,
    dur: 0
  },
  passive: "",
};

const FireBlessings = [
  {
    name: "Strong Muscle",
    rarity: "common",
    attributes: {
      str: 20,
      dur: 30
    }
  },
  {
    name: "Fast Limbs",
    rarity: "common",
    attributes: {
      str: 20,
      spf: 20,
      agi: 10
    }
  },
  {
    name: "Beastly Muscles",
    rarity: "rare",
    attributes: {
      str: 40,
      dur: 40,
      spd: 20,
      dex: 20
    }
  },
  {
    name: "Circus Acrobatic",
    rarity: "rare",
    attributes: {
      str: 30,
      spd: 40,
      dex: 30
    }
  },
];

const WindBlessings = [
  {
    name: "Magic Attenuation",
    rarity: "common",
    attributes: {
      mgk: 20,
      spd: 20,
      res: 10
    }
  },
  {
    name: "Explosive Mana",
    rarity: "common",
    attributes: {
      mgk: 50
    }
  },
  {
    name: "Spell Mastery",
    rarity: "rare",
    attributes: {
      mgk: 30,
      spd: 20,
      dex: 20,
      res: 20,
      def: 10
    }
  },
  {
    name: "Explosion Specialist",
    rarity: "rare",
    attributes: {
      mgk: 80,
      dex: 10,
      res: 10
    }
  },
];

const EarthBlessings = [
  {
    name: "Fatty",
    rarity: "common",
    attributes: {
      res: 30,
      def: 20,
    }
  },
  {
    name: "Bulky",
    rarity: "common",
    attributes: {
      dur: 50
    }
  },
  {
    name: "Titan Blood",
    rarity: "rare",
    attributes: {
      def: 30,
      res: 30,
      dur: 40
    }
  },
  {
    name: "Movable Organs",
    rarity: "rare",
    attributes: {
      dur: 100
    }
  },
];

const WaterBlessings = [
  {
    name: "Party Tricks",
    rarity: "common",
    attributes: {
      str: 10,
      mgk: 10,
      spd: 10,
      dur: 20
    }
  },
  {
    name: "Ladies Luck",
    rarity: "common",
    attributes: {
      dex: 40,
      spd: 10,
    }
  },
  {
    name: "Calm Mind",
    rarity: "rare",
    attributes: {
      str: 30,
      mgk: 30,
      spd: 20,
      dex: 20
    }
  },
  {
    name: "Barrier",
    rarity: "rare",
    attributes: {
      def: 50,
      res: 50,
    }
  },
];




function FireBlessing(blessing) {
  blessing = {
    name: "",
    rarity: "",
    attributes: {
      str: 0,
      mgk: 0,
      spd: 0,
      dex: 0,
      res: 0,
      def: 0,
      dur: 0
    },
    passive: "",
  }
  

  let randomNum = Math.floor(Math.random() * FireBlessings.length);
  let blessingReceived = FireBlessings[randomNum];
  blessing.name = blessingReceived.name;
  blessing.rarity = blessingReceived.rarity;

  // Merge received attributes into blessing attributes
  blessing.attributes = { ...blessing.attributes, ...blessingReceived.attributes };
  
  return blessing;
}


function WindBlessing(blessing) {
  blessing = {
    name: "",
    rarity: "",
    attributes: {
      str: 0,
      mgk: 0,
      spd: 0,
      dex: 0,
      res: 0,
      def: 0,
      dur: 0
    },
    passive: "",
  }
  
  let randomNum = Math.floor(Math.random() * WindBlessings.length);
  let blessingReceived = WindBlessings[randomNum];
  blessing.name = blessingReceived.name;
  blessing.rarity = blessingReceived.rarity;

  // Merge
  blessing.attributes = { ...blessing.attributes, ...blessingReceived.attributes };
  
  return blessing;
}




function EarthBlessing(blessing) {
  blessing = {
    name: "",
    rarity: "",
    attributes: {
      str: 0,
      mgk: 0,
      spd: 0,
      dex: 0,
      res: 0,
      def: 0,
      dur: 0
    },
    passive: "",
  }
  
  let randomNum = Math.floor(Math.random() * EarthBlessings.length);
  let blessingReceived = EarthBlessings[randomNum];
  blessing.name = blessingReceived.name;
  blessing.rarity = blessingReceived.rarity;

  // Merge received attributes into blessing attributes
  blessing.attributes = { ...blessing.attributes, ...blessingReceived.attributes };
  
  return blessing;
}





function WaterBlessing(blessing) {
  blessing = {
    name: "",
    rarity: "",
    attributes: {
      str: 0,
      mgk: 0,
      spd: 0,
      dex: 0,
      res: 0,
      def: 0,
      dur: 0
    },
    passive: "",
  }

  let randomNum = Math.floor(Math.random() * WaterBlessings.length);
  let blessingReceived = FireBlessings[randomNum];
  blessing.name = blessingReceived.name;
  blessing.rarity = blessingReceived.rarity;

  // Merge received attributes into blessing attributes
  blessing.attributes = { ...blessing.attributes, ...blessingReceived.attributes };
  
  return blessing;
}

