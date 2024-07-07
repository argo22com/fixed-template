if (!customElements.get('timeline-section')) {
    class TimeLine extends HTMLElement {
        constructor() {
            super();

            new Swiper('.swiper-container', {
                loop: false,
                autoplay: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    480: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1023: {
                        slidesPerView: 4,
                    },
                    1300: {
                        slidesPerView: 5,
                    },
                },
            });
        }
    }

    customElements.define('timeline-section', TimeLine);
}