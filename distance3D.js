function solve(arr){
    let x1 = arr[0], y1 = arr[1], z1 = arr[2]
    let x2 = arr[3], y2 = arr[4], z2 = arr[5]
    let distanceX = Math.abs(x1 - x2)
    let distanceY = Math.abs(y1 - y2)
    let distanceZ = Math.abs(z1 - z2)
    let distance = Math.sqrt(distanceX *distanceX + distanceY * distanceY + distanceZ * distanceZ)
    console.log(distance)
}
solve([1, 1, 0, 5, 4, 0])
solve([3.5, 0, 1, 0, 2, -1])