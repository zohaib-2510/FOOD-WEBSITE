var typed = new Typed(".auto-type",{
    strings : ["Most Precious Thing ."],
    typeSpeed : 150,
    backSpeed : 100,
    loop : true
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


function myOrg(){
    var a = document.getElementById("h1")
var b = document.getElementById("mu")

gsap.from("a",{
    y:-300
    
    }) 
    
    gsap.from("b",{
        x:-300
        
        }) 


}





myOrg()



    