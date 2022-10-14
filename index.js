const button = document.querySelector(".heart-like-button")
let html=document.getElementById("demo")
html.textContent="click me"


button.addEventListener("click", function like(){
    
  if (button.classList.contains("liked")) {
    button.classList.remove("liked")
    html.textContent="click me"
    
  } else {
    button.classList.add("liked")
    
    var deadline = new Date("Oct 11, 2023 09:11:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
html.textContent = days + "d " 
+ hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").textContent = "H"}
}, 1000); 
  }
})
