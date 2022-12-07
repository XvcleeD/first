// let arr = [4, 3, 7, 8, 2]
// let niilber = 0
// let niilber2 = 0 
// let niilber3 = 0 

// for ( let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 == 0){
//         niilber = niilber + arr[i]
//         niilber3 = niilber3 + i
//     }
//     if(i % 2 == 0){
//         niilber2 = niilber2 + arr[i]
//     }
// }
// console.log(niilber)
// console.log(niilber2)
// console.log(niilber3)

// let arra = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63]


// for ( let i = 0; )



let array1 = [ 4, 2, 34, 4, 1, 12, 1, 4]
let count = 0 

for ( i = 0; i <= array1.length; i++){
    for (j = i+1; j <= array1.length; j++){
        if (array1[i] == array1[j]){
            count++
            if ( count > 0 ){
                console.log(array1[i])
            }
        }
    }
}
