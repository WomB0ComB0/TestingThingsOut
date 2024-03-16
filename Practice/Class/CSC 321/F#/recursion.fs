open System

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

