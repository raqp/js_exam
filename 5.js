let arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]

let dict = {}

for(let item of arr){
  if (dict[item]){
    dict[item] += 1
  } else {
    dict[item] = 1
  }
}

let max = 0;
let item;

for (let i in dict){
  if (dict[i] > max){
    max = dict[i];
    item = i
  }
}

console.log(`${item} ${max} times.`)

