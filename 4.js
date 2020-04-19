'use strict'
function interval(t) {
    setTimeout(function (){
        console.log(`${t} from ${t} seconds.`)
    }, t * 1000)
}

for (let i = 1; i <= 180; i++){
    interval(i)
}
