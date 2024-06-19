//document.getElementById("count").innerText=5
// let count =5
// count =count +1
//console.log(count)

//initialize the count as 0
//listen for clicks on the increment button
//increment the count vsrisble when the button is clicked
//change the count-el in the HTML to reflect the new count
 let saveEl =document.getElementById("save-el") //pass in argument 
// console.log(countEl)
let countEl =document.getElementById('count-el')
 let count = 0

 function increment(){ 
    count = count + 1
   countEl.innerText = count
   }
   //create a function, save(), which logs out the count when it's called.
   function save (){ 
      let countStr =count + "-"
      saveEl.textContent += countStr
      countEl.textContent =0
      count = 0
   }
