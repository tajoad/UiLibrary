class Tabs {
    constructor(container) {
        this.container = container;
        this.trigger = container.querySelectorAll('.trigger');
        this.content = container.querySelectorAll('.content');
    }

    init() {
        this.trigger.forEach(tab => {
            tab.addEventListener('click', (e) => {
                this.toggleClass(e);
                this.toggleContent(e)
            })
        })
    }

    toggleClass(e) {
        this.trigger.forEach((tab) => {
            tab.classList.remove('active');
            // add new active tab
            e.target.classList.add('active');
        })
    }

    toggleContent(e) {
        this.content.forEach((cont) => {
            cont.classList.remove('active');
        });
        const selector = e.target.getAttribute('data-target');
        const conten = this.container.querySelector(selector);
        conten.classList.add('active');
    }
}

export { Tabs as default };