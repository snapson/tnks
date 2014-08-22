var Tnks = module.exports = {
  stage: {       // Size of the main stage
    w: 1000,
    h: 550
  },
  impedient: {
    size: 5,     // Size of one section of impedient in px
    count: 4,    // Count of sections in one impedient
    elements: {  // Type of impedients
      grass: { passability: true, shooting: true, destruction: false },
      road:  { passability: true, shooting: true, destruction: false },
      water: { passability: false, shooting: true, destruction: false },
      brick: { passability: false, shooting: false, destruction: true, destructionCount: 1 },
      steel: { passability: false, shooting: false, destruction: true, destructionCount: 3 }
    }
  },
  tank: {
    health: 100,
    size: {
      w: 50,
      h: 50
    },
    speed: 10
  },
  base: {
    health: 160,
    size: {
      w: 20,
      h: 20
    }
  },
  missile: {
    damage: 20,
    size: {
      w: 5,
      h: 10
    },
    speed: 10
  }
};
