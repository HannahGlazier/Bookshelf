//Global Variables
let baseURL = `https://www.googleapis.com/books/v1/volumes?q=`
let selectedBook;

//Containers

let author = document.querySelector('.author')
let title = document.querySelector('.title')
let thumbnail = document.querySelector('.img-thumbnail')
const bookCard = document.createElement('div')
const bookBar = document.getElementById('book-bar')
let colNine = document.querySelector('.col-9.detail')
let colThree = document.querySelector('.col-3.master')
let likeSpan = document.createElement('span')
let searchInput = document.querySelector('#search_book')
let searchForm = document.getElementById('search-form')
const reviewForm = document.getElementById('review-form')
let reviewInput = document.getElementById('review-input')
let reviewH4 = document.createElement('h4')
likeSpan.type = "Number"

//Listeners
searchForm.addEventListener('submit', handleSearch)
reviewForm.addEventListener('submit', handleReviews)

// Fetchers
function fetchBooks(searchInput){
  return fetch(baseURL + searchInput)
  .then(response => (response.json()))

}
 
//Render Functions
function renderAllBooks(mainBookObj){
  colThree.innerHTML = ' '
  mainBookObj.items.forEach(bookObj => renderBookCard(bookObj))
}

function renderBookCard(bookObj){
  
  let div = document.createElement('div')
  div.classList.add('master-item')

  let coverImg = document.createElement('img')
  coverImg.src = bookObj["volumeInfo"]["imageLinks"]["thumbnail"]

  div.append(coverImg)
  colThree.appendChild(div)

  div.addEventListener('click', () => {
    renderDetail(bookObj)
  })
}

function renderDetail(bookObj){
  selectedBook = bookObj

  colNine.innerHTML = " "   
  
  const authorH4 = document.createElement('h4')
  authorH4.textContent = ` Author Name: ${(bookObj["volumeInfo"]["authors"])}`
  
  const thumb = document.createElement('img')
  thumb.src = bookObj["volumeInfo"]["imageLinks"]["thumbnail"] || ' '
  
  const titleH3 = document.createElement('h3')
  titleH3.innerText  = `Book Title: ${bookObj["volumeInfo"]["title"]}`

  const descriptionP = document.createElement('p')
  descriptionP.innerText =  bookObj["volumeInfo"]['description'] || ' '

  const likesBttn = document.createElement('button')
  likesBttn.textContent = '♥'
  likesBttn.addEventListener('click', increaseLike)

  likeSpan.textContent = '0'
  
  reviewH4.textContent = 'Reviews: '

  colNine.append(titleH3, authorH4, thumb, descriptionP, reviewH4, likesBttn, likeSpan) 
}

function increaseLike(){

  let likes = Number(likeSpan.textContent)
  likes.innerHTML = " "
  likeSpan.textContent = '  ' + ++likes
  colNine.append(likeSpan)

}

// //Event Handlers 

function handleSearch(e){
  e.preventDefault()
  
  fetchBooks(searchInput.value).then(bookObj => {
    renderAllBooks(bookObj)
    renderDetail(bookObj.items[0])
  })
  e.target.reset()
}

function handleReviews(e){
  e.preventDefault()
}

function handleReviews(e){
  e.preventDefault()

  let reviewLi = document.createElement('li')
  reviewLi.textContent = `${reviewInput.value}`
  reviewH4.append(reviewLi)

  e.target.reset()
}


// // Initializers 
fetchBooks('JavaScript').then(bookObj => {
  renderAllBooks(bookObj)
  renderDetail(bookObj.items[0])
})
