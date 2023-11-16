class CenterHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.define("x-center", CenterHtml);

class BlueHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color:blue">${this.innerHTML}</div>`;
    }
}

customElements.define("x-blue", BlueHtml);

class GreenBorderHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="border:2px solid green; padding: 10px">${this.innerHTML}</div>`;
    }
}

customElements.define("x-green-border", GreenBorderHtml);