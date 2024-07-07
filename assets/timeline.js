if (!customElements.get('timeline-section')) {
    class TimeLine extends HTMLElement {
        constructor() {
            super();

            const swiper = new Swiper('.swiper-container', {});
            console.log(swiper);
        }
    }

    customElements.define('timeline-section', TimeLine);
}