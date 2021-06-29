// Code your solution in this file!
// headquarters is on 42nd
function distanceFromHqInBlocks(streetNumber) {
    let result 
    if (streetNumber < 42) {
        result = 42 - streetNumber
    } else {
        result = streetNumber - 42
    }

    return result
}
// one block 264 ft
function distanceFromHqInFeet(streetNo) {
    const totalBlocks = distanceFromHqInBlocks(streetNo)
    return totalBlocks * 264 
}