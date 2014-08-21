module.exports = {
  // TODO: constants like damage, hp, speed etc.

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
    health: 100
  },
  base: {
    health: 160
  },
  missile: {
    damage: 20
  }
};
