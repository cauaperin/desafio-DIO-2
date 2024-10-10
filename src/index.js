var levelManager = [
    { minLevel: 0, maxLevel: 10, level: "Ferro" },
    { minLevel: 11, maxLevel: 20, level: "Bronze" },
    { minLevel: 21, maxLevel: 50, level: "Prata" },
    { minLevel: 51, maxLevel: 80, level: "Ouro" },
    { minLevel: 81, maxLevel: 90, level: "Diamante" },
    { minLevel: 91, maxLevel: 100, level: "Lendário" },
    { minLevel: 101, maxLevel: Infinity, level: "Imortal" }
]

function getLevel(victory) {
    for (let i = 0; i < levelManager.length; i++) {
        if (levelManager[i].minLevel <= victory && victory <= levelManager[i].maxLevel) {
            return levelManager[i].level
        }
    }
}

function gameResume(win, lose) {
    let resume = win - lose;
    return resume
}

let saldoVitorias = gameResume(30, 19)
let nivel = getLevel(saldoVitorias)

console.log("O Herói tem um saldo de " + saldoVitorias + " vitórias e está no nível de " + nivel)
