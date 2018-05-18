function figureOf4Squares(num){
    if (num === 2){
        console.log('+++')
        return
    }
    let dashes = '-'
    let spaces = ' '
    for (let i = 1; i < num-2; i++) {
        dashes += '-'
    }
    for (let i = 1; i < num-2; i++) {
        spaces += ' '
    }
    let firstLastRow = '+' + dashes + '+' + dashes + '+'
    let midleRow = '|'+ spaces +'|' + spaces + '|'
    console.log(firstLastRow)
    if (num % 2 === 0){
        if(num >= 6 && num <= 200){
            for (let i = 1; i <= (num-4)/2; i++) {
                console.log(midleRow)
            }
            console.log(firstLastRow)
            for (let i = 1; i <= (num-4)/2; i++) {
                console.log(midleRow)
            }
        }else if(num >=4){
            console.log(firstLastRow)
        }
        console.log(firstLastRow)
    }else{
        if(num >= 5 && num <=199){
            for (let i = 1; i <= (num-3)/2; i++) {
                console.log(midleRow)
            }
            console.log(firstLastRow)
            for (let i = 1; i <= (num-3)/2; i++) {
                console.log(midleRow)
            }
        }else if(num >= 3){
            console.log(firstLastRow)
        }
        console.log(firstLastRow)
    }
}
figureOf4Squares(2)