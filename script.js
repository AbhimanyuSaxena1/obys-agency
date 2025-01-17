function LoaderAnimation(){
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
            now.style.transition="opacity 0.5 ease-in-out"
            now.style.webkitTextStroke = "2px white";
            now.style.fontFamily = "silk serif";
            now.style.color = "black" ;
            now.style.fontWeight= "500"
            
        }
        else if(b%2 != 0 && b<=5)
        {   
            now.style.opacity= "1"
            now.style.color = "white" 
            now.style.fontWeight= "400"
            now.style.fontFamily = "plain light"; 
            
        }
        b++;
    },450)}
    FontChanger()
    tl.to("#bottomText",{
        opacity:0,
        delay:.2,
        duration:.5,
    })
    tl.to(".line h1,.line h3,.line h2",{
        opacity:0,
        duration:.6,
        stagger:-.3,
    })
    
    tl.to("#loader",{
        opacity:0,
        delay:-.1
    })
    tl.from("#page1",{
        y:"150%",
        opacity:0,
        delay:-.5,
        duration:.8,
        transition: "ease-out 1"
        // backgroundColor:"Red"
    })    
    tl.from("nav",{
        opacity:0,
    })
    tl.from("#hero1 h4,#hero2 h4,#hero3 h2,#hero3 h3,#hero3 h4,#hero4 h4",{
        y:"120%",
        delay: -.7,
        stagger: .1
    })
    tl.to("#loader",{
        display: "none",
        // backgroundColor:"grey",
        
    })
    
}
LoaderAnimation()
function CursorAnimation(){
        
        document.addEventListener("mousemove",function(detail){
            gsap.to("#cursor",{
                left : detail.x,
                top : detail.y,
                // cursor : "none",

            })
        })
        Shery.makeMagnet("#nav2 h4" /* Element to target.*/, {
            //Parameters are optional.
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 1,
          });
          

}
CursorAnimation()
