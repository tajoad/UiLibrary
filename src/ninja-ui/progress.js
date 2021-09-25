class ProgressBar {
    constructor(container) {
        this.container = container;
        this.progress = container.querySelector('.progress-bar');
    }

    init() {
        let width = 0;
        const interval = () => {
            if (width >= 100) {
                clearInterval();
            } else {
                let set = this.progress.style.width = ++width + '%';
                this.progress.textContent = `${set}`;
                this.progress.classList.add('progress-bar-striped');
            }
        };
        setInterval(interval, 100);
    }
}

export { ProgressBar as default };