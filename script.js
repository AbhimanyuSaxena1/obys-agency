var tl=  gsap.timeline()
var count = 0
var b = 0
var now = document.querySelector(".line span")
var loader = document.querySelector("#loader")
tl.from(".line h1",{
    y:150,
    duration:.6,
    delay:0.2,
    stagger: .2
})
tl.from("#line1-part1",{
    opacity:0,
    duration:1.2,
    delay:-.4,
    onStart: function(){
        var counter = document.querySelector("#line1-part1 h3");
        count = 0;
        setInterval(function(){
            if(count < 100)
            {
                count++;
                document.querySelector("#line1-part1 h3").innerHTML = count; 
            }
            
        },40);
    },
})

tl.from("#bottomText h4",{
    opacity:0,
    duration:.8,
    delay:-.3
})
function FontChanger() {
    setInterval(function(){
        b == 0
        if(b%2==0 && b<=5)
        {   
            now.style.webkitTextStroke = "2px white";
            now.style.fontFamily = "silk serif";
            now.style.color = "black" 
        }
        else if(b%2 != 0 && b<=5)
        {   
            now.style.color = "white" 

            now.style.fontFamily = "plain light"; 
        }
        b++
    },450)}
FontChanger()

tl.to("#loader",{
    delay: .5,
    opacity:0
})
tl.from("#page1",{
    y:"150%",
    opacity:0,
    // backgroundColor:"Red"
})
tl.to("#loader",{
    display:none
})