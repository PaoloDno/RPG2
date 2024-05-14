let newbase = {
  name: "sandra",
  stats: {
    atk: null,
    def: null
  }
};
const base = {
  atk: 30,
  def: 40
}

const equip = {
  atk: 10,
  def: 40
}

const blessing = {
  atk: 20,
  def: 10
}

const calc = (bas, eq, bls) => {
  // Creating a new object to avoid mutating the original 'base' object
  let newstat = {
    atk: bas.atk + eq.atk + bls.atk,
    def: bas.def + eq.def + bls.def
  };
  
  console.log(newstat);
  
  // Updating the newbase stats
  newbase.stats = newstat;
};

// Call the calc function
calc(base, equip, blessing);
console.log(newbase);