class CenterHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="text-align:center">${this.innerHTML}</div>`;
    }
}

customElement.define("x-center", CenterHtml);

class BlueHtml extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `<div style="colour:blue">${this.innerHTML}</div>`;
    }
}

customElement.define("x-center", CenterHtml);