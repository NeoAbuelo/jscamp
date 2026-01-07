class DevJobsAvatarElement extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    render(){
        this.shadowRoot.innerHTML = `
        <img
            src="https://unavatar.io/x/neoabu_"
            alt="Avatar de midudev"
            class="avatar"
            style="width:40px; height:40px; border-radius:50%;"
        />
        `
    }

    connectedCallback(){
        this.render()
    }
}

customElements.define('devjob-avatar', DevJobsAvatarElement);