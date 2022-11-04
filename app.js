
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


//show and hide intinerary od class
function show_Hide_content() {
  const week_Bottons = document.querySelector('#week-btn-div-id')
  const label_week_btn = document.querySelectorAll('#label-div label')

  //monday
  const monday = document.getElementById('monday-btn')
  const monday_content = document.getElementById('monday-content')

  //tuesday
  const tuesday = document.getElementById('tuesday-btn')
  const tuesday_content = document.getElementById('tuesday-content') 

  //wednesday
  const wednesday = document.getElementById('wednesday-btn')

  //thursday
  const thursday = document.getElementById('thursday-btn')

  //saturday
  const saturday = document.getElementById('saturday-btn')
  const saturday_content = document.getElementById('saturday-content')


  monday.addEventListener('click', () => {
    removeElemnt()

    monday_content.style.display = 'block'
    label_week_btn[0].classList.add('select')
  })

  tuesday.addEventListener('click', () => {
    removeElemnt()

    tuesday_content.style.display = 'block'
    label_week_btn[1].classList.add('select')
  })

  wednesday.addEventListener('click', () => {
    removeElemnt()

    monday_content.style.display = 'block'// because yours texts iqual
    label_week_btn[2].classList.add('select')
  })

  thursday.addEventListener('click', () => {
    removeElemnt()

    tuesday_content.style.display = 'block'// because yours texts iqual
    label_week_btn[3].classList.add('select')
  })

  saturday.addEventListener('click', () => {
    removeElemnt()

    saturday_content.style.display = 'block'
    label_week_btn[4].classList.add('select')
  })

  function removeElemnt() {
    for(let i=0; i < week_Bottons.childElementCount; i++) {
      monday_content.style.display = 'none'
      tuesday_content.style.display = 'none'
      saturday_content.style.display ='none'

      label_week_btn[0].classList.remove('select')
      label_week_btn[1].classList.remove('select')
      label_week_btn[2].classList.remove('select')
      label_week_btn[3].classList.remove('select')
      label_week_btn[4].classList.remove('select')

    }
  }
}
show_Hide_content()