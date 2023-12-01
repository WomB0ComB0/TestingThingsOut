// Map is a colleciton of elements where each element is stored as a Key, value pair. Map objects can hold both objects and primitive values as either key or value. When we iterate over teh map object it returns the key, and value pair in the same order as inserted.
// new Map([it])

// Parameter:
// it -- it is any iterable object whose values are stores as key, value pair, if the parameter is not specified then a new map is created is empty.

const map1 = new Map([
    [1, 2],
    [2, 3],
    [3, 4] 
]);

console.log(map1.get(1));
console.log(map1)

const map2 = new Map([
    ['firstname', 'sumit'],
    ['lastname', 'ghosh'],
    ['website', 'geeksforgeeks'] 
]);

console.log(map2.get('firstname'));
console.log(map2)

//  map3 contains 
// Whole number => [1, 2, 3, 4]
// Decimal number => [1.1, 1.2, 1.3, 1.4]
// Negative number => [-1, -2, -3, -4]

const map3 = new Map([
    ["whole numbers", [1, 2, 3, 4]],
    ["Decimal numbers", [1.1, 1.2, 1.3, 1.4]],
    ["Negative numbers", [-1, -2, -3, -4]]
])

console.log(map3.get("whole numbers"));
console.log(map3)

// map 4 contains
// storing arrays both as key and value
// "first name", "Last name" => "sumit", "ghosh"
// "friend 1", "sourav" => "friend 2", "rahul"

const map4 = new Map([
    [
        ["first name", "last name"],
        ["sumit", "ghosh"]
    ],
    [
        ["friend 1", "friend 2"],
        ["sourav", "rahul"]
    ]
]);

console.log(map4.get(["first name", "last name"]));
console.log(map4)

