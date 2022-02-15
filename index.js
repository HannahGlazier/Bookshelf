
//Global Variables


//Containers
// const form = document.querySelector("form");
// form.addEventListener("submit", submitForm);
const container  = document.querySelector(".container-fluid") //BD -added for .append purposes
const author = document.getElementById('author')
const title = document.getElementById('title')
const thumbnail = document.getElementById('img-thumbnail')

//Listeners


// Fetchers
function fetchBooks(){
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=SecretHistory`)
  .then(response => (response.json()))
}
 

//Render Functions
function renderAllBooks(bookObj){
   console.log(bookObj.items)
 
}


function renderOneBook(bookObj){
  for (const i = 0; i < 10; i++) {
    author.innerText = (bookObj["items"][i]["volumeInfo"]["authors"]) || 'No Author Disclosed'
    title.innerText  = (bookObj["items"][i]["volumeInfo"]["title"]) || 'No title Disclosed'
    // try {
    // thumbnail.src = bookObj["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"] 
    // }
    // catch (err) {
    //     thumbnail.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Georgia_404.svg/1125px-Georgia_404.svg.png'
    // }
}}


function renderBookDetail(bookObj){

}
function submitForm(){

}


// //Event Handlers 



// // Initializers 
fetchBooks().then(bookObj => renderAllBooks(bookObj))

// .then(bookArr => renderAllBooks(bookArr))



//https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyD0p5CvqgLLo1tlpljQoUJly-4aTkXI_bE

// `https://www.googleapis.com/books/v1/volumes?q=SecretHistory`