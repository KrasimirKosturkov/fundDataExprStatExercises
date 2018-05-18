function solve(gradus){
    let grad = gradus % 400
    let gradInDegree = grad * 0.9
    let degreeOutput = gradus < 0 ? 360 + gradInDegree : gradInDegree
    console.log(degreeOutput)
}
solve(100)
solve(400)
solve(850)
solve(-50)