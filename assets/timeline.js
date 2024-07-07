if (!customElements.get('timeline-section')) {
    class TimeLine extends HTMLElement {
        constructor() {
            super();

            const swiper = new Swiper('.swiper-container', {
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            });
            console.log(swiper);
        }
    }

    customElements.define('timeline-section', TimeLine);
}