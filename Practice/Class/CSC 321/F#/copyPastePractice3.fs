let numbers = [1..10]

let sumOfSquares list = List.sumBy (fun x -> x * x) list

let maxElement list = List.max list

let filterEven list = List.filter (fun x -> x % 2 = 0) list

let doubleElements list = List.map (fun x -> x * 2) list

let checkNumber x =
  match x with 
  | x when x > 0 -> "Positive"
  | x when x < 0 -> "Negative"
  | _ -> "Zero"

let rec factorial x =
  match x with
  | 0 -> 1
  | _ -> x * factorial (x - 1)

type Student = { Name: string; Age: int; Subjects: string list; }
let student = {
  Name = "John"
  Age = 20
  Subjects = ["Math"; "Science"; "English"]
}

let rec length list =
  match list with
  | [] -> 0
  | _::tail -> 1 + length tail

let reverseList list  List.rev list 

type Shape =
  | Circle of float
  | Rectangle of float * float
  | Triangle of float * float * float

let area =

let mergeLists =

let averageGrades =

let removeDuplicates =

let fibonacci =

let leftFold =

let evenNumbers =

let isSorted =

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
    sumOfSquares numbers
    maxElement numbers
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