'use strict'

let cache = new Map()

function fibonacci(func) {
    return function(x) {
        if (cache.has(x)){
            return cache.get(x)
        }
        let result = func(x)
        cache.set(x, result)
        return result
    }
}


function cache_fibonacci(n){
    if (n <= 1){
        return n
    }
    return cache_fibonacci(n - 2) + cache_fibonacci(n - 1)
}

cache_fibonacci = fibonacci(cache_fibonacci);
console.log(cache_fibonacci(600))
