const btnOne=document.querySelector(".one")
const btnTwo=document.querySelector(".two")
const btnThree=document.querySelector(".three")
const btnFour=document.querySelector(".four")
const body=document.querySelector("body")


btnOne.addEventListener("click",()=>{
    body.style.backgroundColor="red"
})


btnTwo.addEventListener("click",()=>{
    body.style.backgroundColor="yellow"
})


btnThree.addEventListener("click",()=>{
    body.style.backgroundColor="blue"
})



btnFour.addEventListener("click",()=>{
    body.style.backgroundColor="gray"
})