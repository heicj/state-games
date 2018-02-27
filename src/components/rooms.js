const entry = {
  title: 'The Entry Room',
  image: '../img/entry.jpg',
  description: 'asdlkfja',
  items: [],
  doors: {
    n: 'secondFloor',
    w: 'dining',
    e: 'living'
  }
};

const dining = {
  title: 'Dining Room',
  image: '../img/dining.jpg',
  description: 'need description',
  items: [],
  doors: {
    e: 'entry',
    n: 'den'
  }
};

const den = {
  title: 'Den',
  image: '../img/den.jpg',
  description: 'need description',
  items: [],
  doors: {
    s: 'dining'
  }
};

const living = {
  title: 'Living Room',
  image: '../img/living.jpg',
  description: 'need description',
  items: [],
  doors: {
    w: 'entry'
  }
};

const secondFloor = {
  title: 'Second Floor Landing',
  image: '../img/secondFloor.jpg',
  description: 'need description',
  items: [],
  doors: {
    n: 'piano',
    w: 'bedroom',
    e: 'bedroom2'
  }
};

const bedroom = {
  title: 'Bedroom',
  image: '../img/bedroom.jpg',
  description: 'need description',
  items: [],
  doors: {
    e: 'secondFloor'
  }
};

const piano = {
  title: 'Piano Room',
  image: '../img/piano.jpg',
  description: 'need description',
  items: [],
  doors: {
    s: 'secondFloor'
  }
};

const bedroom2 = {
  title: 'Second Bedroom',
  image: '../img/bedroom2.jpg',
  description: 'need description',
  items: [],
  doors: {
    w: 'secondFloor'
  }
};

const outside = {
  title: 'Outside',
  image: '../img/outside.jpg',
  description: 'need description',
  items: [],
  doors: {

  }
};

export const rooms = {
  entry,
  dining,
  den,
  living,
  secondFloor,
  bedroom,
  piano,
  bedroom2,
  outside
};

export const start = entry;