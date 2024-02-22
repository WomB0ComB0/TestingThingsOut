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