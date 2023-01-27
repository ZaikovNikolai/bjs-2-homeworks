class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() { 
        this.state = this.state * 1.5;
        }
     
    set state(i){
      if (i < 0) {
        this._state = 0; 
      } else if (i > 100) {
        this._state = 100;
      } else {
        this._state = i;
      }

    }
    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    type = "magazine";
    
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
    
}

class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book {
    type = "fantastic";
}

class DetectiveBook extends Book {
    type = "detective";
}

class Library extends PrintEditionItem { 
  constructor (name, releaseDate, pagesCount) {
      super(releaseDate, pagesCount);
      this.name = name;
      this.books = [];
  }
    
  addBook(book) {
    if (book.state > 30){
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    for(let i = 0; i < this.books.length; i++) {
        if(this.books[i][type] === value) {
            return this.books[i];
        } 
    }
    return null;
}

giveBookByName(bookName) {
    for(let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
             return  this.books.splice(i, 1)[0];
        }
    }
    return null;
}

}


class Student {
  constructor(name) {
      this.name = name;
      this.marks = {};
  }

  setSubject(subjectName) {
      if (this.marks.hasOwnProperty(subjectName) === true) {
          return console.log("Предмет уже существует.");
      }
      else {
          this.marks[subjectName] = [];
      }
  }
  
  addMark(mark, subjectName) {
      if (this.marks.hasOwnProperty(subjectName) !== true) {
          this.marks[subjectName] = [];
      }
      if ((typeof mark === 'number') && (mark >= 1) && (mark <= 5)) {
          this.marks[subjectName].push(mark);
      }
      else {
          return console.log("Неверная оценка");
      }
  }

  getAverageBySubject(subjectName) {
      if (this.marks.hasOwnProperty(subjectName) === true) {
          let sum = 0;
          let journal = this.marks[subjectName];
          journal.forEach((item) => sum += item);
          let averageBySubject = sum / journal.length;
          return averageBySubject;
      } else {
          return console.log("Нет такого предмета");
      }
  }

  getAverage() {
      let sum = 0;
      let journal = Object.values(this.marks);
      let resultMarks = [];
      journal.forEach((item) => resultMarks = [].concat(resultMarks, item));
      resultMarks.forEach((item) => sum += item);
      let average = sum / resultMarks.length;
      return average;
  }

  exclude(reason) {
      delete this.marks;
      this.excluded = reason;
  }
}
