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

// Common and unsafe C#: if is a statement
// public int SmellyCSharpStatement(bool aBool)
// {
//   int result; // What is the value of the result before it is used?
//   if (aBool)
//   {
//     result = 42; // What is the result in the 'else' case?
//   }
//   Console.WriteLine("result={0}", result)
//   return result;
// }

// F# Solution
let IfAsExpression aBool = // assigned the value from the if statement
  if aBool then
    42 // value when true
  else
    0 // F# will enforce that we handle the else case

let  WrappedWithFunction aBool = // wrap the if with a function
  if aBool then 42 else 0

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
// val it: int = 200

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

// use bindings
open System.IO

let writetoFile filename obj =
  use file1 = File.CreateText(filename)
  file1.WriteLine("{0}", obj.ToString())
  // file1.Dispose() is called when function returns

// using function
open System.IO

let writetofile2 filename obj =
  using
    (System.IO.File.CreateText(filename))
    (fun file1 -> file1.WriteLine("{0}", obj.ToString()))
writetofile2 "abc.txx" "The quick sly fox jumps over the lazy brown dog."

// do binding
do printfn "Hello"
do 1 + 1 // warning, should be returning unit
do (1 + 1 |> ignore) // ok

// For and while loops
for i in [1; 2; 3;] do // iterate across all items in the list
  printfn "%A" i

for i in [1..3] do // iterate integers from 1 to 3
  printfn "%A" i

for i = 1 to 3 do // iterate from 1 to 3
  printfn "%A" i

let mutable i = 0
while i < 3 do // keep doing this until 1 is 3
  printfn "%A" i
  i <- i + 1

// Imperative vs functional
let data = [1; 2; 3;] // sum the items in a list,  imperative / old school
let mutable mutableSum = 0;
for value in data do mutableSum <- mutableSum + value

List.sum(data) // functional / expression way to sum
// val it: int = 6

List.fold (+) 0 [1; 2; 3;] // functional /fold form of sum
// val  it: int = 6

// instead of a for loop to iterate each item
List.iter (fun x -> printfn "%A" x) data

// Comprehensions
[for x in 1..5 do yield x * x]
// val it: int list = [1; 4; 9; 16; 25]

[for x in 1..5 -> x * x] // shortcut for above

[
  for r in 1..8 do
    for c in 1..8 do
      if r <> c then yield (r, c)
]
// val it: (int * int) list = [(1,2); (1,3); (1,4); (1,5); (1,6); (1,7); (1,8); (2,1); (2,3); (2,4); (2,5); (2,6); (2,7); (2,8); (3,1); (3,2); (3,4); (3,5); (3,6); (3,7); (3,8); (4,1); (4,2); (4,3); (4,5); (4,6); (4,7); (4,8); (5,1); (5,2); (5,3); (5,4); (5,6); (5,7); (5,8); (6,1); (6,2); (6,3); (6,4); (6,5); (6,7); (6,8); (7,1); (7,2); (7,3); (7,4); (7,5); (7,6); (7,8); (8,1); (8,2); (8,3); (8,4); (8,5); (8,6); (8,7)]

// Conditional Expressions 

let  result = 
  if boolexpr, then
    expr,
  elif boolexpr, then
    expr,

else then
    expr

// if-then-elif-else in use
let compares x y = 
  if x = y then $"{x} equals {y}"
  elif x < y then $"{x} is less than {y}"
  else $"{x} is greater than {y}"

compare 1 2
// val it: string = "1 is less than 2"

compare 2 1 
// val it: string = "2 is greater than 1"

compare 2 2
// val it: string = "2 equals 2"

// Else branches must be specified if result is not unit

let a = 2
let  x = if a = 1 then "a is one" // invalid f#
if a = 2 then printfn "a is 2" // is valid without else because it returns unit

// Match expressions

match expr with
  | pattern1 [when cond1]-> expr1
  | pattern2 [when cond2]-> expr2
  ...
  | patternN [when condN]-> exprN

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

let functional x y =
  try
    try
      if x = y then raise (Error1($"Values are equal", x))
      else raise (Error2($"Values are note equal", x, y))
    with
      | Error1(str, x) -> printfn $"{str} {x}"
  finally
    printfn "all done"

function 10 10 // prints on the console: "Values are equal 10" and "all done"
function 9 2 // prints on the console: "all done", and then an exception message

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


// Type of Associativity
let distance x y = if x > y then x - y else y - x
// val distance: x: int -> y: int -> int

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

// Imperative sum of items in a list
let sum_imperative items =
  let mutable total = 0 // uh oh, explicit state tracking with a mutable
  for item in items do total <- total + item
  total
// val sum_imperative: items: seq<int> -> int

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

while running do
  printfn $"State: {state}"
  let i = System.Console.ReadLine()
  let (s, v) = System.Int32.TryParse i
  match s with
  | true -> state <- state + v
  | false -> if i = "x" then running <- false

// Functional (squeaky clean)
let rec appLoop state =
  printfn $"State: {state}"
  let i = System.Console.ReadLine()
  let (s, v) = System.Int32.TryParse i
  match s with
  | true -> appLoop (state + v)
  | _ -> if i <> "x" then appLoop state
appLoop 0