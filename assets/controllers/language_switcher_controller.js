import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['menu'];

    connect() {
        this.closeTimeout = null;
    }

    open() {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = null;
        }
        this.menuTarget.classList.remove('hidden');
    }

    close() {
        this.closeTimeout = setTimeout(() => {
            this.menuTarget.classList.add('hidden');
        }, 150);
    }

    cancelClose() {
        if (this.closeTimeout) {
            clearTimeout(this.closeTimeout);
            this.closeTimeout = null;
        }
    }
}
