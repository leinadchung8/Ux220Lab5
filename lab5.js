class CenterHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElements.defines("x-center", CenterHtml);

class BlueHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="color:blue">${this.innerHTML}</div>`;
    }
}

customElements.defines("x-blue", BlueHtml);