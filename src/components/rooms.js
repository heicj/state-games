const entry = {
  title: 'The Entry Room',
  image: 'entry.jpg',
  //image: 'http://i.dailymail.co.uk/i/pix/2014/06/20/article-0-1EEE989700000578-571_964x619.jpg',
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
  image: 'dining.jpg',
  //image: 'http://www.furnitureteams.com/server12-cdn/2016/02/09/inside-old-abandoned-hotels-creepy-old-abandoned-houses-inside-508158debeae2d5b.jpg',
  description: 'need description',
  items: [],
  doors: {
    e: 'entry',
    n: 'den'
  }
};

const den = {
  title: 'Den',
  image: 'den.jpg',
  //image: 'https://www.thesun.co.uk/news/2188128/haunting-images-inside-abandoned-mansion-once-owned-by-coca-cola-baron-complete-with-chilling-message-saying-its-fountain-ran-with-blood/',
  description: 'need description',
  items: [],
  doors: {
    s: 'dining'
  }
};

const living = {
  title: 'Living Room',
  image: 'living.jpg',
  //image: 'http://i.dailymail.co.uk/i/pix/2014/06/20/article-0-1EEE989700000578-571_964x619.jpg',
  description: 'need description',
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
  description: 'need description',
  items: [],
  doors: {
    n: 'piano',
    w: 'bedroom',
    s: 'entry',
    e: 'bedroom2'
  }
};

const bedroom = {
  title: 'Bedroom',
  image: 'bedroom.jpg',
  //image: 'https://s-i.huffpost.com/gen/1108057/images/o-ABANDONED-FARMHOUSE-facebook.jpg',
  description: 'need description',
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
  description: 'need description',
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
  description: 'need description',
  items: [],
  doors: {
    w: 'secondFloor'
  }
};

const outside = {
  title: 'Outside',
  image: 'outside.jpg',
  //image: 'https://www.google.com/imgres?imgurl=http%3A%2F%2Flitcult.ru%2Fu%2Fdd%2Flyrics%2F35289%2Ffoto.jpg&imgrefurl=http%3A%2F%2Frifmer.com%2Fvne-konkursa%2Fvashe-tvorchestvo-ili-v-poiskax-pochitatelya%2F135815.html&docid=9Wm3ZAVmD5dJ_M&tbnid=CUdJ3W8bxX7r_M%3A&vet=10ahUKEwjIipK9q8XZAhVJ1mMKHebyCiIQMwgmKAAwAA..i&w=1500&h=1018&hl=en&bih=693&biw=894&q=creepy%20old%20abandoned%20mansions&ved=0ahUKEwjIipK9q8XZAhVJ1mMKHebyCiIQMwgmKAAwAA&iact=mrc&uact=8',
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