
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
let colNine = document.querySelector('.col-9.detail')
let colThree = document.querySelector('.col-3.master')
let sideBarItem = document.querySelectorAll('.master-item')
let masterItem = document.querySelector('.master-item.active-item')


//Listeners


// Fetchers
function fetchBooks(searchInput){
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchInput}`)
  .then(response => (response.json()))
}
 

//Render Functions
function renderAllBooks(mainBookObj){
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

//   //Likes Button
//   const likesBttn = document.createElement('button')
//   let likesCount = document.createElement('span')
//   likesBttn.textContent = '♥'
//   likesCount.textContent = 'Likes: '
//   likesBttn.addEventListener('click', () => {
//     likesCount.textContent = ++bookObj.likes // maybe need to define 'likes'
//   })

}

function renderDetail(bookObj){
  colNine.innerHTML = " "

  const authorH4 = document.createElement('h4')
  authorH4.textContent = ` Author Name: ${(bookObj["volumeInfo"]["authors"])}`
  
  const thumb = document.createElement('img')
  thumb.src = bookObj["volumeInfo"]["imageLinks"]["thumbnail"]
  
  const titleH3 = document.createElement('h3')
  titleH3.innerText  = `Book Title: ${bookObj["volumeInfo"]["title"]}`

  const likesBttn = document.createElement('button')
//   let likesCount = document.createElement('span')
//   likesBttn.textContent = '♥'
//   likesCount.textContent = 'Likes: '
//   likesBttn.addEventListener('click', () => {
//     likesCount.textContent = ++bookObj.likes // maybe need to define 'likes'

  colNine.append(authorH4, thumb, titleH3)
 }
 


// //Event Handlers 



// // Initializers 
fetchBooks('Harry Potter').then(bookObj => {
  renderAllBooks(bookObj)
  renderDetail(bookObj.items[0])
})



// Posible endpoints 
//https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyD0p5CvqgLLo1tlpljQoUJly-4aTkXI_bE
// `https://www.googleapis.com/books/v1/volumes?q=SecretHistory`








// MASTER DETAIL TEST CODE

// const detail = document.querySelector('.detail');
// const detailTitle = document.querySelector('.detail-title');
// const masterItems = document.querySelectorAll('.master-item');


// function select(selected){

//     //Remove active class from all master-items
//     for(let item of bookObj){
//         item.classList.remove('active-item');
//     }

//     //Make selected tab active
//     selected.classList.add('active-item');

//     //Toggle the class that hides when the screen is medium size or less
//     detail.classList.remove('hidden-md-down');

//     //Set the content of the detail to the innerHTML of the selected item
//     detailTitle.innerHTML = selected.innerHTML;
// }

// function back(){
//     //Remove active class from all master-items
//     for(let item of bookObj){
//         item.classList.remove('active-item');
//     }
//     detail.classList.add('hidden-md-down');
// }
