const myLibrary = [
  new Book('The Hobbit', 'J. R. R. Tolkien', 310, false),
  new Book('A Song of Ice and Fire', 'G. R. R. Martin', 464, true),
  new Book('To Kill a Mockingbird', 'Harper Lee', 281, false),
  new Book('1984', 'George Orwell', 328, true),
]
const addButton = document.querySelector('.addBook')
const dialog = document.querySelector('#dialog')
const closeButton = document.querySelector('#close')
const bookContainer = document.querySelector('.bookContainer')

addButton.addEventListener('click', () => {
  dialog.showModal()
})

closeButton.addEventListener('click', (e) => {
  // e.preventDefault()
  dialog.close()
})

function Book(title, author, pages, isRead) {
  this.title = title
  this.author = author
  this.pages = pages
  this.isRead = isRead
  this.toggleRead = function () {
    if (this.isRead) {
      this.isRead = false
    } else {
      this.isRead = true
    }
  }
}

function addBookToLibrary() {
  const bookTitleInput = document.querySelector('#bookTitleInput')
  const bookAuthorInput = document.querySelector('#bookAuthorInput')
  const pagesInput = document.querySelector('#pagesInput')
  const isReadInput = document.querySelector('#isReadInput')

  // add check for the inputs if any is not valid, make sure the user inputs them
  const inputBook = new Book(
    bookTitleInput.value,
    bookAuthorInput.value,
    pagesInput.value,
    isReadInput.checked
  )
  myLibrary.push(inputBook)
  displayBooks()
}

function displayBooks() {
  bookContainer.textContent = ''
  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement('div')
    bookCard.classList.add('bookCard')

    const bookTitle = document.createElement('h1')
    bookTitle.classList.add('bookTitle')
    bookTitle.textContent = book.title
    bookCard.appendChild(bookTitle)

    const bookAuthor = document.createElement('h2')
    bookAuthor.classList.add('author')
    bookAuthor.textContent = book.author
    bookCard.appendChild(bookAuthor)

    const pages = document.createElement('p')
    pages.classList.add('pages')
    pages.textContent = `Number of pages: ${book.pages}`
    bookCard.appendChild(pages)

    const status = document.createElement('p')
    status.classList.add('readStatus')
    status.textContent = `Status: ${book.isRead ? 'Read' : 'Not read yet'}`
    bookCard.appendChild(status)

    const toggleReadStatusButton = document.createElement('button')
    toggleReadStatusButton.textContent = 'Toggle Read'
    toggleReadStatusButton.classList.add('toggleReadBtn')
    toggleReadStatusButton.addEventListener('click', () =>
      toggleReadStatus(index)
    )
    bookCard.appendChild(toggleReadStatusButton)

    const removeBookButton = document.createElement('button')
    removeBookButton.textContent = 'Remove book'
    removeBookButton.classList.add('removeBookBtn')
    removeBookButton.addEventListener('click', () => removeBook(index))
    bookCard.appendChild(removeBookButton)

    bookContainer.appendChild(bookCard)
  })
}

function toggleReadStatus(index) {
  myLibrary[index].toggleRead()
  displayBooks()
}
function removeBook(index) {
  myLibrary.splice(index, 1)
  displayBooks()
}

displayBooks()
