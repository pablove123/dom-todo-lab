const inp = document.querySelector("input")
const btn = document.querySelector("button")
const ul = document.querySelector("ul")

btn.addEventListener("click", function(text){
  const li = document.createElement("li")
  const input = document.querySelector("input")
  li.textContent = input.value
   document.querySelector("ul").appendChild(li)
   inp.value = " "
})