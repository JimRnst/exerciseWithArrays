/*JavaScript Arrays Iteration*/

/* 
########################
Get nth element of array
    Write a function that takes an array (a) and a value (n) as argument. Return the nth element of 'a'
########################
*/

//test cases

console.log(
    'Get nth element of array:\n',

    myFunctionA([1,2,3,4,5],3),  //Expected 3

    myFunctionA([10,9,8,7,6],5), //Expected 6

    myFunctionA([7,2,1,6,3],1)   //Expected 7
);

//code

function myFunctionA(a, n){
    return a[n -1];
}

/*
########################
Remove first n elements of an array
    Write a function that takes an array (a) as argument. Remove the first 3 elements of 'a'. Return the result.
########################
*/

//test cases

console.log(
    'Remove first n elements of an array:\n',

    myFunctionB([1,2,3,4]),     //Expected [4]

    myFunctionB([5,4,3,2,1,0]), //Expected [2,1,0]

    myFunctionB([99,1,1])       //Expected []

);

//code

function myFunctionB(a){
    return a.slice(3);
}

/*
########################
Get last n elements of an array
    Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array.
########################
*/

//test cases

console.log(
    'Get last n elements of an array:\n',
    
    myFunctionC([1,2,3,4]), //Expected [2,3,4]

    myFunctionC([5,4,3,2,1,0]), //Expected [2,1,0]

    myFunctionC([99,1,1]) //Expected [99,1,1]


);

//code

function myFunctionC(a){
    return a.slice(-3);
}

/*
########################
Get first n elements of an array
    Write a function that takes an array (a) as argument. Extract the last 3 elements of 'a'. Return the resulting array
########################
*/

//test cases

console.log(
    'Get first n elements of an array:\n',
    
    myFunctionD([1,2,3,4]), //Expected [1,2,3]

    myFunctionD([5,4,3,2,1,0]), //Expected [5,4,3]

    myFunctionD([99,1,1]) //Expected [99,1,1]


);

//code

function myFunctionD(a){
    return a.slice(0, 3);
}

/*
########################
Return last n array elements
    Write a function that takes an array (a) and a number (n) as arguments. It should return the last n elements of a.
########################
*/

//test cases

console.log(
    'Return last n array elements:\n',
    
    myFunctionE([1, 2, 3, 4, 5], 2), //Expected [ 4, 5 ]

    myFunctionE([1, 2, 3], 6), //Expected [ 1, 2, 3 ]

    myFunctionE([1, 2, 3, 4, 5, 6, 7, 8], 3) //Expected [ 6, 7, 8 ]


);

//code

function myFunctionE(a, n){
    return a.slice(-n);
}

/*
########################
Remove a specific array element
    Write a function that takes an array (a) and a value (b) as argument. The function should remove all elements equal to 'b' from the array. Return the filtered array.
########################
*/

//test cases

console.log(
    'Remove a specific array element:\n',
    
    myFunctionF([1,2,3], 2), //Expected [1, 3]

    myFunctionF([1,2,'2'], '2'), //Expected [1, 2]

    myFunctionF([false,'2',1], false), //Expected ['2', 1]

    myFunctionF([1,2,'2',1], 1) //Expected [2, '2']


);

//code

function myFunctionF(a, b){
    return a.filter(el => el !== b);
}

/*
########################
Count number of elements in JavaScript array
    Write a function that takes an array (a) as argument. Return the number of elements in a.
########################
*/

//test cases

console.log(
    'Count number of elements in JavaScript array:\n',
    
    myFunctionG([1,2,2,4]), //Expected 4

    myFunctionG([9,9,9]), //Expected 3

    myFunctionG([4,3,2,1,0]) //Expected 5

);

//code

function myFunctionG(a){
    return a.length;
}

/*
########################
Count number of negative values in array
    Write a function that takes an array of numbers as argument. Return the number of negative values in the array.
########################
*/

//test cases

console.log(
    'Count number of negative values in array:\n',
    
    myFunctionH([1,-2,2,-4]), //Expected 2

    myFunctionH([0,9,1]), //Expected 0

    myFunctionH([4,-3,2,1,0]) //Expected 1

);

//code

function myFunctionH(a){
    return a.filter(el => el < 0).length;
}

/*
########################
Sort an array of strings alphabetically
    Write a function that takes an array of strings as argument. Sort the array elements alphabetically. Return the result.
########################
*/

//test cases

console.log(
    'Sort an array of strings alphabetically:\n',
    
    myFunctionI(['b', 'c', 'd', 'a']), //Expected ['a', 'b', 'c', 'd']

    myFunctionI(['z', 'c', 'd', 'a', 'y', 'a']) //Expected ['a', 'a', 'c', 'd', 'w', 'y', 'z']

);

//code

function myFunctionI(arr){
    return arr.sort();
}

/*
########################
Sort an array of numbers in descending order
    Write a function that takes an array of numbers as argument. It should return an array with the numbers sorted in descending order.
########################
*/

//test cases

console.log(
    'Sort an array of numbers in descending order:\n',
    
    myFunctionJ([1,3,2]), //Expected [3,2,1]

    myFunctionJ([4,2,3,1]) //Expected [4,3,2,1]

);

//code

function myFunctionJ(arr){
    return arr.sort((a, b) => b - a);
}

/*
########################
Calculate the sum of an array of numbers
    Write a function that takes an array of numbers as argument. It should return the sum of the numbers.
########################
*/

//test cases

console.log(
    'Calculate the sum of an array of numbers:\n',
    
    myFunctionK([10,100,40]), //Expected 150

    myFunctionK([10,100,1000,1]), //Expected 1111

    myFunctionK([-50,0,50,200]) //Expected 200

);

//code

function myFunctionK(arr){
    return arr.reduce((a, b) => a + b, 0);
}

/*
########################
Return the average of an array of numbers
    Write a function that takes an array of numbers as argument. It should return the average of the numbers.
########################
*/

//test cases

console.log(
    'Return the average of an array of numbers:\n',
    
    myFunctionL([10,100,40]), //Expected 50

    myFunctionL([10,100,1000]), //Expected 370

    myFunctionL([-50,0,50,200]) //Expected 50

);

//code

function myFunctionL(arr){
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

/*
########################
Return the longest string from an array of strings
    Write a function that takes an array of numbers as argument. It should return the average of the numbers.
########################
*/

//test cases

console.log(
    'Return the longest string from an array of strings:\n',
    
    myFunctionM(['help', 'me']), //Expected 'help'

    myFunctionM(['I', 'need', 'candy']), //Expected 'candy'

);

//code

function myFunctionM(arr){
    return arr.reduce((a, b) => a.length >= b.length ? a : b)
}

/*
########################
Check if all array elements are equal
    Write a function that takes an array as argument. It should return true if all elements in the array are equal. It should return false otherwise.
########################
*/

//test cases

console.log(
    'Check if all array elements are equal:\n',
    
    myFunctionN([true, true, true, true]), //Expected true

    myFunctionN(['test', 'test', 'test']), //Expected true

    myFunctionN([1,1,1,2]), //Expected false

    myFunctionN(['10',10,10,10]) //Expected false

);

//code

function myFunctionN(arr){
    return new Set(arr).size === 1;
}

/*
########################
Merge an arbitrary number of arrays
    Write a function that takes arguments an arbitrary number of arrays. It should return an array containing the values of all arrays.
########################
*/

//test cases

console.log(
    'Merge an arbitrary number of arrays:\n',
    
    myFunctionO([1, 2, 3], [4, 5, 6]), //Expected [1, 2, 3, 4, 5, 6]

    myFunctionO(['a', 'b', 'c'], [4, 5, 6]), //Expected ['a', 'b', 'c', 4, 5, 6]

    myFunctionO([true, true], [1, 2], ['a', 'b']) //Expected [true, true, 1, 2, 'a', 'b']

);

//code

function myFunctionO(...arr){
    return arr.flat()
}

/*
########################
Sort array by object property
    Write a function that takes an array of objects as argument. Sort the array by property b in ascending order. Return the sorted array
########################
*/

//test cases

console.log(
    'Sort array by object property:\n',
    
    myFunctionP([{a:1,b:2},{a:5,b:4}]), //Expected [{a:1,b:2},{a:5,b:4}]

    myFunctionP([{a:2,b:10},{a:5,b:4}]), //Expected [{a:5,b:4},{a:2,b:10}]

    myFunctionP([{a:1,b:7},{a:2,b:1}]) //Expected [{a:2,b:1},{a:1,b:7}]

);

//code

function myFunctionP(arr){
    let sort = (x, y) => x.b - y.b;
    return arr.sort(sort)
}

/*
########################
Merge two arrays with duplicate values
    Write a function that takes two arrays as arguments. Merge both arrays and remove duplicate values. Sort the merge result in ascending order. Return the resulting array.
########################
*/

//test cases

console.log(
    'Merge two arrays with duplicate values:\n',
    
    myFunctionQ([1, 2, 3], [3, 4, 5]), //Expected [ 1, 2, 3, 4, 5 ]

    myFunctionQ([-10, 22, 333, 42], [-11, 5, 22, 41, 42]) //Expected [ -11, -10, 5, 22, 41,  42, 333]

);

//code

function myFunctionQ(a, b){
    // let idk = a.concat(b)
    // let fil = idk.filter((item, index) => idk.indexOf(item) === index)

    // return fil.sort((a, b) => a - b, 0)

    //Solution
    return [...new Set([...a, ...b])].sort((x, y) => x - y);
}