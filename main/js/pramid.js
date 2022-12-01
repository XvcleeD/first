// let row = 10
// let col = 5 
// let output = ''
// for (let i = 0 ; i < row; i++) {
//     for (let k = 0; k < col; k++){
//         output += '*'
//         if( k === col - 1 ){
//             output += '\n'
//         }
//     }
// }
// console.log(output)
let row = 50
let string = ''

for (let i = 1; i <= row; i++ ){
    for (let j = 1; j<= row - i; j++ ){
        string += ' '
    }
    for (let k = 0; k < 2*i-1 ; k++ ){
        string += '*'
    }
    string += '\n'
}
for( let g = 1; g <= 10; g++){
    for ( let l = 0; l <= row/6; l++  ){
        string += '*'
    }
    for( let h = 0; h < (row - ((row/6)*)); h++){
        string += ' '
    }
    string += '\n'
}


console.log(string)
