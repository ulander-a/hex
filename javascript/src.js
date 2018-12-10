class Hexagon {
    constructor() {
        this.left = '<div class="left"></div>'
        this.center = '<div class="center"></div>'
        this.right = '<div class="right"></div>'
    }
}

class Renderer {
    render(container, element) {
        let hex = element.left + element.center + element.right
        return container.insertAdjacentHTML(
            'beforeend',
            `<div class="hex">${hex}</div>`
        )
    }
}

window.onload = () => {
    const hex = new Hexagon
    const container = document.getElementById('hex-container')
    const renderer = new Renderer
    renderer.render(container, hex)
}