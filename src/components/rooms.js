const entry = {
  title: 'The Entry Room',
  image: 'entry.jpg',
  //image: 'http://i.dailymail.co.uk/i/pix/2014/06/20/article-0-1EEE989700000578-571_964x619.jpg',
  description: 'The main door leading outside locked behind you. You must find another way out. You see the floor of the entry is crumbling under your feet.  A staircase sits in the north end of the room.  A door to the north is unreachable beyond the crumbling floor. You notice a door to the west and east also.',
  items: [],
  doors: {
    n: 'secondFloor',
    w: 'dining',
    e: 'living'
  }
};

const dining = {
  title: 'Dining Room',
  image: 'dining.jpg',
  //image: 'http://www.furnitureteams.com/server12-cdn/2016/02/09/inside-old-abandoned-hotels-creepy-old-abandoned-houses-inside-508158debeae2d5b.jpg',
  description: 'You find a dining room. A mismatched set of chairs surround a wood table. A door to the north has a huge hole in it.',
  items: [],
  doors: {
    n: 'den',
    e: 'entry',
    
  }
};

const den = {
  title: 'Den',
  image: 'den.jpg',
  //image: 'https://www.thesun.co.uk/news/2188128/haunting-images-inside-abandoned-mansion-once-owned-by-coca-cola-baron-complete-with-chilling-message-saying-its-fountain-ran-with-blood/',
  description: 'The ceiling is in near perfect condition, a hint to the once great beauty of the house.  The only other door in the room is sealed off with bricks.',
  items: [],
  doors: {
    s: 'dining'
  },
  use(item){
    if(item.key === 'book'){
      this.doors.n = 'outside';
      this.description = 'The brick door lays in pieces on the floor.  The door appears to lead outside.';
      return 'You open the book and read a cryptic passage hand written inside the cover.  The brick sealing the door crumbles.';
    }
  }
};

const living = {
  title: 'Living Room',
  image: 'living.jpg',
  //image: 'http://i.dailymail.co.uk/i/pix/2014/06/20/article-0-1EEE989700000578-571_964x619.jpg',
  description: 'A couch and arm chair reside in the middle of the living room. The couch seems to have barely survived the collapse of the ceiling.',
  items: [
    {
      key: 'brick',
      description: 'brick'
    }
  ],
  doors: {
    w: 'entry'
  }
};

const secondFloor = {
  title: 'Second Floor Landing',
  image: 'secondFloor.jpg',
  //image: 'https://notasprensa.info/7601546-buckingham-palace-ballroom-organ.html',
  description: 'The second floor has collapsed.  Light streams in from another hole in the ceiling.  You see three doors that are safe to get too.  One to the north, west and east.  South will take you back downstairs.',
  items: [],
  doors: {
    w: 'bedroom',
    n: 'piano',
    e: 'bedroom2',
    s: 'entry',
  }
};

const bedroom = {
  title: 'Bedroom',
  image: 'bedroom.jpg',
  //image: 'https://s-i.huffpost.com/gen/1108057/images/o-ABANDONED-FARMHOUSE-facebook.jpg',
  description: 'You enter a small bedroom with a single bed. The wall is crumbling but the room shows the most sign of life.',
  items: [
    {
      key: 'book',
      description: 'Old decaying book'
    }, 
    {
      key: 'jacket',
      description: 'Dust covered suit jacket'
    }, 
    {
      key: 'figurine',
      description: 'Lady figurine'
    }
  ],
  doors: {
    e: 'secondFloor'
  }
};

const piano = {
  title: 'Piano Room',
  image: 'piano.jpg',
  //image: 'http://infocult.typepad.com/infocult/2013/10/european-abandoned-places.html',
  description: 'The ceiling lays in pieces on the floor in front of you.  The beauty of the plaster walls and trim arer still noticable. A piano rests in front of a fireplace.',
  items: [
    {
      key: 'firePoker',
      description: 'Wrought iron poker'
    }
  ],
  doors: {
    s: 'secondFloor'
  }
};

const bedroom2 = {
  title: 'Second Bedroom',
  image: 'bedroom2.jpg',
  //image: 'http://www.news.com.au/travel/world-travel/gloom-service-horror-abandoned-hotels/news-story/8834b3fa6d3205a103c8e50dd749cc58',
  description: 'A larger bedroom with two beds lays in front of you. It reminds you of a cheap motel, a surpising room to find in such a grand home.',
  items: [],
  doors: {
    w: 'secondFloor'
  }
};

const outside = {
  title: 'Outside',
  image: 'outside.jpg',
  //image: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Flitcult.ru%2Fu%2Fdd%2Flyrics%2F35289%2Ffoto.jpg&imgrefurl=http%3A%2F%2Frifmer.com%2Fvne-konkursa%2Fvashe-tvorchestvo-ili-v-poiskax-pochitatelya%2F135815.html&docid=9Wm3ZAVmD5dJ_M&tbnid=CUdJ3W8bxX7r_M%3A&vet=10ahUKEwjIipK9q8XZAhVJ1mMKHebyCiIQMwgmKAAwAA..i&w=1500&h=1018&hl=en&bih=693&biw=894&q=creepy%20old%20abandoned%20mansions&ved=0ahUKEwjIipK9q8XZAhVJ1mMKHebyCiIQMwgmKAAwAA&iact=mrc&uact=8',
  description: 'You managed to escape the house.',
  items: [],
  doors: {
    s: 'den'
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