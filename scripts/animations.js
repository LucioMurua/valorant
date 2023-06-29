gsap.registerPlugin(ScrollTrigger);

// function isDesktop() {
//     const mediaQuery = window.matchMedia('(min-width: 768px)'); // Ajusta el valor según tus necesidades
//     return mediaQuery.matches;
//   }

// if (isDesktop()) {
    
// }

// ============== NEWS ANIMATIONS =============

gsap.fromTo('.news__background',{y:-110},{
    y: 100,
    scrollTrigger:{
        trigger:'.news',
        scrub: true,
        // markers:true,
        start: 'top bottom',
        end: 'bottom top'
    }
})

gsap.from('.news__title',{
    y:'100%',
    delay:.5,
    scrollTrigger:{
        trigger: ".news__titleContainer",
        // markers: true,
        start:'top bottom'
    }
})

// ============= ACT ANIMATIONS ================
gsap.from('.act__title',{
    y:'100%',
    scrollTrigger:{
        trigger: ".act__titleContainer",
        // markers: true,
        start:'top bottom'
    }
})