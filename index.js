const button = document.querySelector(".heart-like-button")
let html=document.getElementById("demo")
html.textContent="click me"


button.addEventListener("click", function like(){
    
  if (button.classList.contains("liked")) {
    button.classList.remove("liked")
    html.textContent="click me"
    
  } else {
    button.classList.add("liked")
    
    var deadline = new Date("Oct 11, 2022 09:11:00").getTime();
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
        document.getElementById("demo").textContent = "Hey , Aashika jain ,You know i worry alot, earlier i went down the lake and sat there alone with my thoughts, I felt like someone without a home, a nobody, but the kind of love you give me just keeps me motivated, all I will ever need is you, thank you for being there for me, thankyou for being my home.I just wanna let you know that the bond we share is something that i cherish everyday , i wake up with a happy face and sleep even happier , i sing songs aloud and dance to them too and this newfound confidence is just because of you .I may be happier earlier but i am transforming to a even better person every single day. You too are a whole package and  today we will finally meet . I love you so much!"
    }
}, 1000); 
  }
})
