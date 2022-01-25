class Snake {
    head: HTMLElement;
    // 集合
    bodies: HTMLCollection;
    // 获取蛇的容器
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('snake')!;
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
        if (this.x === value) { return }
        if (value < 0 || value >= 294) {
            throw new Error("撞墙了！GAME OVER")
        }
        // 不能掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value) {
            if (value > this.x) {
                value = this.x - 10
            }else {
                value = this.x + 10
            }
        }

        this.moveBody()
        this.head.style.left = value + 'px'
        this.checkHandleBody()
    }

    set y(value) {
        // 节流
        if (this.y === value) { return }
        // 撞墙检测
        if (value < 0 || value >= 294) {
            throw new Error("撞墙了！GAME OVER")
        }

        // 不能掉头
        if (this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value) {
            if (value > this.y) {
                value = this.y - 10
            }else {
                value = this.y + 10
            }
        }

        // 移动身体
        this.moveBody()
        // 设置舌头位置
        this.head.style.top = value + 'px'
        this.checkHandleBody()

    }


    // 增加身体
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }

    // 移动身体
    moveBody() {
        // 把后面的身体位置等于前面一节的位置
        for (let i = this.bodies.length - 1; i > 0; i--) {
            (this.bodies[i] as HTMLElement).style.left = (this.bodies[i - 1] as HTMLElement).offsetLeft + "px";
            (this.bodies[i] as HTMLElement).style.top = (this.bodies[i - 1] as HTMLElement).offsetTop + "px";
        }
    }

    checkHandleBody() {
        for(let i = 1; i < this.bodies.length; i++) {
            if(this.y === (this.bodies[i] as HTMLElement).offsetTop && this.x === (this.bodies[i] as HTMLElement).offsetLeft) {
                throw new Error("撞自己了！GAME OVER")
            }
        }
    }
}

export default Snake