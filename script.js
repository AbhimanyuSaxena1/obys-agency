function locomotiveScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
function LoaderAnimation() {
  var tl = gsap.timeline();
  var count = 0;
  var b = 0;
  var now = document.querySelector(".line span");
  var loader = document.querySelector("#loader");
  tl.from(".line h1", {
    y: 150,
    duration: 0.6,
    delay: 0.2,
    stagger: 0.2,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    duration: 1.2,
    delay: -0.4,
    onStart: function () {
      var counter = document.querySelector("#line1-part1 h3");
      count = 0;
      setInterval(function () {
        if (count < 100) {
          count++;
          document.querySelector("#line1-part1 h3").innerHTML = count;
        }
      }, 40);
    },
  });

  tl.from("#bottomText h4", {
    opacity: 0,
    duration: 0.8,
    delay: -0.3,
  });
  function FontChanger() {
    setInterval(function () {
      b == 0;
      if (b % 2 == 0 && b <= 5) {
        now.style.transition = "opacity 0.5 ease-in-out";
        now.style.webkitTextStroke = "2px white";
        now.style.fontFamily = "silk serif";
        now.style.color = "black";
        now.style.fontWeight = "500";
      } else if (b % 2 != 0 && b <= 5) {
        now.style.opacity = "1";
        now.style.color = "white";
        now.style.fontWeight = "400";
        now.style.fontFamily = "plain light";
      }
      b++;
    }, 450);
  }
  FontChanger();
  tl.to("#bottomText", {
    opacity: 0,
    delay: 0.2,
    duration: 0.5,
  });
  tl.to(".line h1,.line h3,.line h2", {
    opacity: 0,
    duration: 0.6,
    stagger: -0.3,
  });

  tl.to("#loader", {
    opacity: 0,
    delay: -0.1,
  });
  tl.from("#page1", {
    y: "150%",
    opacity: 0,
    delay: -0.5,
    duration: 0.8,
    transition: "ease-out 1",
    // backgroundColor:"Red"
  });
  tl.from("nav", {
    opacity: 0,
  });
  tl.from("#hero1 h4,#hero2 h4,#hero3 h2,#hero3 h3,#hero3 h4,#hero4 h4", {
    y: "120%",
    delay: -0.7,
    stagger: 0.1,
  });
  tl.to("#loader", {
    display: "none",
    // backgroundColor:"grey",
  });
}
function CursorAnimation() {
  const mainElement = document.querySelector("#main");
  const cursorElement = document.querySelector("#cursor");
    mainElement.addEventListener("mouseenter",function(){
      mainElement.style.cursor = "none";
    })

  mainElement.addEventListener("mousemove", function (detail) {
    gsap.to("#cursor", {
      x: detail.x,
      y: detail.y,
      // duration:"1s",
      // delay: "none",
      delay: -.5,
      
    });
  });
}
Shery.makeMagnet("#nav2 h4" /* Element to target.*/, {
  //Parameters are optional.
  // ease: "cubic-bezier(0.1, 1, 0.320, 1)",
  duration: 1,
});
function goeyEffect() {
  

  Shery.imageEffect(".image-div", {
    style: 5,
    
    // debug:true,
    config: {
      a: { value: 0.69, range: [0, 30] },
      b: { value: -0.71, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7666557722625823 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.31, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.44, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
    gooey: true,
  });
   
}

var push = 0;
function VidCursor(){
  var vidcontainer = document.querySelector("#vidContain");
  var vidCursor = document.querySelector("#vidCursor");
  var video = document.querySelector("#vidContain video")
  vidcontainer.addEventListener("mouseenter",function(){
  gsap.to("#cursor",{
    // opacity:0,
    scale:0
  })
    vidcontainer.addEventListener("mousemove", function(dets){
    gsap.to("#vidCursor",{
      left : dets.x - 450,
      top: dets.y - 200,
    })
  })
})
vidcontainer.addEventListener("mouseleave",function(){
  gsap.to("#cursor",{
    // opacity:1,
    scale:1
  })
  gsap.to("#vidCursor",{
    left: "72%",
    top:"-8%"
  })
})
vidcontainer.addEventListener("click",function(){
  if(push == 0)
  {
    video.play();
    video.style.opacity = 1;
    gsap.to("#vidContain #vidCursor",{
      scale : 0.5
    })
    vidCursor.innerHTML = `<i class="ri-pause-mini-line"></i>`;
    push = 1
  }
  else{
    video.pause();
    video.style.opacity = 0;
    
    gsap.to("#vidContain #vidCursor",{
      scale : 1
    })
    vidCursor.innerHTML = `<i class="ri-play-mini-fill"></i>`
    push = 0
  }
})
}
function flag(){
  document.querySelector("#one").addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      x : dets.x,
      y : dets.y
    })
  })
  var hero3 = document.querySelector("#hero3")
  hero3.addEventListener("mouseenter",function(){
    gsap.to("#flag",{
      opacity:1
    })
  })
  hero3.addEventListener("mouseleave",function(){
    gsap.to("#flag",{
      opacity:0
    })
  })
}
function footerAnimation() {

  var clutter = ""
  var clutter2 = ""
  document.querySelector("#footer-head h1").textContent.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  document.querySelector("#footer-head h1").innerHTML = clutter
  document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
    clutter2 += `<span>${elem}</span>`
  })
  document.querySelector("#footer h2").innerHTML = clutter2


  document.querySelector("#footer-head").addEventListener("mouseenter", function () {
    gsap.to("#footer-head h1 span", {
      opacity: 0,
      stagger: 0.01
    })
    gsap.to("#footer-head h2 span", {
      delay: 0.35,
      opacity: 1,
      stagger: 0.02
    })
    gsap.to(".footer-arrow",{
      marginLeft:"8vw",
      delay:.5
    })
  })
  document.querySelector("#footer-head").addEventListener("mouseleave", function () {
    gsap.to("#footer-head h1 span", {
      opacity: 1,
      stagger: 0.02,
      delay: 0.2,

    })
    gsap.to("#footer h2 span", {
      opacity: 0,
      stagger: 0.01
    })
    gsap.to(".footer-arrow",{
      marginLeft:"4vw",
      delay:.5
    })
  })
}

CursorAnimation();
LoaderAnimation();
locomotiveScrollTrigger();
VidCursor();
goeyEffect();
flag()
footerAnimation();


