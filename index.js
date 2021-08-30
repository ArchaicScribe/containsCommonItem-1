// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','i'];
//should retrun false

//const array1 = ['a','b','c','x'];
//const array2 = ['z', 'y','x']
//should return true

//2 parameters - arrays - no size limit 
//returns true/false
//O(n^2)




// function findCommonItem(arr1, arr2){
// 	for (let i= 0; i < arr1.length; i++){
// 		for(let j = 0; j < arr2.length; j++){
// 			if(arr1[i] === arr2[j]){
// 				return true;
// 			}
// 		}
// 	}
// 	return false; 
// }

//O(a * b) Not the best time

// findCommonItem(array1, array2);


const array1= ['a','b','c','x'];
const array2= ['z','y','x'];

//array ==> obj{
//a: true,
//b: true,
//c: true,
//d: true
//}
//array[index] === obj.properties

//Can we always assume two parameters in the function?

function containsCommonItem2(arr1, arr2){
	//loop throught first array and create object where properties ==== items in the array
	let map = {};
	for(let i = 0; i < arr1.length; i++){
		if(!map[arr1[i]]){
			const item = arr1[i];
			map[item] = true;
		}
	}
	//loop through second array and check if item in second array exists on the created object. This will improve performance. 
	for(let j = 0; j < arr2.length; j++){
		if(map[arr2[j]]){
			return true;
		}
	}
	return false;
}

containsCommonItem2(array1, array2)

//O(a + b) Time Complexity is better than O(a *b)