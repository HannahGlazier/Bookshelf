
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


//Listeners


// Fetchers
function fetchBooks(){
  return fetch(`https://www.googleapis.com/books/v1/volumes?q=LordOfTheRings`)
  .then(response => (response.json()))
  // .then(console.log)
}
 

//Render Functions
function renderAllBooks(bookObj){
  renderBookCard(bookObj.items)
}


function renderBookCard(bookObj){
  
  for (let i = 0; i < 10; i++){
  
  const authorH4 = document.createElement('h4')
  authorH4.textContent = ` Author Name: ${(bookObj[i]["volumeInfo"]["authors"])}`
  
  const thumb = document.createElement('img')
  thumb.src = bookObj[i]["volumeInfo"]["imageLinks"]["thumbnail"]
  
  const titleH3 = document.createElement('h3')
  titleH3.innerText  = `Book Title: ${bookObj[i]["volumeInfo"]["title"]}`



  //Making sidebar

 colThree.innerHTML = `
 <div class="master-item active-item"><img src=${bookObj[0]["volumeInfo"]["imageLinks"]["thumbnail"]}/></div> 
 <div class="master-item" ><img src=${bookObj[1]["volumeInfo"]["imageLinks"]["thumbnail"]}/></div>
 <div class="master-item" ><img src=${bookObj[2]["volumeInfo"]["imageLinks"]["thumbnail"]}/></div> 
 <div class="master-item" ><img src=${bookObj[3]["volumeInfo"]["imageLinks"]["thumbnail"]}/></div> 
 <div class="master-item" ><img src=${bookObj[4]["volumeInfo"]["imageLinks"]["thumbnail"]}/></div> 
 <div class="master-item" ><img src=${bookObj[5]["volumeInfo"]["imageLinks"]["thumbnail"]}/></div> 
 <div class="master-item" ><img src=${bookObj[6]["volumeInfo"]["imageLinks"]["thumbnail"]}/></div>
 <div class="master-item" ><img src=${bookObj[7]["volumeInfo"]["imageLinks"]["thumbnail"]}/></div> 
 <div class="master-item" ><img src=${bookObj[8]["volumeInfo"]["imageLinks"]["thumbnail"]}/></div> 
 <div class="master-item" ><img src=${bookObj[9]["volumeInfo"]["imageLinks"]["thumbnail"]}/></div>   
 `

 //Making selector

 


  //Likes Button
  const likesBttn = document.createElement('button')
  let likesCount = document.createElement('span')
  likesBttn.textContent = '♥'
  likesCount.textContent = 'Likes: '
  likesBttn.addEventListener('click', () => {
    likesCount.textContent = ++bookObj.likes // maybe need to define 'likes'
  })



 title.append(titleH3, authorH4, thumb, likesBttn, likesCount) 
 colNine.append(title)
 //titleH3, authorH4, thumb, likesBttn, likesCount

 
}}


// function renderDetail(bookObj){
//   colThree.addEventListener('click', ()=>{
//   }) 
// }
//   colNine = colThree.innerHTML



// function renderSideBar(bookObj){
//   colThree.innerHTML =  `<div class="master-item" onclick="select(this)"><img src ='${bookObj[0]["volumeInfo"]["imageLinks"]}'></div> `
// }

// //Event Handlers 



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






// // Initializers 
fetchBooks().then(bookObj => renderAllBooks(bookObj))





// Posible endpoints 
//https://www.googleapis.com/books/v1/volumes?q=${searchInput}&key=AIzaSyD0p5CvqgLLo1tlpljQoUJly-4aTkXI_bE
// `https://www.googleapis.com/books/v1/volumes?q=SecretHistory`






