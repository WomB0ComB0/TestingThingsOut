open System

let x4 x =
  let x = x * x
  let x = x * x
  x

let myPassedVal = x4 2 |> x4

let myComposedVal = (x4 >> x4) 2

[<EntryPoint>]
let main argv =
    printf "myPassedVal: %A\n" myPassedVal
    printf "myComposedVal: %A" myComposedVal
    0

// Type inferences
let a = 1 // Int
let b: float = 1 // float
let c = 1. // float
let d = float 1 // float(forced via type function)

let add x y = x + y // int -> int -> int
let add (x: float) y = x + y // float -> float -> float

let add x y = 
    (x: float) + y // float -> float -> float
  
let add x y : float =
  x + y // float -> float -> float

let add x y : float =
  float (x + y) // int -> int -> float

type Person =
  {
    name: string
    Address: string
  }

type Employee =
  { 
    Name: string
    Id: int
  }

let p = { // Person type inferred
  Name = "John";
  Address = "Some street"
}

let e = { // Employee type inferred
  Name = "Sue";
  Id = 1
}

// Type inferred generics

let numbers = List<int>() // Explicit, like C#
numbers.Add(10)
numbers
// val it : List<int> = seq [10]
let numbers = List<_>()
numbers.Add(10.)
numbers
// val it : List<float> = seq [10.0]
let numbers = List()
numbers.Add("10")
numbers
// val it : List<string> = seq ["10"]

// Using type conversion functions
float "1.23"
//  val it: float = 1.23

int "1"
// val it: int = 1

string 1.23
// val it: string = "1.23"

float 1
// val it: float = 1.0

// Upcast operator :>
let mapResult (x: ControllerBase) result =
  match result with
  | Ok data -> x.Ok(data) :> IActionResult // otherwise OkObjectResult
  | Error msg -> x.Problem(msg) :> IActionResult // otherwise ObjectResult

let result = WrappedWithFunction true // this function will always behave as expected
// var result: int = 42

// Handling or ignoring results of an expression
let square x = x * x

let result = square 5 // ok, bind 25 to result

square 5 // compile warning, the result is not handled

ignore (square 5) // ok, result was "handled" by explicitly ignoring it

square 5 |> ignore // A nicer syntax for using the forward pipe operator

// Examples of bindings
// bind a value to a name
let name = "John"
// val name: string = "John"

// bind a function to a name: add
let add x y = x + y
// val add: int -> int -> int

// not mutable - evaluates to false, but also an error for ignoring the result
// val it: bool = false

// Mutable binding
let mutable w = 100
// val mutable w: int = 100

w <- 200 // ok as w is mutable, but frowned upon :(
// val it: unit = ()

w
// The truth about immutable binding
open System

[<EntryPoint>]
let main argv: string[] = // []<string> -> int
  Console.WriteLine("Hello from the transaction processor!")
  
  Console.Write("(d)eposit, (w)ithdraw or e(x)itL ")
  let action: string  = Console.ReadLine()
  printfn "You tole me to do this: %A" action
  
  Console.WriteLine("Bye!")
  0

// Scoping and shadowing
let a = 1 // top level - cannot be repurposed

let afunction x =
  printfn "%A" a // prints 1 on the console
  printfn "%A" (x + 10) // prints x + 10 on the console
  let x = 10 // repurpose x as int = 10 (parameter x is shadowed)
  printfn "%A" (x + 10) // prints 20 on the console (always)
  let x = "Hello!" // x = 10 is shadowed
  let x = 100.0 // x = "Hello!" is shadowed
  x * 10.0 // returns 1000.0 (always)
afunction 5 // prints 1, 15, 20, returns 1000.0 (output omitted for brevity)

let a = "Can't do this" // duplicate function

// Scoping with in
let a = 2 // val it: int = 2
let b = 3 // val it: int = 3
let a = 4 in a * b // val it: int = 12
let a =  5 in let b = 6 in a * b // val it: int = 30
a // val it: int = 2

let writetoFile filename obj =
  use file1 = File.CreateText(filename)
  file1.WriteLine("{0}", obj.ToString())
  // file1.Dispose() is called when function returns

// using function

let writetofile2 filename obj =
  using
    (System.IO.File.CreateText(filename))
    (fun file1 -> file1.WriteLine("{0}", obj.ToString()))
writetofile2 "abc.txx" "The quick sly fox jumps over the lazy brown dog."

// do binding
do printfn "Hello"
do 1 + 1 // warning, should be returning unit
do (1 + 1 |> ignore) // ok



List.sum(data) // functional / expression way to sum
// val it: int = 6

List.fold (+) 0 [1; 2; 3;] // functional /fold form of sum
// val  it: int = 6

// instead of a for loop to iterate each item
List.iter (fun x -> printfn "%A" x) data

// val it: (int * int) list = [(1,2); (1,3); (1,4); (1,5); (1,6); (1,7); (1,8); (2,1); (2,3); (2,4); (2,5); (2,6); (2,7); (2,8); (3,1); (3,2); (3,4); (3,5); (3,6); (3,7); (3,8); (4,1); (4,2); (4,3); (4,5); (4,6); (4,7); (4,8); (5,1); (5,2); (5,3); (5,4); (5,6); (5,7); (5,8); (6,1); (6,2); (6,3); (6,4); (6,5); (6,7); (6,8); (7,1); (7,2); (7,3); (7,4); (7,5); (7,6); (7,8); (8,1); (8,2); (8,3); (8,4); (8,5); (8,6); (8,7)]

// Conditional Expressions 


compare 1 2
// val it: string = "1 is less than 2"

compare 2 1 
// val it: string = "2 is greater than 1"

compare 2 2
// val it: string = "2 equals 2"


// Match expressions
// match expr with
//   | pattern1 when cond1 -> expr1
//   | pattern2 when cond2 -> expr2
//   ...
//   | patternN when condN -> exprN

// Constant pattern

let describe x =
  match x with
  | 0 -> "Zero"
  | 1 -> "One"
  | _ -> "Neither zero or one"

describe 0
// val it: string = "Zero"
describe 1
// val it: string = "One"
describe 2
// val it: string = "Neither zero or one"

// Pattern matching function syntax
let describe x = 
  match x with
  | 0 -> "Zero"
  | 1 -> "One"
  | _ -> "Neither zero or one"
// the same as ...

let describe = function
  | 0 -> "Zero"
  | 1 -> "One"
  | _ -> "Neither zero or one"

// OR pattern (and variable pattern)
let describe = function
  | 0 | 1 | 2 -> "Found 0, 1, or 2!"
  | a -> $"Something else: {a}"

describe 0
// val it: string = "Found 0, 1, or 2!"
describe 1
// val it: string = "Found 0, 1, or 2!"
describe 2
// val it: string = "Found 0, 1, or 2!"
describe 3
// val it: string = "Something else: 3"

// AND pattern (along with tuple pattern)

let detectZeroAND = function
  | (0, 0) -> "Both values zero"
  | (var1, var2) & (0, _) -> $"First value is 0 in ({var1}, {var2})"
  | (var1, var2) & (_, 0) -> $"Second value is 0 in ({var1}, {var2})"
  | _ -> "Both non-zero"

detectZeroAND (0, 0) // val it: string = "Both values zero"
detectZeroAND (1, 0) // val it: string = "First value is 0 in (1, 0)"
detectZeroAND (0, 10) // val it: string = "Second value is 0 in (0, 10)"
detectZeroAND (10, 15) // val it: string = "Both non-zero"

// try...finally


// function 10 10 // prints on the console: "Values are equal 10" and "all done"
// function 9 2 // prints on the console: "all done", and then an exception message

// Defining an infix operator
let distance x y = if x > y then x - y else y - x

let (|><|) x y = distance x y
// val (|><|) : x:int -> y:int -> int

9 |><| 3
// val it: int = 6

9 |><| 3 |><| 10 // left associative (9 |><| 3) |><| 10
// val it: int = 4

(|><|) 3 10
// val it: int = 7

// Lambda expression
fun x -> x * x
// val it: x: int -> int

(fun x -> x * x) 5 // val it: int = 25
(fun (x: float) -> x * x)  5 // val it: float = 25

let square = (fun x -> x * x) // same as with a regular function body
// val square: x: int -> int
square 5 // val it: int = 25

// use a parameter to a higher order function 
List.map(fun x -> x * x) [1; 2; 3; 4]
// val it: int list = [1; 4; 3; 16]



// Currying
let add x y = x + y
// val add: x: int -> y: int -> int

// let add = fun x -> fun y -> x + y // same as above

(fun x -> fun y -> x + y) 5 2
// val it: int = 7

(fun y -> 5 + y) 2
// val it: int = 7

// Currying with three parameters

let add x y z = x + y + z
// identical to:
let add = fun x -> fun y -> fun z -> x + y + z

// add 1 = fun y -> fun z -> 1 + y + z
// add 1 2 = fun z -> 1 + 2 + z
// add 1 2 3 = 1 + 2 + 3

// Partial application
let add x y = x + y
// let add = fun x -> fun y -> x + y

lat add5 = add 5
// val add5: (int -> int)
// add5 is in reality: fun y -> 5 + y

add5 2 
// val it: int = 7

(fun y -> 5 + y) 2
// val it: int = 7

// Creating a sum function by partial application of List.fold

List.fold (+) 0 [1..10]
// val it: int = 55

// partially apply fold
let sum = List.fold (+) 0
// val sum: (int list -> int)

sum [1..10]
// val it: int = 55

// Composing functions

let f x = x * x // val f: x: int -> int
let g x = x + 1 // val g: x: int -> int
g (f 3)
// val it: int = 10

let g_f x = g (f x) // val g_f: x: int -> int
g_f 3
// val it: int = 10

// Compose right (>>) and left (<<) operators

let composed_right = f >> g // val composed_right: (int -> int)
composed_right 3
// val it: int = 10

let composed_left = g << f // val composed_left: (int -> int)
composed_left 3
// val it: int = 10

// Recursive Function 
let rec sum items = 
  match items with
  | [] -> 0
  | head :: tail ->
    head + (sum tail)

sum_imperative [1..3]
// val it: int = 6

// Recursive sum of items on a list
let rec sum items =
  match items with
  | [] -> 0 // base case stop recursing
  | head::tail -> head + (sum tail) // value of head + sum of the tail
// val sum: items: int list -> int

sum [1..3]
// val it: int = 6

// Accumulator with internal recursive function

let sum items =
  let rec loop accumulator items = 
    match items with
    | [] -> accumulator
    | head::tail -> loop (accumulator + head) tail
  loop 0 items
// val sum: items: int list -> int

// Recursive "Fold"
let fold f accumulator items =
  let rec loop f accumulator items =
    match items with
    | [] -> accumulator
    | head::tail -> loop f (f accumulator head) tail
  loop f accumulator items

fold (+) 0 [1..4]
// val it: int = 10

// Partial application of a fold
let sum = fold (+) 0
sum [1..4]
// val it: int = 10

let prod = fold (*) 1
sum [1..4]
// val it: int = 24

// Non tail-recursive
let rec sum items = 
  match items with
  | [] -> 0
  | head::tail -> head + (sum tail)

sum [1..100000]
// KABOOMBOOM!!

// Tail-recursive
let rec sum running_total items =
  match items with
  | [] -> running_total
  | head::tail ->
    sum (running_total + head) tail

// Imperative (dirty)
let mutable state = 0
let mutable running = true

// While loops
let echoUserInput (getInput: unit -> string) = 
  let mutable input = getInput()
  while not (input.ToUpper().Equals("QUIT")) do
    printfn "You entered: %s" input
    input <- getInput()
echoUserInput (fun () -> printfn "Type something and press enter"; System.Console.ReadLine())



//(1)
type MpaRating =
    | G
    | PG
    | PG13
    | R
    | NC17


// (2)
type Movie = {
  Title: string;
  Year: int;
  Rating: MpaRating option
}

// (3)
let movies = [
  {
    Title = "The Last Witch Hunter";
    Year = 2014;
    Rating = None
  },
  {
    Title = "Riddick";
    Year = 2013;
    Rating = Some(R)
  },
  {
    Title = "Babylon A.D.";
    Year = 2008;
    Rating = Some(PG13)
  }
]


type House = { Address: string; Price: decimal }

let houses = 
  [
    |
      {
        Address = "1 Acacia Avenue";
        Price = 250_000m
      },
      {
        Address = "2 Bradley Street";
        Price = 380_000m
      },
      {
        Address = "1 Carlton Road";
        Price = 98_000m
      }
    |
  ]
let cheapHouses =
  houses |> Array.filter (fun h -> h.Price  <  100_000m)
  // [|{Address = "1 Carlton Road"; Price =  98_000M;}|]
printfn "%A" cheapHouses

// Sample examples

type House = { Address: string; Price: decimal }
module House =
  let private random = System.Random(Seed = 1)
  /// Make an array of 'count' random houses
  let getRandom count = 
    Array.init count (fun i -> {
      Address = sprintf "%i Stochastic Street" (i + 1)
      Price = random.Next(50_000, 500_000) |> decimal
    })


// Accessing the .NET framework
open System


// using implied generics
let swapImplicit (a, b) = (b, a)

// creating bindings
let x =  0.577
let z = 2.18

// destructuring
let (y, x) = swapImplicit (x, z)

Console.WriteLine("x = {0}, y = {1}", x, y)

let myArray = [|1;2;3;5;6;|]
let printEvenSquares1 =
  myArray
  |> Array.map(fun x -> x * x)
  |> Array.filter(fun even -> even % 2 = 0)
  |> Array.iter(fun output -> printfn "%A" output)

// sequence is the most general 
// this counts to 100 by 10s

let myNums = seq{0..10..100}

// using pipelines with collections instead of loops
let printEvenSquares2 =
  myNums
  |> Seq.map(fun x -> x * x)
  |> Seq.filter(fun even -> even % 2 = 0)
  |> Seq.iter(fun output -> printfn "%A" output)
printEventSquares2

// long way for primes

let isDivisible a b = a % b = 0
let totalDiv x = [1..x] |> Seq.filter(fun y -> isDivisible x y)
let isPrime x = totalDiv x |> Seq.length = 2

let print x = printfn "%s" x
let string x = x.ToString()
let concat x = String.Concat "\r\n" x

[2..1000]
  |> Seq.map(fun x -> x, isPrime x)
  |> Seq.map(fun x -> string x)
  |> concat
  |> print

// list just of primes with helper functions

let isDivisible a b = a % b = 0 
let totalDiv x = [2..(x - 1)] |> Seq.filter(fun y -> isDivisible x y)
let isPrime x = totalDiv x |> Seq.length = 0
    
// using match instead of if statement
[2..20]
  |> Seq.map(fun x ->
    match isPrime x with
    | true -> x
    | false -> 0)
  |> Seq.filter(fun x -> x <> 0)
  |> Seq.iter(fun output -> printfn "%A" output)

open System 
open MathNet.Numerics.Distributions

let rand = Random()

// uniform
let generateUniform(n: int): float list =
  [for _ in 1..n -> rand.NextDouble()]

let outputUniform = generateUniform 10

// order a list
let randomNumbersSorter = generateNormal 10 |> List.sort

// Calculate mean
let mean = List.average outputUniform

// Calculate median
let sortedNumbers = List.sort outputUniform

let media =
  match List.length sortedNumbers with
  | len when len % 2 = 0 ->
    let mid = len / 2
    (sortedNumbers.[mid - 1] + sortedNumbers.[mid]) / 2.0
  | len ->
    sortedNumbers.[len / 2]
  
// Minimum and Maximum
let minimum = List.min outputUniform
let maximum = List.max outputUniform

// Standard deviation
let deviation = 
  let squaredDifferences = List.map(fun x -> (x - mean) ** 2.0) outputUniform
  sqrt (List.sum squaredDifferences / float (List.length squaredDIfferences))

printfn "Mean: %f" mean
printfn "Median: %f" media
printfn "Minimum: %f" minimum
printfn "Maximum: %f" maximum
printfn "Standard Deviation: %f" deviation

// reverse a list
let rec reverseList (list: 'a list): 'a list =
  match list with
  | [] -> []
  | head :: tail -> reverseList tail @ [head]

let myList = [1;2;3;4;5]
let reversedList = reverseList myList

printfn "Original list: %A" myList
printfn "Reversed list: %A" reversedList

// remove duplicates from a list
let removeDuplicates(seq:seq<int>) (remaining: int seq) : seq<int> = 
  match Seq.toList remaining with
  | [] -> Seq.empty
  | head :: tail when Set.contains head acc -> removeDuplicatesHelper acc (Seq.skip 1 remaining)
  | head :: tail -> Seq.append (Seq.singleton head) (removeDuplicatesHelper (Set.add head acc)(Seq.skip 1 remaining))
removeDuplicatesHelper Set.empty seq

// Define  a type for dishes
type Dish = { Name: string; Price: float }

// Define a function to calculate the price including tax
let priceWithTax (price: float): float =
  price * (1.1) // 10% tax

// Define a list of dishes
let dishes = [
  { Name = "Pizza"; Price = 10.0 }
  { Name = "Pasta"; Price = 8.0 }
  { Name = "Salad"; Price = 5.0 }
  { Name = "Burger"; Price = 15.75 }
]

// Map the prices to include tax
let pricesWithTax = List.map(fun dish ->  { dish with Price = priceWithTax dish.Price }) dishes

// FIlter out dishes with a final price less than $10
let cheapDishes = List.filter(fun dish -> dish.Price < 10.0) pricesWithTax

// Print the cheap dishes
cheapDishes |> List.iter(fun dish -> printfn "Name: %s, Price: %f" dish.Name dish.Price)

// Define a type for houses
type House = { Bedrooms: int; Floors; int; HasPool: bool; Price: float }

// Define a sequence of houses
let houses =
  seq{
    yield { Bedrooms = 3; Floors = 2; HasPool = false; Price = 250000.0 }
    yield { Bedrooms = 4; Floors = 1; HasPool = true; Price = 300000.0 }
    yield { Bedrooms = 2; Floors = 3; HasPool = false; Price = 200000.0 }
    yield { Bedrooms = 5; Floors = 2; HasPool = true; Price = 400000.0 }
    yield { Bedrooms = 3; Floors = 1; HasPool = false; Price = 275000.0 }
  }

// Filter out houses with 2 bedrooms, 1 floor, and a pool

let filteredHouses = 
  houses
  |> Seq.filter(fun house -> house.Bedrooms = 2 && house.Floors = 1 && house.hasPool)

// Calculate the average price of the filtered houses
let totalPrices = filteredHouses |> Seq.map(fun house -> house.Price) |> Seq.sum
let averagePrice = totalPrices / float (Seq.length filteredHouses)

// print the average price
printfn "Average price of 2 bedroom homes with 1 floor and a pool:  $%.2f" averagePrice

// Define a type for animals
type Animals = {
  Species: string
  Habitat: string
  FootCondition: string
  isEndangered: bool
  AverageWeight: float
  AverageLifespan: int
}

// Define a sequence of animals
let animals = 
  seq {
    yield { Species = "Tiger"; Habitat = "Jungle"; FootCondition = "Paws"; isEndangered = true; AverageWeight = 500.0; AverageLifespan = 15 }
    yield { Species = "Elephant"; Habitat = "Savannah"; FootCondition = "Hooves"; isEndangered = true; AverageWeight = 10000.0; AverageLifespan = 60 }
    yield { Species = "Panda"; Habitat = "Forest"; FootCondition = "Paws"; isEndangered = true; AverageWeight = 250.0; AverageLifespan = 20 }
    yield { Species = "Giraffe"; Habitat = "Savannah"; FootCondition = "Hooves"; isEndangered = false; AverageWeight = 1500.0; AverageLifespan = 25 }
    yield { Species = "Lion"; Habitat = "Savannah"; FootCondition = "Paws"; isEndangered = false; AverageWeight = 400.0; AverageLifespan = 12 }
  }

// Map the food consumption to double it
let doubleFoodConsumption = 
  animals
  |> Seq.map(fun animal -> { animal with AverageWeight = animal.AverageWeight * 2.0 })

// Filter animals with a lifespan less than 25 and project attributes
let selectedAttributes = 
  doubledFoodConsumptionAnimals
  |> Seq.filter(fun animal -> animal.AverageLifespan < 25)
  |> Seq.map(fun animal -> (animal.Species, animal.Habitat, animal.AverageLifespan))

//1. Define a list of integers in F# containing numbers from 1 to 10. Use a range expression.
let numbers = [1..10]

//2. Write a function in F# to calculate the sum of squares of elements in a given list of integers
let sumOfSquares list = List.sumBy (fun x -> x * x) list

//3. Implement a function in F# to find the maximum element in a given list of integers
let maxElement list = List.max list

//4. Write a function in F# to filter out even numbers from a given list of integers
let filterEven list = List.filter (fun x -> x % 2 = 0) list

//5. Implement a function in F# to double each element in a given list of integers
let doubleElements list = List.map (fun x -> x * 2) list

//6. Define a tuple in F# representing a person's name, age, and gender
let person = ("Mike", 19, "Male")

//7. Write a pattern matching expression in F# to check if a given number is positive, negative, or zero
let checkNumber x = 
    match x with
    | x when x > 0 -> "Positive"
    | x when x < 0 -> "Negative"
    | _ -> "Zero"

//8. Implement a function in F# to find the factorial of a given number using recursion
let rec factorial n = 
    match n with
    | 0 -> 1
    | _ -> n * factorial (n - 1)

//9. Define a record type in F# representing a student with fields for name, age, and list of subjects
type Student = { Name: string; Age: int; Subjects: string list }
let student = { Name = "John"; Age = 20; Subjects = ["Math"; "Science"; "English"] }

//10. Write a function in F# to find the length of a given list using recursion
let rec length list = 
    match list with
    | [] -> 0
    | _::tail -> 1 + length tail

//11. Implement a function in F# to reverse a given list
let reverseList list = List.rev list

//12. Define a discriminated union in F# representing shapes such as Circle, Rectangle, and Triangle
type Shape = 
    | Circle of float
    | Rectangle of float * float
    | Triangle of float * float * float

//13. Write a function in F# to calculate the area of a shape using pattern matching
let area shape = 
    match shape with
    | Circle r -> 3.14 * r * r
    | Rectangle w h -> w * h
    | Triangle a b c -> 
        let s = (a + b + c) / 2.0
        sqrt (s * (s - a) * (s - b) * (s - c))

//14. Implement a function in F# to merge two sorted lists into a single sorted list
let rec mergeLists list1 list2 = 
    match list1, list2 with
    | [], _ -> list2
    | _, [] -> list1
    | head1::tail1, head2::tail2 -> 
        if head1 < head2 then head1::(mergeLists tail1 list2)
        else head2::(mergeLists list1 tail2)

//15. Define a map (dictionary) in F# representing a mapping of students to their respective grades in a subject
let grades = 
    [
        ("John", 90)
        ("Mike", 85)
        ("Alice", 95)
    ]

//16. Write a function in F# to calculate the average grade of a student from the given map
let averageGrade grades = 
    let total = List.sumBy snd grades
    let count = List.length grades
    total / count

//17. Implement a function in F# to remove duplicates from a given list
let removeDuplicates list = List.distinct list

//18. Define an option type in F# representing either Some value or None
let x = Some 10
let y = None

//19. Write a function in F# to find the nth Fibonacci number using pattern matching
let rec fibonacci n = 
    match n with
    | 0 -> 0
    | 1 -> 1
    | _ -> fibonacci (n - 1) + fibonacci (n - 2)

//20. Implement a function in F# to perform a left fold operation on a given list
let leftFold list = List.fold (fun acc x -> acc + x) 0 list

//21. Define a sequence expression in F# to generate a sequence of even numbers less than 20
let evenNumbers = seq { for i in 0..20 do if i % 2 = 0 then yield i }

//22. Write a function in F# to check if a given list of integers is sorted in ascending order
let isSorted list = List.sort list = list

//23. Implement a function in F# to find the median of a given list of integers
let median list = 
    let sortedList = List.sort list
    let length = List.length sortedList
    if length % 2 = 0 then 
        let middle1 = List.item (length / 2 - 1) sortedList
        let middle2 = List.item (length / 2) sortedList
        (middle1 + middle2) / 2
    else List.item (length / 2) sortedList

//24. Define a function in F# to partition a list of integers into two lists containing even and odd numbers respectively
let partition list = 
    List.partition (fun x -> x % 2 = 0) list

//25. Write a function in F# to find the frequency of each element in a given list
let frequency list = 
    list 
    |> List.groupBy id 
    |> List.map (fun (k, v) -> (k, List.length v))

//26. Implement a function in F# to remove the last element from a list
let removeLast list = 
    match list with
    | [] -> []
    | _::[] -> []
    | head::tail -> head::(removeLast tail)

//27. Define a recursive function in F# to find the nth term of the Fibonacci sequence
let rec nthFibonacci n = 
    match n with
    | 0 -> 0
    | 1 -> 1
    | _ -> nthFibonacci (n - 1) + nthFibonacci (n - 2)

//28. Write a function in F# to check if a given string is a palindrome
let isPalindrome str = 
    let reversed = List.rev (List.ofSeq str)
    List.ofSeq str = reversed

//29. Implement a function in F# to shuffle the elements of a given list randomly
let shuffle list = 
    let rnd = System.Random()
    List.sortBy (fun _ -> rnd.Next()) list

//30. Define an active pattern in F# to match even numbers
let (|Even|Odd|) n = if n % 2 = 0 then Even else Odd

//31. Write a function in F# to calculate the dot product of two vectors represented as lists of integers
let dotProduct vector1 vector2 = 
    List.map2 (*) vector1 vector2
    |> List.sum

//32. Define a sequence expression in F# to generate a sequence of prime numbers less than 100
let isPrime n = 
    let upperBound = int (sqrt (float n))
    let rec checkDivisor divisor = 
        divisor > upperBound || (n % divisor <> 0 && checkDivisor (divisor + 1))
    checkDivisor 2
let primes = seq { for i in 2..100 do if isPrime i then yield i }

//33. Write a function in F# to check if a given list contains any duplicate elements
let hasDuplicates list = 
    let sortedList = List.sort list
    let rec checkDuplicates list = 
        match list with
        | [] -> false
        | _::[] -> false
        | head1::head2::tail -> 
            if head1 = head2 then true
            else checkDuplicates (head2::tail)
    checkDuplicates sortedList

//34. Implement a function in F# to rotate a list to the left by a specified number of positions
let rotateLeft list n = 
    let length = List.length list
    let n = n % length
    (List.skip n list) @ (List.take n list)

//35. Implement a function in F# to find the intersection of two lists
let intersection list1 list2 = List.filter (fun x -> List.contains x list2) list1

//36. Define a recursive function in F# to calculate the sum of digits of a given number
let rec sumOfDigits n = 
    match n with
    | 0 -> 0
    | _ -> n % 10 + sumOfDigits (n / 10)

// using prefix notation 
// this tis the same as 5 * 6
let x = (*) 5 6

// this is the mod
let y = (%) 10 2

// using a prefix layer, equivalent to 9 + 2 = 11
let z = (+) ((%) 100 91) 2

// using passed prefix functions, equivalent to 30 - 0
let k = (-) x y

let fahrenheitToCelsius (degreesF: float) = (degreesF - 32.0) * (5.0 / 9.0)

let marchHighTemps = [ 53.0; 57.0; 59.0; 62.0; 63.0; 65.0; 67.0; 68.0; 66.0; 61.0; 57.0; 54.0; 49.0; 47.0; 47.0; 47.0; 49.0; 52.0; 55.0; 57.0; 59.0; 61.0; 63.0; 64.0; 65.0; 65.0; 63.0; 61.0; 58.0; 55.0; 52.0 ]

margHighTemps
|> Seq.average
|> fahrenheitToCelsius
|> printfn "The average high temperature in March was %f degrees Celsius"

// using the forward composition operator on an 'anonymous' sequence
// notice the avg (FUNCTIION) doesn't take in any arguments
let avg = Seq.average >> fahrenheitToCelsius
printfn "The average high temperature in March was %f degrees Celsius" (avg marchHighTemps)

let rec factorial v =
  match v with | 1L -> 1L
        | _ -> v * factorial (v - 1L)
  
let rec factorialTail n acc = 
  match n with | 0 -> acc
        | _ -> factorialTail (n - 1) (n * acc)

// Sample output
printfn "%A" (factorial 5 1) // 120

// Output more results 
[1..10]
|> List.map(fun n -> factorialTail n 1)
| > List.iteri (fun i result ->
    printfn "Factorial of %d is %d" (i + 1) result)

let rec fib v =
  match v with | 0 -> 0
        | 1 -> 1
        | _ -> fib (v - 1) + fib (v - 2)

// Collect and output the fibonacci numbers as an array
// let output = [] for i in 1..10 -> (fib i) []
// printfn "%A" output

let fibTailRecursive n = 
  let rec fibTail n a b =
    match n with
    | 0 -> a
    | _ -> fibTail (n - 1) b (a + b)
  fibTail n 0 1
printfn "%A" (fibTailRecursive 6) // 8

// Give me all list methods in f#
let methods = typeof<List<int>>.GetMethods()
let methodNames = methods |> Array.map(fun m -> m.Name)
printfn "%A" methodNames
