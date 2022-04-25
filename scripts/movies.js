// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let wallAmount = JSON.parse(localStorage.getItem("amount"))
let moviesDisplay = document.getElementById("movies");
let id;

// http://www.omdbapi.com/?t=thor&apikey=ec1f7565
async function searchMovies(){
   try{
 const search = document.getElementById("search").value;
//  console.log(query)
 const res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=ec1f7565`)
const data = await res.json();


    const movies = data.Search
    console.log(movies)
return movies;


   }
   catch(err){
       console.log(err);
   }

}

function appendMovies(data){
    moviesDisplay.innerHTML = null;
    data.forEach(function(elem){
 let box = document.createElement("div");

let title = document.createElement("h2");
title.innerText = elem.Title;

let image = document.createElement("img");
image.src = elem.Poster;

let price=document.createElement("h2");
price.innerText=100;
elem.Price=100;

let bookBtn = document.createElement("button")
bookBtn.innerText = "Book Now"

bookBtn.addEventListener("click",()=>{
    // console.log(elem)
localStorage.setItem("booked",JSON.stringify(elem))
    window.location.href = "checkout.html"
});
    

box.append(image,title,price,bookBtn);

moviesDisplay.append(box);
    });
}






async function main(data){
   data = await searchMovies()
    if(data == undefined){
        return false;
    }
   appendMovies(data);
}




function debounce(func,delay){
    // if(id == undefined){
    //     return 
    // }
    if(id){
        clearTimeout(id);
    }
   id = setTimeout(function(){
        func();
    },delay)
}


