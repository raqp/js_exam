'use strict'
let cache = {};

function cache_fibonacci_1(n){
  if (n <= 1){
    return n
  }
  if (cache[n]){
    return cache[n]
  }
  cache[n - 2] = cache_fibonacci_1(n - 2);
  cache[n - 1] = cache_fibonacci_1(n - 1);
  return cache[n-2] + cache[n - 1]
}

console.log(cache_fibonacci_1(600))
