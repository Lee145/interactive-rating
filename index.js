let num1 = document.querySelector(".num-1")
let num2 = document.querySelector(".num-2")
let num3 = document.querySelector(".num-3")
let num4 = document.querySelector(".num-4")
let num5 = document.querySelector(".num-5")
let submit = document.getElementById("submit")
let background = document.querySelector('.background');
let thanksBg  = document.querySelector(".thanks-bg")
let selected = document.getElementById("rating")
let again = document.getElementById("again")



num1.addEventListener("click", function() {
 let ratings =1
 if(num1 === ratings) {
   return ratings
 }
 selected.innerHTML =` <span id="rating">${ratings}</span>`
})
     

num2.addEventListener("click", function() {
   let ratings =2
   if(num2 === ratings) {
     return ratings
   }
   selected.innerHTML =` <span id="rating">${ratings}</span>`
  })
       
  num3.addEventListener("click", function() {
   let ratings =3
   if(num3 === ratings) {
     return ratings
   }
   selected.innerHTML =` <span id="rating">${ratings}</span>`
  })

  num4.addEventListener("click", function() {
   let ratings =4
   if(num4 === ratings) {
     return ratings
   }
   selected.innerHTML =` <span id="rating">${ratings}</span>`
  })

  num5.addEventListener("click", function() {
   let ratings =5
   if(num5 === ratings) {
     return ratings
   }
   selected.innerHTML =` <span id="rating">${ratings}</span>`
  })

  submit.addEventListener("click", () => {
  background.style.display ="none"
  thanksBg.style.display ="block"
   })

   again.addEventListener("click", function() {
    background.style.display ="block"
  thanksBg.style.display ="none"
   })
       
  
       
  
       
  
  











