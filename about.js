


var typed = new Typed(".auto-type-about",{
    strings : ["Food is one of my favourite things in the world. There was one memorable meal that still makes my mouth water, despite the fact that I have had a lot of pretty good meals in my life ."],
    typeSpeed : 145,
    backSpeed : 100
    })


    function myFunction(){
        var videocon = document.querySelector(".page1")
        var playbtn = document.querySelector("#play")
        
        videocon.addEventListener("mouseenter",function(){
        gsap.to(playbtn,{
            scale:1,
            opacity:1
        })
        })
        videocon.addEventListener("mouseleave",function(){
        gsap.to(playbtn,{
            scale:0,
            opacity:0
        })
        })
        videocon.addEventListener("mousemove",function(dets){
            gsap.to(playbtn,{
        left:dets.x-70,
        top:dets.y-80
            })
        })
        
    }
    
    
    myFunction()
    
    