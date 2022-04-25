// Store the wallet amount to your local storage with key "amount"

function addWallet(){
    let preBalance = Number(localStorage.getItem("amount")) || 0
 let amount = Number(document.getElementById("amount").value) 
 let total = amount + preBalance;

window.location.reload()
//  console.log(amount)
localStorage.setItem("amount",Number(total));

}
let output = document.getElementById("wallet")
output.innerText = localStorage.getItem("amount")
