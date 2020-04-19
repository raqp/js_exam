let cache = {};

function cache_fibonacci(n){
  if (n <= 1){
    return n
  }
  if (cache[n]){
    return cache[n]
  }
  cache[n - 2] = cache_fibonacci(n - 2);
  cache[n - 1] = cache_fibonacci(n - 1);
  return cache[n-2] + cache[n - 1]
}

console.log(cache_fibonacci(30))
