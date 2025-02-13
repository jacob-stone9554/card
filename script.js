//initial start click
document.getElementById("clickMe").addEventListener("click", function () {
  //gsap code will go here :)

  //OPEN THE ENVELOPE
  gsap.to("polygon:nth-of-type(1)", {
    scaleY: -1,
    transformOrigin: "center",
    y: -200,
    duration: 1,
    delay: 0,
  });

  gsap.to("#heart", {
    scaleY: -1,
    transformOrigin: "center",
    y: -200,
    duration: 1,
    delay: 0,
  });

  //MOVE LETTER UP
  gsap.to("rect:nth-of-type(2), rect:nth-of-type(3), rect:nth-of-type(4)", {
    y: -300,
    duration: 1,
    opacity: 1,
    delay: 1,
  });

  gsap.to("text", {
   y: -300,
   duration: 1,
   delay: 1,
 });

 gsap.to("text:nth-of-type(1)", {
   opacity: 1,
   duration: 1,
   delay: 1,
 });

  gsap.to("image", {
    y: -300,
    opacity: 1,
    duration: 1,
    delay: 1,
  });

  gsap.to("line", {
    y: -300,
    duration: 1,
    delay: 1,
  });

  // MOVE ENVELOPE DOWN
  gsap.to(
    "polygon:nth-of-type(1), polygon:nth-of-type(2), polygon:nth-of-type(3), polygon:nth-of-type(4), rect:nth-of-type(1), rect:nth-of-type(5)",
    {
      y: 1200,
      duration: 1,
      delay: 3,
    }
  );

  // MOVE LETTER DOWN

  gsap.to("rect:nth-of-type(2), rect:nth-of-type(3), rect:nth-of-type(4)", {
    y: -175,
    duration: 1,
    delay: 4,
  });

  gsap.to("text", {
    y: -175,
    duration: 1,
    delay: 4,
  });

  gsap.to("image", {
    y: -175,
    opacity: 1,
    duration: 1,
    delay: 4,
  });

  gsap.to("line", {
   y: -175,
   duration: 1,
   delay: 4,
 });
});

//reset click
document.getElementById("reset").addEventListener("click", function () {
  gsap.to("polygon:nth-of-type(1)", {
    scaleY: 1,
    y: 0,
    duration: 0.5,
  });

  gsap.to("rect:nth-of-type(2), rect:nth-of-type(3), rect:nth-of-type(4)", {
    y: 0,
    duration: 1,
    opacity: 0,
    duration: 0.5,
  });

  gsap.to(
    "polygon:nth-of-type(1), polygon:nth-of-type(2), polygon:nth-of-type(3), polygon:nth-of-type(4), rect:nth-of-type(1), rect:nth-of-type(3), rect:nth-of-type(5)",
    {
      y: 0,
      duration: 0.5,
    }
  );

  gsap.to("#heart", {
    //                        transform="rotate(225 310, 190) scale(0.25)"
    scaleY: 0.25,
    rotation: 225,
    x: 400,
    y: 525,
    duration: 0.5,
  });

  gsap.to("text", {
    y: 0, // Reset text to original position
    opacity: 0,
    duration: 0.5,
  });

  gsap.to("image", {
    y: 0, // Reset text to original position
    opacity: 0,
    duration: 0.5,
  });

  gsap.to("line", {
   y: 0, // Reset text to original position
   opacity: 0,
   duration: 0.5,
 });

 gsap.to("image:nth-of-type(1)", {
   opacity: 1,
   duration: 0
})

gsap.to("image:nth-of-type(3)", {
   display: "none",
   duration: 0
});
});

//yes hover
document.getElementById("yes").addEventListener("mouseenter", () => {
  gsap.to("#yes", { scale: 1.1, duration: 0.2 });

  gsap.to("line:nth-of-type(1), line:nth-of-type(2)", { scale: 1.1, duration: 0.2 });
});

//yes leave
document.getElementById("yes").addEventListener("mouseleave", () => {
  gsap.to("#yes", { scale: 1, duration: 0.2 });
  gsap.to("line:nth-of-type(1), line:nth-of-type(2)", { scale: 1, duration: 0.2 });
});

//yes click
document.getElementById("yes").addEventListener("click", () => {
   gsap.to("line:nth-of-type(1), line:nth-of-type(2)", {
      opacity: 1,
      duration: 1
   });

   gsap.to("image:nth-of-type(1)", {
      opacity: 0,
      duration: 0
   })

   gsap.to("image:nth-of-type(3)", {
      display: "block",
      duration: 0
   });

   gsap.to("text:nth-of-type(1)", {
      opacity: 0,
      duration: 0
   });

   gsap.to("text:nth-of-type(2)", {
      opacity: 1,
      duration: 0
   });
});

//no-1 hover
