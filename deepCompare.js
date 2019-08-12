/*Function deepEqual takes in two values as parameters and compares them 
to determine if they're objects and if the objects and their properties are
equal.*/
function deepEqual(x, y) {
    //If the objects are the exact same, we're done.
    if (x === y) 
    {
        return true;
    }
    /*If either object is null or either input is not an object
    return false. */
    if (typeof x != "object" || typeof y != "object" || x == null || y == null) 
    {
        return false;
    }

    /*If objects have different lengths, their property lists are not
    the same, so they are not identical. */
    if (Object.keys(x).length != Object.keys(y).length) 
    {
        return false;
    }

    /*For loop checks each property in x to each property in y. If the 
    properties are not the same, the function will return false. */
    for (let prop in x) 
    {
        if(!(prop in y)) 
        {
            return false;
        }
        if(!deepEqual(x[prop], y[prop])) 
        {
            return false;
        }
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
