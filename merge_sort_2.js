'use strict'

let first_arr = [1, 3, 6, 7];
let second_arr = [2, 4, 5, 1];
let x_arr = first_arr.concat(second_arr)


function merge_arrays(left, right) {
    let i = 0;
    let j = 0;
    let sorted_arr = [];
    while (true) {
        if (left[i] < right[j]) {
            sorted_arr.push(left[i])
            i += 1
        } else {
            sorted_arr.push(right[j])
            j += 1
        }
        if (i === left.length){
            sorted_arr = sorted_arr.concat(right.slice(j))
            break
        } else if (j === right.length){
            sorted_arr = sorted_arr.concat(left.slice(i))
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
