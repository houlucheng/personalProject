class Snake {
    head: HTMLElement;
    // 集合
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;

    constructor () {
        this.element = document.getElementById('#snake')!;
        this.head = document.querySelector("#snake > div") as HTMLElement;
        this.bodies = this.element.getElementsByTagName("div")
    }

    get x() {
        return this.head.offsetLeft;
    }

    get y() {
        return this.head.offsetTop;
    }

    set x(value) {
        this.head.style.left = value + 'px'
    }

    set y(value) {
        this.head.style.top = value + 'px'
    }

    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}

export default Snake