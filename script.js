function navAnimation(){
    var nav = document.querySelector("nav")
    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()
    
        tl.to("#nav-bottom", {
            height: "25vh",
            duration: 0.5
        })
        tl.to(".nav-part2 h5", {
            display: "block",
            duration: 0.1
    
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.5
            }
        })
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.2
        })
    })
    
}
//calling animation function
navAnimation()

function imgAnimation(){
    var rightElems = document.querySelectorAll(".right-elem") 
    rightElems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            // console.log(elem.childNodes[3])
            // elem.childNodes[3].style.opacity = 1
            gsap.to(elem.childNodes[3],{
                opacity:1,
                scale:1,
            })
        })
        elem.addEventListener("mouseleave",function(){
            // elem.childNodes[3].style.opacity = 0
            gsap.to(elem.childNodes[3],{
                opacity:0,
                scale:0,
            })
        })
        elem.addEventListener("mousemove",function(dets){
            gsap.to(elem.childNodes[3],{
               x:dets.x - elem.getBoundingClientRect().x -35,
               y:dets.y - elem.getBoundingClientRect().y -100, 
            })
        })
    })
}
//calling image animation
imgAnimation()

function page3Animtion(){

    var page3Center = document.querySelector(".page3-center")
    var video = document.querySelector("#page3 video")
    
    page3Center.addEventListener("click",function(){
        video.play()
        gsap.to(video,{
            transform: "scaleX(1) scaleY(1)",
            opacity:1,
            borderRadius:0
        })
    })
    video.addEventListener("click",function(){
        video.pause()
        gsap.to(video,{
            transform: "scaleX(0.2) scaleY(0)",
            opacity:0,
            borderRadius:"30"
        })
    })
}

//calling page3 animation
page3Animtion()

function textAnmation(){
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(".pagetext-left h2 span", {
    //     x: 100, // Moves each <span> 100px to the right
    //     opacity: 1, // Fade-in effect
    //     // duration: 1,
    //     stagger: {
    //         amount:0.5
    //     }, // Animates each <h4> in sequence
    //     scrollTrigger: {
    //         trigger: "#pagetext", // The element that triggers the animation
    //         start: "top 25%", // Start when the top of #page2 reaches 25% of the viewport height
    //         end: "top top", // End when the top of #page2 reaches the top of the viewport
    //         scrub: true, // Smooth animation tied to the scroll position
    //     },
    // });
    gsap.registerPlugin(ScrollTrigger);

    // Scroll-based Animation
    gsap.timeline({
      scrollTrigger: {
        trigger: "#pagetext", // Element that triggers the animation
        start: "top 70%", // Animation starts when #pagetext reaches 25% of the viewport height
        end: "top top", // Animation ends when #pagetext reaches the top of the viewport
        scrub: true, // Smooth animation tied to scroll position
      }
    })
      .to("#pagetext", {
        duration: 0.5, // Animates the height of the container
      })
      .to(".pagetext-left h2 span", {
        y: 0, // Moves spans back into their original position
        opacity: 1, // Fades spans into view
        stagger: {
          amount: 0.5, // Animates spans in sequence with a delay
        },
      });


}



//calling text animation
textAnmation()

function imgVideo(){
    var sections = document.querySelectorAll(".sec-right")

    sections.forEach(function(elem){
     elem.addEventListener("mouseenter",function(){
        // console.log(elem.childNodes[1])
        // console.log(elem.childNodes[3])
    
        elem.childNodes[3].style.opacity =1
        elem.childNodes[3].play()
    
     })
     elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity =0
        elem.childNodes[3].load()
    
     })
    })
}
//calling imgVideo function
imgVideo()

