document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger)

    /* Testimonials Slider */
    const testimonialsSwiper = new Swiper(".testimonials-slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                centeredSlides: false,
                spaceBetween: 30,
            },
            1024: {
                spaceBetween: 50,
            },
        },
    });

    /* GSAP animation */
    let animationContainers = document.querySelectorAll('.animationContainer');

    if(animationContainers.length > 0) {
        animationContainers.forEach((section) => {

            let fadeInUpElements = section.querySelectorAll(".fadeInUp");
            let fadeInUpScaleElements = section.querySelectorAll(".fadeInUpScale");

            let animationTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top center",
                    end: "+=300",
                    scrub: 1,
                },
            })

            fadeInUpElements.forEach((el) => {
                animationTimeline.fromTo(el, {
                    opacity: 0,
                    duration: 0.3,
                    y: 50
                }, {
                    opacity: 1,
                    y: 0
                }, "+=2");
            });

            fadeInUpScaleElements.forEach((el) => {
                gsap.fromTo(el,
                    {
                        autoAlpha: 0,
                        scale: 0.9,
                        y: 50
                    },
                    {
                        scrollTrigger: {
                            trigger: section,
                            start: "top center",
                            end: "top bottom",
                        },
                        autoAlpha: 1,
                        scale: 1.1,
                        duration: 0.3,
                        onComplete: function () {
                            gsap.to(el, {scale: 1, duration: 0.5});
                        }
                    });
            })
        });
    }

    //Ribbon

    let ribbonItems = document.querySelectorAll('.ribbon__item');

    if (ribbonItems.length > 0) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.ribbon',
                start: "top bottom",
                end: "+=1000",
                scrub: 1,
                toggleActions: "play pause resume reset",
            },
        });

        tl.fromTo(ribbonItems[0], {
            rotationZ: 2,
            xPercent: 0,
            duration: 1
        }, {
            rotationZ: 0,
            xPercent: -20,
        }, '<');

        tl.fromTo(ribbonItems[1], {
            rotationZ: -2,
            xPercent: -47,
            duration: 1
        }, {
            rotationZ: 2,
            xPercent: 0,
        }, '<');
    }

    //Quote Section

    let quoteSections = document.querySelectorAll('.quote');

    if (quoteSections.length > 0) {
        quoteSections.forEach((section) => {
            gsap.to((section), {
                scrollTrigger:{
                    trigger: section,
                    pin: '.about',
                    pinSpacing: false,
                    start: "top bottom",
                    end: "bottom bottom",
                    toggleActions: "play pause play reverse",
                }
            })
        })
    }

});