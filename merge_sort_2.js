'use strict'

let first_arr = [1, 3, 6, 7];
let second_arr = [2, 4, 5];
let x_arr = first_arr.concat(second_arr)


function merge_arrays(left, right) {

    let sorted_arr = []
    while (true) {
        if (left[0] < right[0]) {
            sorted_arr.push(left.shift())
        } else {
            sorted_arr.push(right.shift())
        }
        if (!left.length){
            sorted_arr = sorted_arr.concat(right)
            break
        } else if (!right.length){
            sorted_arr = sorted_arr.concat(left)
            break
        }
    }
    return sorted_arr;
}

function merge(arr) {
    if (arr.length < 2) {
        return arr
    }
    let mid = parseInt(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)

    return merge_arrays(merge(left), merge(right))
}


console.log(merge(x_arr))
