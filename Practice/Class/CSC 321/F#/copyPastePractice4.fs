let numbers = [1..10]

let sumOfSquares list = List.sumBy (fun x -> x * x) list

let maxElement list = List.max list   

let filterEven list = List.filter (fun x -> x % 2 = 0) list 

let doubleElements list = List.map (fun x -> x * 2) list

let person = ("Mike", 19, "Male")

let checkNumber x =
  match x with
  | x when x > 0 -> "Positive"
  | x when x < 0 -> "Negative"
  | _ -> "Zero"

let rec factorial n =
  match n with
  | 0 -> 1
  | _ -> n * factorial (n - 1)

type Student = { Name: string; Age: int; Subjects: string lits; }
let student = { Name = "John"; Age = 20; Subjects = ["Math"; "Science"; "English"] }

let rec length list = 
  match list with
  | [] -> 0 
  | _::tail -> 1 + length tail

let reverseList list = List.rev list 

type Shape =
  | Circle of float
  | Rectangle of float * float
  | Triangle of float * float * float

let area shape = 
  match shape with
  | Circle r -> 3.14 * r * r
  | Rectangle w h -> w * h
  | Triangle a b c -> 
      let s = (a + b + c) / 2.0
      sqrt (s * (s - a) * (s - b) * (s - c))

let rec mergeLists l1 l2 = 
  match l1, l2 with
  | [], _ -> l2
  | _, [] -> l1
  | h1::t1, h2::t2 -> h1::h2::mergeLists t1 t2

let grades =
  [
    ("Mike", 0)
    ("Alice", 0)
    ("John", 0)
  ]

let averageGrades grades = 
  let total  = List.sumBy snd grades 
  let count = List.length grades
  total / count
let removeDuplicates grades = List.distinct list  

let x = Some 10
let y = None

let rec fibonacci n = 
  match n with
  | 0 -> 0
  | 1 -> 1
  | _ -> fibonacci (n - 1) + fibonacci (n - 2)
let leftFold list = List.fold (fun acc x -> acc + x) 0 list

let evenNumbers = seq  { for i in 0..20 do if i % 2 = 0 then yield i }

let isSorted list = List.sort list = list 

// Doomsday started
let median = 

let partition = 

let frequency = 

let removeLast = 

let nthFibonacci = 

let isPalindrome = 

let shuffle = 

let dotProduct = 

let primes = 

let hasDuplicates = 

let rotateLeft = 

let rotateLeftNth = 

let intersection = 

let sumOfDigits = 


let test = 
  [
    maxElement numbers
    sumOfSquares numbers
    filterEven numbers
    doubleElements numbers
    checkNumber 10
    factorial 5
    length numbers
    reverseList numbers
    area (Circle 5.0)
    mergeLists [1;3;5] [2;4;6]
    averageGrades grades
    removeDuplicates [1;2;3;4;5;5;6;6;7;8;9;9;10]
    fibonacci 10
    leftFold numbers
    evenNumbers
    isSorted [1;2;3;4;5]
    median numbers
    partition numbers
    frequency [1;2;3;4;5;5;6;6;7;8;9;9;10]
    removeLast numbers
    nthFibonacci 10
    isPalindrome "madam"
    shuffle numbers
    dotProduct [1;2;3] [4;5;6]
    primes
    hasDuplicates [1;2;3;4;5;5;6;6;7;8;9;9;10]
    rotateLeft numbers
    rotateLeftNth numbers 3
    intersection [1;2;3;4;5] [4;5;6;7;8]
    sumOfDigits 12345
]
test |> List.iter (fun x -> printfn "%A" x)
