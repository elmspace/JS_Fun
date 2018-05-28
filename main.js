
//##############################################################################################
//	Functional Programming Introduction [Higher Order Functions] 
//##############################################################################################
/*
	In this code, we will take a look at functional programming.
	In functional programming, you can think about functions as values.
	This means that we can assign them to variables, or pass them into other functions.
	Functions that take other functions as input are called higher order functions.
	This process is known as composition.
*/
// Here is a list
var myPortfolio = [
	{ticker:"", type:""},
	{ticker:"", type:""},
	{ticker:"", type:""},
	{ticker:"", type:""},
	{ticker:"", type:""},
	{ticker:"", type:""},
	{ticker:"", type:""},
]
/* 
	We assign this function to a variable called isDog
	what the function will do, is check to see if the input (animal),
	has type dog, if yes, returns True, else returns False.
*/
var isDog = function(animal){
	return animal.type === "dog";
}
/*
	Now we can pass the above function into the filter function, which is a 
	higher order function. The function isDog is a callBack function, which is 
	used by the filter function as it iterates over the elements of the myList list.
*/
var dogList = myList.filter(isDog);
// Print out the dogList.
console.log(dogList);
//##############################################################################################


//##############################################################################################
//	Functional Programming [Map] 
//##############################################################################################
/*
	We can continue our study of the functional programming by looking at the map method,
	which applies to list object. Just like the filter method, which iterated over the items within
	the list and applied the callback function to each element, the map function will do the same,
	however, it will expect the callback function to return a new object, not just True/False.
	This is supper useful when it comes to applying a logic to each element and transform it into a
	new object.
*/
