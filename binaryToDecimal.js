function binary(arr){
    let eight = Number(arr[7]), seven = 2 * Number(arr[6]), six = 2 * 2 * Number(arr[5]), five = 2 * 2 * 2 * Number(arr[4])
    let four = 2 * 2 * 2 * 2 * Number(arr[3]), tree = 2 * 2 * 2 * 2 * 2 * Number(arr[2]), two = 2 * 2 * 2 * 2 * 2 * 2 * Number(arr[1])
    let one = 2 * 2 * 2 * 2 * 2 * 2 * 2 * Number(arr[0])
    let decimal = eight + seven + six + five + four + tree + two + one
    console.log(decimal)
}
binary('00001001')
binary('11110000')