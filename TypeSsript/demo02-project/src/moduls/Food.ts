class Food {
    element: HTMLElement;

    constructor () {
        this.element = document.getElementById("food")!;
    }

    get x() {
        return this.element.offsetLeft;
    }

    get y() {
        return this.element.offsetTop;
    }

    change() {
        const x = Math.round(Math.random() * 29)  * 10;
        const y = Math.round(Math.random() * 29)  * 10;
        
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
    }
}

export default Food

// let food = new Food();
// console.log(food.x, food.y);
// food.change()