import ScorePanel from './ScorePanel'
import Food from './Food'
import Snake from './Snake'


// 控制所有类
class GameControl {
    ScorePanel: ScorePanel;
    Food: Food;
    Snake: Snake;
    // 方向
    direction: string = "";
    // 是否结束
    islive: boolean = true;

    constructor() {
        this.ScorePanel = new ScorePanel();
        this.Food = new Food();
        this.Snake = new Snake();

        this.init();
    }

    init() {
        document.addEventListener("keydown", this.keydownHandle)
        this.run()
    }

    // 监听按键
    keydownHandle = (event: KeyboardEvent) => {
        this.direction = event.key;
    }

    run() {
        let x = this.Snake.x;
        let y = this.Snake.y;
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                y -= 10
                break;
            case "ArrowDown":
            case "Dowm":
                y += 10
                break;
            case "ArrowLeft":
            case "Left":
                x -= 10
                break;
            case "ArrowRight":
            case "Right":
                x += 10
                break;
        }

        this.checkEat(x, y)

        try {
            this.Snake.x = x
            this.Snake.y = y
        } catch (e: any) {
            alert(e.message)
            this.islive = false
        }
        this.islive && setTimeout(this.run.bind(this), 300 - (this.ScorePanel.level - 1) * 30)
    }

    // 是否吃到食物
    checkEat(x: number, y: number) {
        if (x === this.Food.x && y === this.Food.y) {
            // 刷新食物的位置
            this.Food.change();
            // 添加分数
            this.ScorePanel.addScore()
            // 添加蛇长
            this.Snake.addBody()
        }
    }
}

export default GameControl