/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Daryn King 
      Date: Oct. 10, 2024

      Filename: project03-01.js
*/

let menuItem = document.getElementsByClassName("menuItem");

for(let i = 0; i<menuItem.length; i++) {
      menuItem[i].addEventListener("click", calcTotal)
}

function calcTotal() {
      let orderTotal = 0
      for(let i = 0; i<menuItem.length; i++) {
            if(menuItem[i].checked) {
                  orderTotal += Number(menuItem[i].value)
            }
      }
      document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal)
}

function formatCurrency(value) {
      return("$" + value.toFixed(2))
}




