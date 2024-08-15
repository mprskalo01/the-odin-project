function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.sayInfo = function () {
    return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.isRead}`)
  }
}

const hobbit = new Book("The Hobbit", "J.R.R.Tolkien", 295, "Yes I read it")

console.log(hobbit.sayInfo())

