// 记分牌
class ScorePanel {
    // 分数
    score = 0;
    // 等级
    level = 1;
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    // 最大级数
    maxLevel: number;
    // 多少分升一级
    upScore: number

    constructor (maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById("score")!;
        this.levelEle = document.getElementById("level")!;
        this.maxLevel = maxLevel
        this.upScore = upScore
    }

    // 设置加分方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + ""
        if(this.score % this.upScore === 0) {
            this.levelUp()
        }
    }

    // 等级提升
    levelUp() {
        if(this.level < this.maxLevel){
            this.levelEle.innerHTML = ++this.level + ""
        }
    }
}

export default ScorePanel

// const scorePanel = new ScorePanel()
// scorePanel.addScore()