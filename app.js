class Media {
  constructor(title) {
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }
  get ratings() {
    return this._ratings;
  }
  get title() {
    return this._title;
  }
  get isCheck() {
    return this._isCheckedOut;
  }

  set isCheckedOut(value) {
    return (this._isCheckedOut = value);
  }
  toggleCheckOutStatus() {
      this._isCheckedOut = !this.isCheckout;
  }
  getAverageRating() {
    let ratingsSum = this._ratings.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    return ratingsSum / this._ratings.length;
  }
  addRating(value) {
    this._ratings.push(value);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(title, director, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book('Bill Bryson', 'A short History of Nearly Everything', 544)
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheck);
historyOfEverything.addRating(4)
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)
console.log(historyOfEverything.getAverageRating())
let i = historyOfEverything.getAverageRating()
//movie
const speed = new Movie('Speed', 'Jan de Bont', 116)
speed.toggleCheckOutStatus();
console.log(speed.isCheck)
speed.addRating(1)
speed.addRating(1)
speed.addRating(5)
console.log(speed.getAverageRating());
let u = speed.getAverageRating();
if(i>u){
  console.log(`It seems the book ${historyOfEverything.title} is more popular than the movie ${speed.title}!`)
}else{
  console.log(`It seems the movie ${speed.title} is more popular than the book ${historyOfEverything.title}!`)
}

