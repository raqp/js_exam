'use strict'

let arr = [1, 3, 6, 1, 7, 2, 4, 5]

for (let i = 0; i < arr.length; i++) {
    let min = arr[i]
    let min_num_index = i;
    for (let j = i + 1; j < arr.length; j++){
        if (arr[j] < min){
            min = arr[j]
            min_num_index = j
        }
    }
    if(min_num_index !== i){
        arr[min_num_index] = arr[i];
        arr[i] = min
    }
}

console.log(arr)