document.getElementById("clickMe").addEventListener("click", function() {
    //gsap code will go here :)

    gsap.to("polygon:nth-of-type(1)", {
        scaleY: -1,
        transformOrigin: "center",
        y: -200,
        duration: 1,
        delay:0
    });

     gsap.to("#heart", {
        scaleY: -1,
        transformOrigin: "center",
        y: -200,
        duration: 1,
        delay:0
     });

     gsap.to("rect:nth-of-type(2)", {
        y: -300,
        duration: 1,
        opacity: 1,
        delay: 1
     });


     gsap.to("polygon:nth-of-type(1), polygon:nth-of-type(2), polygon:nth-of-type(3), polygon:nth-of-type(4), rect:nth-of-type(1), rect:nth-of-type(3)", {
        y:1200,
        duration: 1,
        delay: 3
     });

     gsap.to("rect:nth-of-type(2)", {
        duration: 0.5,
        delay: 4
     });

     gsap.to("rect:nth-of-type(2)", {
        y: -175,
        duration: 1,
        delay: 5
     });
 
});

document.getElementById("reset").addEventListener("click", function() {
    gsap.to("polygon:nth-of-type(1)", {
        scaleY: 1,
        y: 0,
        duration: 0.5
    });

    gsap.to("rect:nth-of-type(2)", {
        y: 0,
        duration: 1,
        opacity: 0,
        duration: 0.5
     });

     gsap.to("polygon:nth-of-type(1), polygon:nth-of-type(2), polygon:nth-of-type(3), polygon:nth-of-type(4), rect:nth-of-type(1), rect:nth-of-type(3)", {
        y:0,
        duration: 0.5,
     });

    gsap.to("#heart", {
        //                        transform="rotate(225 310, 190) scale(0.25)"
        scaleY: 0.25,
        rotation: 225,
        x: 400,
        y: 525,
        duration:0.5
    });
});