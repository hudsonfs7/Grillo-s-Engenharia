// abre e fecha o menu ao clicar no hamburger

const nav = document.querySelector('#top nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

// abre os links do hamburguer

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}

// sombra no header ao dar scroll
const header = document.querySelector('#top')
const navHeight = header.offsetHeight
function shadowOnTop() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// rolagem lateral swiper
const swiper = new Swiper('.swiper', {
  slidesPerview: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboardE: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// scroll reveal - mostrar elementos quando der scroll

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home  .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)
// voltar ao topo
const arrowup = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 300) {
    arrowup.classList.remove('hideicon')
  } else {
    arrowup.classList.add('hideicon')
  }
}

// // menu ativo
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 3

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// const sections = document.querySelectorAll('main section[id]')
// function activateMenuAtCurrentSection() {
//   const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

//   for (const section of sections) {
//     const sectionTop = section.offsetTop
//     const sectionHeight = section.offsetHeight
//     const sectionId = section.getAttribute('id')

//     const checkEntry = checkpoint >= sectionTop
//     const checkOutin = checkpoint <= sectionTop + sectionHeight

//     if (checkEntry && checkOutin) {
//       document
//         .querySelector('nav ul li a[href*=' + sectionId + ']')
//         .classList.add('active')
//       console.log(sectionId)
//     } else {
//       document
//         .querySelector('nav ul li a[href*=' + sectionId + ']')
//         .classList.remove('active')
//     }
//   }
// }

// when scrool
window.addEventListener('scroll', () => {
  shadowOnTop()
  backToTop()
  activateMenuAtCurrentSection()
})
