//Return the First Element in an Array

function getFirstElement(arr){
    if(arr.length===0){
        return undefined
    }
    return arr[0]
}

const myArr = [9,4,7.9,300]
const firstElement = getFirstElement(myArr)
console.log(firstElement)