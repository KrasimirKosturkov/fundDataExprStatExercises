function rounded(arr){
    let numberToBeRounded = arr[0]
    let precision = arr[1]
    let precisionInRange = precision > 15 ? 15 : precision
    console.log(parseFloat(numberToBeRounded.toFixed(precisionInRange)))
}
rounded([3.1415926535897932384626433832795, 2])
rounded([10.5, 3])