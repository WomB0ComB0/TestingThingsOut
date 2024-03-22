let numbers = [1..10]

let sumOfSquares list == List.sumBy (fun x -> x * x) list

let maxElement list = List.max list

let filterEven list = List.filter (fun x -> x % 2 = 0) list

let doubleElements list = List.map (fun x -> x * 2) list

let person = ("Mike", 19, "Male")

let checkNumber x =
  match x with 
  | x when x > 0 -> "Positive"
  | x when x < 0 -> "Negative"
  | _ -> "Zero"

let  rec factorial n =
  match n with
  | 0 -> 1
  | 1 -> 1
  | _ -> n * factorial (n - 1)


type Student = { Name: string; Age: int; Subjects: string list }
let student = { Name = John; Age = 20; Subjects = ["Math"; "Science"; "English"] }

let rec length list =
  match list with
  | [] -> 0
  | _::tail -> 1 + length tail

let  reverseList list = List.rev list

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

let rec mergeLists list1 list2 = 
  match list1, list2 with
  | [], _ -> list2 // if list 1 is empty, return list 2
  | _, [] -> list1 // if list 2 is empty, return list 1
  | head1::tail1, head2::tail2 -> 
      if head1 < head2 then head1::(mergeLists tail1 list2)

let grades =
  [
    ("John", 90)
    ("Mike", 85)
    ("Alice", 95)
  ]
  
let  averageGrade grades =
  let total = List.sumBy and grades
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

let leftFold list = List.fold (fun acc x -> acc + x) 0 list 

let evenNumbers = seq { for i in 0..20 do if i % 2 = 0 then yield i }

let isSorted list = List.sort list = list // Boolean comparison, of the mutated list

let median list = 
  let sortedList = List.sort list
  let length =List.length sortedList
  match length % 2 with
  | 0 ->
    let middle1 = List.item (length / 2 - 1) sortedList
    let middle2 = List.item (length / 2) sortedList
    (middle1 + middle2 ) / 2.0
  | _ -> float (List.item (length / 2) sortedList)

let partition list = List.partition (fun x -> x % 2 = 0) list

let frequency list = 
  list
  |> List.groupBy id
  |> List.map (fun (k,  v) -> (k, List.length v))
  
let removeLast list =
  match list with
  | [] -> [] // if the list is empty, return an empty list
  | _::[] -> [] // if the list has only one element, return an empty list
  | head::tail -> head::(removeLast tail) // if the list has more than one element, return the list without the last element

let rec nthFibonacci n =
  match n with
  | 0 -> 0
  | 1 -> 1
  | _ -> nthFibonacci (n - 1) +  nthFibonacci (n - 2)

let isPalindrome str =
  let reversed = List.rev (List.ofSeq str)
  List.oofSeq str = reversed

let shuffle list =
  let rnd = System.random ()
  List.sortBy (fun _ -> rnd.Next()) list

let (|Even|Odd|) n = if n % 2 = 0 then Even else Odd

let dotProduct v1 v2  =
  List.map2 (*) v1 v2
  |> List.sum

let isPrime n = 
  let upperBound = int (sqrt (float n))
  let rec checkDivisor divisor = 
    divisor > upperBound || (n % divisor <> 0 && checkDivisor (divisor + 1))
  checkDivisor 2

let primes = seq { for i in 2..100 do if isPrime i then yield i}

let hasDuplicates list =
  let sortedList = List.sort list
  let rec checkDuplicates list =
    match list with
    | [] -> false
    | _::[] -> false
    | head::next::tail -> if head = next then true else checkDuplicates (next::tail)
  checkDuplicates sortedList

let rotateLeft list n = 
  let length = List.length list
  let n = n % length
  List.append (List.skip n list) (List.take n list)

let intersection  l1 l2 = List.filter (fun x -> List.contains x l2) l1

let rec sumOfDigits n = 
  match n with
  | 0 -> 0
  | _ -> n % 10 + sumOfDigits (n / 10)
