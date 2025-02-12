document.getElementById("clickMe").addEventListener("click", function() {
    //gsap code will go here :)

    gsap.to("polygon:nth-of-type(4)", {
        scaleY: -1,
        transformOrigin: "center",
        y: -200,
        duration: 1,
        delay:0
    });
});

document.getElementById("reset").addEventListener("click", function() {
    gsap.to("polygon:nth-of-type(4)", {
        scaleY: 1,
        y: 0,
        duration: 0.5
    });
});