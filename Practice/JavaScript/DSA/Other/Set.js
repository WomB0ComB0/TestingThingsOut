// A set is a colleciton of items htat are unique i.e no elemnts cna be repeated. Set in ES6 are orederd: elemetns of the seet can be interated in the insertion order. Set can storer any type of vlaue whether primitive or objects

// Syntax:
// new Set([iterable]);

// Parameter:
// it: it is an iterable object whose all elements are added to the new set created, if the parameter is not specified or null is passed than a new set created is empty.

// Return value: a new set object

const  set1 = new Set(['sumit', 'ghosh', 'sumit', 'ghosh']);

const set2 = new Set('foooood');

const set3 = new Set([10, 20, 30, 40, 50, 10, 20, 30, 40, 50]);

const set4 = new Set()

set4.add(10);
set4.add(20);
 
// As this method returns
// the set object hence chaining
// of add method can be done.
set4.add(30).add(40).add(50);
console.log(set1);
console.log(set2);
console.log(set3);
console.log(set4);