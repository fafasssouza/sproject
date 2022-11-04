 /*scroll load*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElemenets = document.querySelectorAll('.hidden')
hiddenElemenets.forEach((el) => observer.observe(el))



function slideMove() {
  let windowHeith =  document.documentElement.clientWidth
  let windowidth = document.documentElement.clientWidth
  let slide = document.getElementById('first')
  let count = 0 
  
  const slideTime = setInterval(() => {
      count += 180
      if(count > 900) {
        count = 0
      }
    slide.style.marginLeft = `-${count}%`
  }, 4000)

  if(windowHeith < 600 && windowidth < 800) {
      clearInterval(slideTime)

      const slideTimeMobile = setInterval(() => {
        count += 100
        if(count > 500) {
          count = 0
        }
      slide.style.marginLeft = `-${count}vw`
    }, 4000)
  }
}
slideMove()


