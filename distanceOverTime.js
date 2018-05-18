function solve(arr){
    let speed1 = arr[0]
    let speed2 = arr[1]
    let time = arr[2]
    let timeInHour = time / 3600
    let dist1 = speed1 * timeInHour * 1000
    let dist2 = speed2 * timeInHour * 1000
    let delta = Math.abs(dist1 - dist2)
    console.log(delta);
}
solve([5, -5, 40])