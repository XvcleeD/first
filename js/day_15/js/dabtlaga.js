let  n = prompt('min utga')
let m = prompt ('max utga oruulnuu')
let sum = 0
let count = 0
let urjber = 1

for ( let i = n; i <= m ; i++){
    if( i % 2 == 0 ){
        sum = sum + i
        console.log(i)
        // console.log(sum)
    }
    //if( i % 2 != 0 )
    else{
        console.log(i)
        urjber = urjber * i
        // console.log(urjber)
    }
    // if (i % 3 == 0 && i % 4 == 0){
    //     sum = sum + i
    //     count++
    //     console.log(count)
    //     console.log(i)
        // console.log('hi')
        // console.log(sum)
    }//else if (i % 3 == 1){
        
        // console.log('hello')
   // }//else if ( i % 3 == 2){
//         console.log('hello')
//     }
//}
console.log (urjber)
console.log(sum)