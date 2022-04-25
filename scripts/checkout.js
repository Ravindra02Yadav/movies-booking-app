// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
// 
document.getElementById("wallet").innerText=localStorage.getItem("booked");

let movies = document.getElementById("movie")
let bookedData = JSON.parse(localStorage.getItem("booked"))
let box = document.createElement("div");

let title = document.createElement("p");
title.innerText = bookedData.Title;

let image = document.createElement("img");
image.src = bookedData.Poster;

box.append(image,title);

movies.append(box);


let amount=Number(localStorage.getItem('amount'))
document.querySelector("form").addEventListener("submit",function(event){
event.preventDefault();
let seats=document.getElementById("number_of_seats").value;
let total=100*Number(seats);
console.log(total)
price.innerText=total;
setTimeout(()=>{
if(amount<total){
window.alert("insufficient funds")
}
else if(amount>=total){
window.alert("Booking Success")
}
document.getElementById("wallet").innerText=localStorage.getItem("amount")-total;
},500)

})
