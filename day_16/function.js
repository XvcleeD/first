// console.log('function')
// // 1. f(x , y) = x'2 + y'2
// function f1(x ,y) {
//     console.log(Math.pow(x, 2) + Math.pow(y, 2));
    
// }
// f1(3, 4)
// function f2(x) {
//     console.log(Math.pow(x, Math.E))
    
// }
// f2(2)
// function f3(a, b) {
//     console.log((Math.pow(a ,2) - Math.pow(b, 2) ))
    
// }
// f3(3, 2)
// function f50(a, b) {
//     console.log((a - b) * (a + b))
    
// }
// f50(3, 2)

// function f4(a, b) {
//     console.log(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)))
    
// }
// f4(3, 4)

// function f51(y) {
//     console.log(Math.pow(y, 2) - 2*y + 4)
    
// }
// f51(4, 3)

// // let a = [3]
// // let b = [4]
// // console.log(a - b * (Math.pow(a, 2) + Math.pow(b, 2) - a))


// let  f5 = (a, b) =>{
//     console.log(a - b * (Math.pow(a, 2) + Math.pow(b, 2) - a))

// }
// f5(3, 4)

// // F(a,b ) = 2 * (a + b)
// function f6(a, b) {
//     console.log(2 * (a + b))
    
// }
// f6( 4, 5)

// function f7(a, b) {
//     console.log( Math.pow((a - b), 2))    
// }
// f7(4, 5)

// function f8(a, b ) {
//     console.log(a * b)
    
// }
// f8(8, 5)

// function f9(a, b){
//     console.log(3 * Math.pow((a * b), 2))
// }
// f9( 1, 2)

// let f10 = (x, y) => {
//     console.log(3 * Math.pow(x, 3) - 2 * Math.pow(y, 3))
// }
// f10( 4, 5)



// function factorial(x) {
//     let multiplicapion = 1;
//     for ( let i = 1; i <= x; i++ ){
//         multiplicapion = multiplicapion * i
//     }
//     console.log(multiplicapion)
// }
// factorial(5);

// function myFunction(p1, p2) {
//     const sum = p1 + p1 ;
//     return sum;  
    
// }
// console.log(myFunction(2, 3));


//  find out the even number 

// function  isEven(number) {
//     let result = '';
//     if(number % 2 == 0 ){
//         result = 'its even number'
//         // console.log('its even number')
//     } else { 
//         result = 'its odd number'
//         // console.log('its odd number')
//     }
//     return result
// } 
// console.log(isEven(5));
// isEven(4);
// isEven(18);



// 


// function findMax(a, b) {
//     if(a > b){
//         return a; 
//     }
//     else { 
//         return b;
//     }
// }

// console.log(findMax(1, 3));
// console.log(findMax(100, 3));
// console.log(findMax(100, 100));

// 



// function expression


// let findMax = function(a, b) {
//     if(a > b){
//         return a; 
//     }
//     else { 
//         return b;
//     }
// }
// console.log(findMax(1, 3));
// console.log(findMax(100, 3));
// console.log(findMax(150, 50));

// function expression => arrow function



// let findMax = (a, b) => {
//     if (a > b){
//         return a;
//     }
//     else {
//         return b;
//     }
// }
// console.log(findMax(1, 3));
// console.log(findMax(100, 3));
// console.log(findMax(110, 100));


// Array sorter function 

let max = -1000;
const arr = [4, 32, 2, 5, 8, -10, 20, 1, 0, -20]

arr.sort(function(a, b){
    return a - b 
})
let arrayMax = (array) => {
    for ( let i  = 0; i < array.length; i++){
        if (max <= array[i]){
            max = array[i];
        }
    }
}
arrayMax(arr)
console.log(arr)
console.log(max);


// simple array-1 


let itCompanies =['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon' ]

// 1.
console.log(itCompanies)
console.log('\n')
// 2.
console.log(itCompanies.length)
console.log('\n')
// .3`
let urt = itCompanies.length
let i
i = Math.floor(itCompanies.length / 2)
if (itCompanies.length % 2 != 0){
    
    console.log(itCompanies[0], itCompanies[i], itCompanies[itCompanies.length -1])
    
}
else {
    
    console.log(itCompanies[0], itCompanies[i-1], itCompanies[i], itCompanies[itCompanies.length -1])
}

console.log('\n')
// 4.

for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i])

}
console.log('\n')
// 5.
for(let i = 0; i < itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase())

}
// 6. 


// for (let index = 0; index < itCompanies.length; index++) {
//     const element = itCompanies[index];
    
    console.log(itCompanies + ' зэрэг мэдээллийн технологийн томоохон компаниуд.')
    console.log('\n')
// }


// simple array2 

// 1. 


for(let i = 0; i < 3; i++){
    console.log(itCompanies[i])
    // console.log(itCompanies)
    
}
console.log('\n')

// 2. 



