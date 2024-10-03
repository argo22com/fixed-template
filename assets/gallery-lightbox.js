if (!customElements.get('gallery-lightbox')) {
    class GalleryLightbox extends HTMLElement {
        constructor() {
            super();

            this.addEventListener('click', this.onItemClick.bind(this));
        }

        onItemClick(event) {
            // add a condition for clicking on button span child containing button text
            if (!event.target.classList.contains('js-load-more-button') && !event.target.parentElement.classList.contains('js-load-more-button')) {
                return;
            }

            event.preventDefault();
            document.querySelectorAll('.js-gallery-row').forEach(row => row.style.display = 'flex');
            document.querySelector('.js-load-more-button').style.display = 'none';
        }
    }

    customElements.define('gallery-lightbox', GalleryLightbox);
}