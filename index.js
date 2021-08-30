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

const array1= ['a','b','c','x'];
const array2= ['z','y','i'];


function findCommonItem(arr1, arr2){
	for (let i= 0; i < arr1.length; i++){
		for(let j = 0; j < arr2.length; j++){
			if(arr1[i] === arr2[j]){
				return true;
			}
		}
	}
	return false; 
}

//O(a * b) Not the best time

findCommonItem(array1, array2);