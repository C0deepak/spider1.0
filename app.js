gsap.registerPlugin(ScrollTrigger);

gsap.to('img.bg', {
    scrollTrigger: {
        trigger: '.magic .planets-main',
        start: 'top top',
        end: 'bottom bottom',
        pin: 'img.bg'
    }
})
gsap.to('.box', {
    scrollTrigger: {
        trigger: '.magic .rest-all',
        start: 'top 12vh',
        end: 'bottom bottom',
        pin: '.box'
    }
})
gsap.to('img.rocket-bg', {
    scrollTrigger: {
        trigger: '.rocket',
        start: 'top top',
        end: 'bottom bottom',
        pin: 'img.rocket-bg'
    }
})
gsap.to('img.rp', {
    x: '100vw',
    scrollTrigger: {
        trigger: '.magic section.planet1',
        start: 'top 95%',
        scrub: 2,
    },
})
gsap.to('img.lp', {
    x: '-50vw',
    scrollTrigger: {
        trigger: '.magic section.planet1',
        start: 'top 95%',
        scrub: 2,
    },
})
gsap.to('img.mp', {
    y: '300vh',
    scrollTrigger: {
        trigger: '.magic section.planet1',
        start: 'top 95%',
        scrub: 2,
    },
})
gsap.to('.part1', {
    x: 30,
    duration: .5,
    background: 'linear-gradient(rgb(252, 223, 57), rgb(255, 145, 0))',
    color: '#222',
    'box-shadow': 'rgba(255, 255, 255, 0.2) 1px 1px 1px 1px',
    scrollTrigger: {
        trigger: '.magic section.planet1',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'restart reverse play reverse',
    },
})
gsap.to('.part2', {
    x: 30,
    duration: .5,
    background: 'linear-gradient(rgb(252, 223, 57), rgb(255, 145, 0))',
    color: '#222',
    'box-shadow': 'rgba(255, 255, 255, 0.2) 1px 1px 2px 2px',
    scrollTrigger: {
        trigger: '.magic section.planet2',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'restart reverse play reverse',
    },
})
gsap.to('.part3', {
    x: 30,
    duration: .5,
    background: 'linear-gradient(rgb(252, 223, 57), rgb(255, 145, 0))',
    color: '#222',
    'box-shadow': 'rgba(255, 255, 255, 0.2) 1px 1px 2px 2px',
    scrollTrigger: {
        trigger: '.magic section.planet3',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'restart reverse play reverse',
    },
})
gsap.to('img.mp', {
    x: '-100vw',
    scrollTrigger: {
        trigger: '.magic section.planet3',
        start: 'top 50%',
        scrub: 1,
    },
})
gsap.to('.part4', {
    x: 30,
    duration: .5,
    background: 'linear-gradient(rgb(252, 223, 57), rgb(255, 145, 0))',
    color: '#222',
    'box-shadow': 'rgba(255, 255, 255, 0.2) 1px 1px 2px 2px',
    scrollTrigger: {
        trigger: '.magic section.planet4',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'restart reverse play reverse',
    },
})
gsap.to('.part5', {
    x: 30,
    duration: .5,
    background: 'linear-gradient(rgb(252, 223, 57), rgb(255, 145, 0))',
    color: '#222',
    'box-shadow': 'rgba(255, 255, 255, 0.2) 1px 1px 2px 2px',
    scrollTrigger: {
        trigger: '.magic section.planet5',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'restart reverse play reverse',
    },
})
gsap.to('.part6', {
    x: 30,
    duration: .5,
    background: 'linear-gradient(rgb(252, 223, 57), rgb(255, 145, 0))',
    color: '#222',
    'box-shadow': 'rgba(255, 255, 255, 0.2) 1px 1px 2px 2px',
    scrollTrigger: {
        trigger: '.magic section.planet6',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'restart reverse play reverse',
    },
})
gsap.to('.part7', {
    x: 30,
    duration: .5,
    background: 'linear-gradient(rgb(252, 223, 57), rgb(255, 145, 0))',
    color: '#222',
    'box-shadow': 'rgba(255, 255, 255, 0.2) 1px 1px 2px 2px',
    scrollTrigger: {
        trigger: '.magic section.planet7',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'restart reverse play reverse',
    },
})
gsap.to('.part8', {
    x: 30,
    duration: .5,
    background: 'linear-gradient(rgb(252, 223, 57), rgb(255, 145, 0))',
    color: '#222',
    'box-shadow': 'rgba(255, 255, 255, 0.2) 1px 1px 2px 2px',
    scrollTrigger: {
        trigger: '.magic section.planet8',
        start: 'top 50%',
        end: 'bottom 50%',
        toggleActions: 'restart reverse play reverse',
    },
})


