const menu=document.getElementById("menu")
const hambuerguer=document.getElementsByClassName("hambuerguer")[0]
hambuerguer.addEventListener("click",function(){
  menu.classList.toggle("active")
})