let numbers = [1..10]

let sumOfSquares list = List.sumBy (fun x -> x * x )

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

type Student = { Name: string; Age: int; Subjects: string list }  
let student = { Name = "John"; Age = 20; Subjects = ["Math"; "Science"; "English"] }

let rec length list = 
  match list with
  | [] -> 0
  | _::tail -> 1 + length tail

let reverseList list = List.rev list

type Shape =
  | Circle  of float
  | Square of float * float
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
  | [],_ -> l2
  | _,[] -> l1
  | head::tail, head2::tail2 ->
      if head < head2 then head::(mergeLists tail l2)
      else head2::(mergeLists l1 tail2)
    
let grades =
  [
    ("John", 0)
    ("Mike", 0)
    ("Alice", 0)
  ]

let averageGrades grades =
  let total = List.sumBy snd grades
  let count = List.length grades
  total / count

let removeDuplicates list = List.distinct list

let x = Some 10
let y = None

let rec fibonacci n = 
  match n with 
  | 0 -> 0
  | 1 -> 1
  | _ -> fibonacci (n - 1) + fibonacci (n - 2)

let leftFold list = List.fold (fun acc x -> acc + x) 0 

let evenNumbers = seq { for i in 0..20 do if i % 2 = 0 then yield i }

let isSorted list = List.sort list = list  

let median list =
  let sortedList = List.sort list
  let length = List.length sortedList
  match length % 2 with
  | 0  ->
    let m1 = List.item (length / 2 - 1) sortedList
    let m2 = List.item (length / 2) sortedList
    (m1 + m2) / 2.0
  | _ -> float (List.item (length / 2) sortedList)

let partition list = 
  List.partition (fun x -> x % 2 = 0) list

let frequency list = 
  list
  |> List.groupBy id // Group by the identity function
  |> List.map (fun (k, v) -> (k, List.length v)) // Map the key value pair to the key and the length of the value

let removeLast list = 
  match list with
  | [] -> []
  | _::[] -> []
  | head::tail -> head::(removeLast tail)

let rec nthFibonacci n =
  match n with
  | 0 -> 0
  | 1 -> 1
  | _ -> nthFibonacci (n - 1) + nthFibonacci (n - 2)

let isPalindrome str =
  let reversed = List.rev (List.ofSeq str)
  List.ofSeq str = reversed

let shuffle list = 
  let rnd = System.Random()
  List.sortBy (fun _ -> rnd.Next()) list

let (|Even|Odd|) n = if n % 2 = 0 then Even else Odd

let dotProduct v1 v2 = 
  List.map2 (*) v1 v2
  |> List.sum

let isPrime n =
  let upperBound = int (sqrt (float n))
  let rec checkDivisor divisor = 
    divisor > upperBound || (n % divisor <> 0 && checkDivisor (divisor + 1))
  checkDivisor 2

let primes = seq { for i in 2..100 do if isPrime i then yield i }

let hasDuplicates list = 
  let sortedList = List.sort list
  let rec checkDuplicates list =
    match list with
    | [] -> false
    | _::[] -> false
    | head::next::tail -> head = next || checkDuplicates (next::tail)
  checkDuplicates sortedList

let rotateLeft list = 
  match list with
  | [] -> []
  | head::tail -> tail @ [head]

let rotateLeftNth list n = 
  let length = List.length list
  let n = n % length
  let front, back = List.splitAt n list
  back @ front

let intersection l1 l2 = List.filter (fun x -> List.contains x l2) l1

let rec sumOfDigits n = 
  match n with
  | 0 -> 0
  | _ -> n % 10 + sumOfDigits (n / 10)

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