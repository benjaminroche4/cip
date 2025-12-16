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

        requestAnimationFrame(() => {
            this.menuTarget.classList.remove('opacity-0', 'scale-95');
            this.menuTarget.classList.add('opacity-100', 'scale-100');
        });
    }

    close() {
        this.menuTarget.classList.remove('opacity-100', 'scale-100');
        this.menuTarget.classList.add('opacity-0', 'scale-95');

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
