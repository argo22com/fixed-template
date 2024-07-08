if (!customElements.get('timeline-section')) {

    const offset = (element) => {
        const rect = element.getBoundingClientRect();

        return {
            top: rect.top + (window.pageYOffset || document.documentElement.scrollTop),
            left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft),
        }
    }

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
                const block = element.querySelector('.js-block');
                if (i % 2 !== 0) {
                    block.classList.add('reverse');
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

            document.querySelectorAll('.js-block').forEach(block => {
                block.addEventListener('mouseenter', this.onHover.bind(this));
            })
        }

        onHover(event) {
            let minusPixels = 50;

            const t = event.target;
            const dataFor = t.dataset.for;
            const section = this;
            const sectionTop = offset(section).top;
            const blockTop = offset(t).top;
            const blockLeft = offset(t).left;
            if (t.classList.contains("reverse")) {
                minusPixels = -100;
            }
            let absoluteTop = (blockTop - sectionTop) / 2 - minusPixels;
            let absoluteLeft = blockLeft - 71;
            let element = document.querySelector(".timeline-hover-block#" + dataFor);

            element.style.top = absoluteTop + "px";
            element.style.left = absoluteLeft + "px";
            element.classList.add("active");

            document.querySelectorAll(".timeline-hover-block").forEach(el => {
                if (el !== element) {
                    el.classList.remove("active");
                }
            });

            t.addEventListener("mouseleave", function () {
                setTimeout(function () {
                    if (!element.classList.contains("active2")) {
                        element.classList.remove("active");
                    }
                }, 200);
            });

            element.addEventListener("mouseover", function () {
                this.classList.add("active2");
            });

            element.addEventListener("mouseleave", function () {
                if (!this.classList.contains("active2")) {
                    this.classList.remove("active");
                }
                this.classList.remove("active2");
            });

            section.addEventListener("mouseleave", function () {
                document.querySelectorAll(".timeline-hover-block").forEach(el => {
                    el.classList.remove("active", "active2");
                });
            });
        }
    }

    customElements.define('timeline-section', TimeLine);
}