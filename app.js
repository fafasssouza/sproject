// scroll animation
const menuItens = document.querySelectorAll('#headeID nav ul li a[href^="#"]')

menuItens.forEach(item => {
    item.addEventListener('click', scrollToOnClick)
})

function scrollToOnClick (event) {
    event.preventDefault()
    const animationScroll = getScrollElementTopByHref(event.target)

    scrollToPosition(animationScroll)
}

function scrollToPosition(data) {
    smoothScrollTo(0, data)
}

function getScrollElementTopByHref(element) {
        const id = element.getAttribute('href')
    return  document.querySelector(id).offsetTop

}

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

/* scroll load*/
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        }else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElemenets = document.querySelectorAll('.hidden')
hiddenElemenets.forEach((el) => observer.observe(el))
