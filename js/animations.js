gsap.registerPlugin(ScrollTrigger);

gsap.from('.content h1, .content p', {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3,
    scrollTrigger: {
        trigger: '#home',
        start: 'top center',
    }
});

gsap.from('.gallery-item', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '#gallery',
        start: 'top center',
    }
});