class Hexagon {
    constructor() {
        this.top = '<div class="hexagon-top"></div>'
        this.center = '<div class="hexagon-center"></div>'
        this.bottom = '<div class="hexagon-bottom"></div>'
    }
}

renderHexes = (hexContainer) => {
    hexesToRender = 1
    for (let i = 0; i < hexesToRender; i++) {
        const hexagon = new Hexagon
        hexContainer.insertAdjacentHTML('beforeend', hexagon.top)
        hexContainer.insertAdjacentHTML('beforeend', hexagon.center)
        hexContainer.insertAdjacentHTML('beforeend', hexagon.bottom)
    }
}

window.onload = () => {
    renderHexes(document.getElementById('hex-container'))
}
