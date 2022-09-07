let hour = document.getElementById("hour")
let min = document.getElementById("min")
let second = document.getElementById("second")
let h3 = document.querySelector('.h3')
let btn = document.getElementById("btn")
let time = document.querySelectorAll(".time")



// clock 

  
  function clock(){
    const time = new Date();
    let h = time.getHours()
    hour.innerText = h + " h"


    let m = time.getMinutes()
    min.innerText = m + " m"

    let s = time.getSeconds()
    second.innerText = s + " s" 


  }

  setInterval(clock, 1000)



  //  Dark Mode


  btn.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "black"
    btn.style.backgroundColor = "white"
    btn.style.color = "black"
    h3.style.color = "white"


    time.forEach(times =>{
        times.style.backgroundColor = "white"
        times.style.color= "black"
    })
  })
