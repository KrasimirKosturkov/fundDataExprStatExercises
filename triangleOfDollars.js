function triangleOfDollars(num) {
    for (let row = 1; row <= num; row++) {
        console.log(new Array(row+1).join('$'))
    }
}
triangleOfDollars(5)