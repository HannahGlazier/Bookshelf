
//Global Variables


//Containers
// const form = document.querySelector("form");
// form.addEventListener("submit", submitForm);
const container  = document.querySelector(".container-fluid") //BD -added for .append purposes
let author = document.querySelector('.author')
let title = document.querySelector('.title')
let thumbnail = document.querySelector('.img-thumbnail')
const bookCard = document.createElement('div')
const bookBar = document.getElementById('book-bar')

//Listeners


// Fetchers
function fetchBooks(){
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=SecretHistory`)
  .then(response => (response.json()))
  // .then(console.log)
}
 

//Render Functions
function renderAllBooks(bookObj){
  renderBookCard(bookObj.items)
}


function renderBookCard(bookObj){
  // for (let i = 0; i < 10; i++) {
  author.textContent = ` Author Name: ${(bookObj[0]["volumeInfo"]["authors"])}`
  thumbnail.src = bookObj[0]["volumeInfo"]["imageLinks"]["thumbnail"]
  

  
}
// }


function renderOneBook(bookObj){ //span bar
  const span = document.createElement('span')
  span.innerHTML = `<span>${bookObj.thumbnail}</span>`
  span.addEventListener("click", function () {
   renderBookCard(bookObj)
  
    });
  
  bookBar.appendChild(span, 'span')
  
}

console.log(bookBar)
function submitForm(){

}


// //Event Handlers 



// // Initializers 
fetchBooks().then(bookObj => renderAllBooks(bookObj))

// .then(bookArr => renderAllBooks(bookArr))



//https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyD0p5CvqgLLo1tlpljQoUJly-4aTkXI_bE

// `https://www.googleapis.com/books/v1/volumes?q=SecretHistory`



  // for (const i = 0; i < 10; i++) {
    // author.innerText = (bookObj[0]["volumeInfo"]["authors"])
    // author.innerText = (bookObj["items"][0]["volumeInfo"]["authors"])
    // (bookObj["items"][0]["volumeInfo"]["authors"]) 
    // title.innerText  = (bookObj["items"][1]["volumeInfo"]["title"]) || 'No title Disclosed'
    // try {
    // thumbnail.src = bookObj["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"] 
    // }
    // catch (err) {
    //     thumbnail.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Georgia_404.svg/1125px-Georgia_404.svg.png'
    // }
// }

// bookCard.id = bookObj.id
// thumbnail.src = bookObj.imageLinks
// author.textContent = bookObj.authors

// bookCard.append(thumbnail, author)
// container.appendChild(bookCard)