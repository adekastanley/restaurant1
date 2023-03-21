
const toggler = document.querySelector(".nav-btn");
let rotated = false
toggler.addEventListener('click', ()=> {
  let lines = toggler.children
  // console.log(lines[0])
  if (rotated) {
    lines[0].style.transform =' rotate(0deg)'
    lines[2].style.transform =' rotate(0deg)'
    lines[1].style.opacity = 1



    toggler.style.height =' 3rem'
    rotated = false
  } else {

    lines[0].style.transform = ' rotate(45deg)'
    lines[2].style.transform =' rotate(-45deg)'
    lines[1].style.opacity =0
    toggler.style.height =' 1.7rem'


    rotated = true

  }


})


gsap.timeline()
.to(".nav-container", {
  delay: 3,
  duration: 1,
  opacity: 1,
  yPercent: "BezierEasing(0.19,1,0.22,1)",
}, );

let closed = true;
toggler.addEventListener("click", () => {
  if (closed) {
    closed = false;
    gsap.timeline().to(".ul-wrapper", {
      x: 0,
    });
  } else {
    closed = true;
    gsap.timeline().to(".ul-wrapper", {
      x: -400,
    });
  }
})
