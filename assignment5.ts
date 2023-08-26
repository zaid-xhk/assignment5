// //  - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
let sum:number = 0
let allEvens:number []= []
for (let index =2 ; index <=20; index += 2) {
    sum += index;
    allEvens.push(index)
    
}
console.log(sum);
console.log(allEvens);

//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.

var array:number []=[2,3,4,5,6,7,8];
var evenArray:number[]= []
for (let index = 0; index < array.length; index++) {
    if (array[index]%2 == 0) {
        evenArray.push(array[index])
        
    }
    
}
console.log("even numbers ",evenArray);
//  - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
var arr:number []=[1,2,3,4,5,6,7,8];
var oddarrays:number[] = []
for(let i = 0;i<arr.length;i++){
    if (arr[i]%2 != 0) {
        oddarrays.push(arr[i])
        
    }
}
console.log("odd numbers",oddarrays);

//  - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
function calculateTheAreaCircle(radius:number) {
    let pi:number = 22/7;
    let area:number= pi * radius * radius
    return area
}
 var radiusSum:number = 44
 console.log( radiusSum);
 console.log( "result of area",calculateTheAreaCircle(radiusSum));
 
//   - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
var grades:number []= [50,45,90,59,33,41,59];
for (let iIndex = 0 ; iIndex<=grades.length ; iIndex++ ){
      if(grades[iIndex]<50) { grades.splice(iIndex,1)
      }
    }
    console.log("passing grades",grades);
    
// - Write a program that uses a function to find the largest element in an array of numbers.
var aarray:number []=[12,27,25,19];
function largestArray(largestElement:any) {
    let largestNum = largestElement[0]
for(let index = 1;index<aarray.length;index++){
    if(aarray[index]>largestNum){
        largestNum = largestElement[index];
        return largestNum

    }
}

        
    }
    let largest:number =largestArray(aarray)
    console.log(largest);
    
