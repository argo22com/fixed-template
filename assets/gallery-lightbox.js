class GalleryLightbox extends HTMLElement {
    constructor() {
        super();

        this.addEventListener('click', this.onItemClick.bind(this));
    }

    onItemClick(event) {
        if (!event.target.classList.contains('js-load-more-button')) {
            return;
        }

        event.preventDefault();
        document.querySelectorAll('.js-gallery-row').forEach(row => row.style.display = 'flex');
        document.querySelector('.js-load-more-button').style.display = 'none';
    }
}

customElements.define('gallery-lightbox', GalleryLightbox);