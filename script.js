 



var crsr=document.querySelector("#cursor")
var blur=document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets)
{
crsr.style.left= dets.x+"px";
crsr.style.top= dets.y+"px";
blur.style.left= dets.x - 100 +"px";
blur.style.top= dets.y-100+"px";
})

var h4all=document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
   // console.log(elem)
   elem.addEventListener("mouseenter",function()
{
   crsr.style.scale= 3
   crsr.style.border= "1px solid  #fff"
   crsr.style.backgroundColor="transparent";
})

elem.addEventListener("mouseleave",function()
{
   crsr.style.scale= 3
   crsr.style.border= "1px solid  #fff"
   crsr.style.backgroundColor="transparent";
})

})



gsap.to("#nav",{
   backgroundColor:"#000",
   height:"150px",
   duration:0.5,
   scrollTrigger:{
    trigger:"#nav",
    scroller:"body",
   //  markers:true,
    start:"top -10%",
    end:"top -11%",
    scrub:2,
   },


});

gsap.to("#main",{
backgroundColor:"#000",
scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    markers:true,
    start:"top -25%",
    end:"top -70%",
    scrub:2,
},

   } )

   gsap.from("#about-us img,#about-us-in",{
y:90,
opacity:0,
duration:1,
stagger:0.4,
scrollTrigger:{
   trigger:"#about-us",
   scroller:"body",
   // marker:true,
   start:"top 60%",
   end:"top 58%",
   scrub :3,
},
})

gsap.from(".card",{
  scale:0.8,
   // opacity:0,
   duration:1,
   stagger:0.4,
   scrollTrigger:{
      trigger:".card",
      scroller:"body",
      // marker:true,
      start:"top 60%",
      end:"top 58%",
      scrub :3,
   },

   })

   gsap.from("#colon1",{
     y:-60,
     x:-60,
     scrollTrigger:{
       trigger:"#colon1",
      //  markers:true,
       start:"top 85%",
       end:"top 15%",
       scrub:3,

     },
   })

     gsap.from("#colon2",{
      y:60,
      x:60,
      scrollTrigger:{
        trigger:"#colon1",
       //  markers:true,
        start:"top 85%",
        end:"top 15%",
        scrub:3,
 
      },
   })

      gsap.from("#page4 h1", {
          y:50,
          scrollTrigger:{
            trigger:"#page4 h1",
           //  markers:true,
            start:"top 75%",
            end:"top 70%",
            scrub:3,
     
          },
      })

      