import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
    static targets = ['content'];

    connect() {
        // Observer pour détecter les changements de l'attribut hidden
        this.observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes' && mutation.attributeName === 'hidden') {
                    if (this.contentTarget.hasAttribute('hidden')) {
                        this.close();
                    } else {
                        this.open();
                    }
                }
            });
        });

        this.observer.observe(this.contentTarget, {
            attributes: true,
            attributeFilter: ['hidden']
        });

        // État initial
        if (!this.contentTarget.hasAttribute('hidden')) {
            this.contentTarget.classList.add('opacity-100', 'scale-100');
        } else {
            this.contentTarget.classList.add('opacity-0', 'scale-95');
        }
    }

    disconnect() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }

    open() {
        requestAnimationFrame(() => {
            this.contentTarget.classList.remove('opacity-0', 'scale-95');
            this.contentTarget.classList.add('opacity-100', 'scale-100');
        });
    }

    close() {
        this.contentTarget.classList.remove('opacity-100', 'scale-100');
        this.contentTarget.classList.add('opacity-0', 'scale-95');
    }
}
