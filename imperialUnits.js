function imperialUnits(inches){
    let footUnit = parseInt(inches / 12)
    let inchesUnit = inches % 12
    console.log(footUnit+ '\'' + '-' + inchesUnit + '\"')
}
imperialUnits(36)
imperialUnits(55)
imperialUnits(11)