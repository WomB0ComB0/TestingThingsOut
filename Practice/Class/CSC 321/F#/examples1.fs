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

[2..100]
  |> Seq.map(fun x ->
    if isPrime x then
      x
    else
      0)
    |> Seq.filter(fun x -> x <> 0)
    |> Seq.iter(fun output -> printfn "%A" output)
    
// using match instead of if statement
[2..20]
  |> Seq.map(fun x ->
    match isPrime x with
    | true -> x
    | false -> 0)
  |> Seq.filter(fun x -> x <> 0)
  |> Seq.iter(fun output -> printfn "%A" output)