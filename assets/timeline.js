if (!customElements.get('timeline-section')) {
    class TimeLine extends HTMLElement {
        constructor() {
            super();

            const listElement = document.querySelector('.js-timeline-blocks');
            const ordering = listElement.dataset.ordering;

            const toSort = [...listElement.children];
            toSort.sort((a, b) => {
                const sortA = +a.dataset.year;
                const sortB = +b.dataset.year;

                return ordering === 'asc' ? sortA - sortB : sortB - sortA;
            });

            listElement.innerHTML = "";

            for (let i = 0; i < toSort.length; i++) {
                const element = toSort[i];
                if (i % 2 !== 0) {
                    element.querySelector('.js-block').classList.add('reverse');
                }
                listElement.appendChild(element);
            }

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