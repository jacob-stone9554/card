//initial start click
let count = 0;

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

  gsap.to("rect:nth-of-type(5)", {
    y: -300,
    duration: 1,
    delay: 1
  });

  gsap.to("text", {
   y: -300,
   duration: 1,
   delay: 1,
 });

 gsap.to("text:nth-of-type(1), text:nth-of-type(5), text:nth-of-type(6)", {
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

  gsap.to("image:nth-of-type(4), image:nth-of-type(5)", {
    y: -300,
    display: "none",
    duration: 1,
    delay: 0,
  });


  gsap.to("line", {
    y: -300,
    duration: 1,
    delay: 1,
  });

  // MOVE ENVELOPE DOWN
  gsap.to(
    "polygon:nth-of-type(1), polygon:nth-of-type(2), polygon:nth-of-type(3), polygon:nth-of-type(4), rect:nth-of-type(1), rect:nth-of-type(6)",
    {
      y: 1200,
      duration: 1,
      delay: 3,
    }
  );

  // MOVE LETTER DOWN

  gsap.to("rect:nth-of-type(2), rect:nth-of-type(3), rect:nth-of-type(4), rect:nth-of-type(5)", {
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
  count = 0;

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
    "polygon:nth-of-type(1), polygon:nth-of-type(2), polygon:nth-of-type(3), polygon:nth-of-type(4), rect:nth-of-type(1), rect:nth-of-type(3), rect:nth-of-type(6)",
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

gsap.to("image:nth-of-type(3), image:nth-of-type(4), image:nth-of-type(5), image:nth-of-type(6)", {
   display: "none",
   duration: 0
});

  //rect:nth-of-type4 -> display: inline; nth-of-type5 display: none
  gsap.to("rect:nth-of-type(4)", {
    display: "inline",
    duration: 0
  });

  gsap.to("rect:nth-of-type(5)", {
    display: "none",
    duration: 0
  });

  gsap.set("rect:nth-of-type(5)", {
    x: 0,
    y: 0
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

  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    shapes: ["heart"],
    colors: ["FFC0CB", "FF69B4", "FF1493", "C71585"],
  };
  
  confetti({
    ...defaults,
    particleCount: 50,
    scalar: 2,
  });
  
  confetti({
    ...defaults,
    particleCount: 25,
    scalar: 3,
  });
  
  confetti({
    ...defaults,
    particleCount: 10,
    scalar: 4,
  });

   gsap.to("line:nth-of-type(1), line:nth-of-type(2)", {
      opacity: 1,
      duration: 1
   });

   gsap.to("line:nth-of-type(3), line:nth-of-type(4)", {
    opacity: 0,
    duration: 0
   })

   gsap.to("image:nth-of-type(1), image:nth-of-type(4), image:nth-of-type(5), image:nth-of-type(6)", {
      opacity: 0,
      duration: 0
   })

   gsap.to("image:nth-of-type(3)", {
      display: "block",
      duration: 0
   });

   gsap.to("text", {
      opacity: 0,
      duration: 0
   });

   gsap.to("text:nth-of-type(5)", {
    opacity: 1,
    duration: 0
   });

   gsap.to("text:nth-of-type(2)", {
      opacity: 1,
      duration: 0
   });

   gsap.to("rect:nth-of-type(4)", {
    opacity: 0,
    duration: 0
   })
});

//no-1 hover
document.getElementById("no-1").addEventListener("mouseenter", () => {
   gsap.to("#no-1", { scale: 1.1, duration: 0.2 });
 
   gsap.to("line:nth-of-type(3), line:nth-of-type(4)", { scale: 1.1, duration: 0.2 });
 });

//no-1 hover
document.getElementById("no-1").addEventListener("mouseleave", () => {
   gsap.to("#no-1", { scale: 1, duration: 0.2 });
   gsap.to("line:nth-of-type(3), line:nth-of-type(4)", { scale: 1, duration: 0.2 });
 });

//no-1 click
document.getElementById("no-1").addEventListener("click", () => {
  //  gsap.to("line:nth-of-type(3), line:nth-of-type(4)", {
  //     opacity: 1,
  //     duration: 1
  //  });

   gsap.to("image:nth-of-type(1)", {
      opacity: 0,
      duration: 0
   })

   gsap.to("image:nth-of-type(4)", {
      display: "block",
      duration: 0
   });

   gsap.to("image:nth-of-type(4)", {
      display: "none",
      duration: 2,
      delay: 2
   });

   gsap.to("image:nth-of-type(5)", {
      display: "block",
      duration: 2,
      delay: 2
   });

   gsap.to("text:nth-of-type(1)", {
      opacity: 0,
      duration: 0
   });

   gsap.to("text:nth-of-type(3)", {
      opacity: 1,
      duration: 0
   });

   gsap.to("rect:nth-of-type(4)", {
    opacity: 0,
    duration: 0
   });

   gsap.to("rect:nth-of-type(5)", {
    opacity: 1,
    duration: 0
   });

   gsap.to("text:nth-of-type(6)", {
    opacity: 0,
    duration: 0
  });

  gsap.to("text:nth-of-type(7)", {
    opacity: 1,
    duration: 0
  });

  gsap.to("rect:nth-of-type(4)", {
    display: "none",
    duration: 0
  });

  gsap.to("rect:nth-of-type(5)", {
    display: "inline",
    duration: 0
  });
});


document.getElementById("no-2").addEventListener("click", () => {
  count++;

  if(count < 8) {
    const xBound = 250;
    const yBound = 65;

    let randX = Math.random() * (xBound - 50);
    let randY = Math.random() * (yBound - 50);

    gsap.to("rect:nth-of-type(5)", {
      x: randX,
      y: -randY
    });

    console.log(`${randX}, ${randY}`)
  }

  if(count == 8) { //disable at this point lol
    alert(count);
  }

  gsap.to("image:nth-of-type(5), image:nth-of-type(4)", {
    display: "none",
    duration: 0,
    delay: 0
  });

  gsap.to("image:nth-of-type(6)", {
    display: "block",
    duration: 0,
    delay: 0
  });

  gsap.to("text:nth-of-type(3)", {
    opacity: 0,
    duration: 0
  });

  gsap.to("text:nth-of-type(4)", {
    opacity: 1,
    duration: 0
  });
});