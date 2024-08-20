if (!customElements.get('successor-select')) {

    const toggleHide = (element) => {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            return;
        }

        element.classList.add('hidden');
    }

    class SuccessorSelect extends HTMLElement {
        constructor() {
            super();

            document.addEventListener('click', this.onClick.bind(this));
        }

        onClick(event) {
            // clicking on the successor select
            if (event.target.classList.contains('js-successor-select')) {
                toggleHide(this.querySelector('.js-successor-list'));
                return;
            }

            // clicking on some item in the successor select
            if (event.target.closest('.js-successor-list')) {
                return;
            }

            this.querySelector('.js-successor-list').classList.add('hidden');
        }
    }

    customElements.define('successor-select', SuccessorSelect);
}