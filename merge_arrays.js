'use strict'
let first_arr = [1, 3, 6, 7];
let second_arr = [2, 4, 5];

function merge_arrays(arr_1, arr_2){
    let i = 0;
    let j = 0;
    let sorted_arr = [];

    while (true){
        if(arr_1[i] < arr_2[j]){
            sorted_arr.push(arr_1[i])
            i += 1
        } else if (arr_1[i] > arr_2[j]){
            sorted_arr.push(arr_2[j])
            j += 1
        } else {
            sorted_arr.push(arr_1[i], arr_2[j])
            i += 1
            j += 1
        }
        if (i === arr_1.length){
            sorted_arr = sorted_arr.concat(arr_2.slice(j))
            break
        } else if (j === arr_2.length){
            sorted_arr = sorted_arr.concat(arr_1.slice(i))
            break
        }
    }
    return sorted_arr;
}

console.log(merge_arrays(first_arr, second_arr))
