function quadraticEquation(a, b, c){
    let disc = b * b - 4 * a * c
    if (disc > 0){
        let x1 = (-b + Math.sqrt(disc))/(2 * a)
        let x2 = (-b - Math.sqrt(disc))/(2 * a)
        if (x1 < x2){
            console.log(x1)
            console.log(x2)
        } else{
            console.log(x2)
            console.log(x1)
        }
    }else if (disc === 0){
        let x = -b/(2 * a)
        console.log(x)
    }else{
        console.log('No')
    }
}
quadraticEquation(6, 11, -35)
quadraticEquation(1, -12, 36)
quadraticEquation(5, 2, 1)