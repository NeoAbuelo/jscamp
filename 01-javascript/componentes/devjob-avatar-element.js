class DevJobsAvatarElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    render(){
        const service = this.getAttribute('service') ?? 'x';
        const username = this.getAttribute('username') ?? 'midudev';
        const size = this.getAttribute('size') ?? '40';

        this.shadowRoot.innerHTML = `
        <img
            src="https://unavatar.io/${service}/${username}"
            alt="Avatar de ${username}"
            class="avatar"
            style="width:${size}px; height:${size}px; border-radius:50%;"
        />
        `
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define('devjob-avatar', DevJobsAvatarElement);