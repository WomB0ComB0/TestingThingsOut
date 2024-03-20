
let numbers = [1..10]
printfn "%A" numbers

let sumOfSquares list = List.sumBy (fun x -> x * x) list
printfn "%A" (sumOfSquares numbers)

let maxElement list = List.max list
printfn "%A" (maxElement numbers)

let filterEven list = List.filter (fun x -> x % 2 = 0) list
printfn "%A" (filterEven numbers)

let doubleElements list = List.map (fun x -> x * 2) list
printfn "%A" (doubleElements numbers)

let person = ("Mike", 19, "Male")
printfn "%A" person 

let checkNumber x =
  match x with
  | x when x > 0 -> "Positive"
  | x when x < 0 -> "Negative"
  | _ -> "Zero"
printfn "%s" (checkNumber 5)

let rec factorial n =
  match n with
  | 0 -> 1
  | _ -> n * factorial (n - 1)
printfn "%d" (factorial 5)

type Student = { Name: string; Age: int; Subjects: string list }
let student = { Name = "Mike"; Age = 19; Subjects = ["Math"; "Science"; "English"]}
printfn "%A" student

let rec length list =
  match list with
  | [] -> 0
  | _::tail -> 1 + length tail
printfn "%A" (length [1..20])

let reverseList list = List.rev list
printfn "%A" (reverseList numbers)

type Shape =
  | Circle of float
  | Rectangle of float * float
  | Triangle of float * float * float
printfn "%A" Shape

let area shape =
  match shape with
  | Circle r -> 3.14 * r * r
  | Rectangle w h -> w * h
  | Triangle a b c ->
    let s = (a + b + c) / 2.0
    sqrt (s * (s - a) * (s - b) * (s - c))

printfn "%f" (area (Triangle (2.4, 2.2, 2.0)))

let rec mergeLists list1 list2 = 
  match list1, list2 with
  | [], _ -> list2
  | _, [] -> list1
  | head1::tail1, head2::tail2 ->
    if head1 < head2 then head1::(mergeLists tail1 list2)
    else head2::(mergeLists list1 tail2)
printfn "%A" (mergeLists [1;3;5] [2;4;6])

let grades = 
  [
    ("Josh", 90);
    ("Mike", 85);
    ("Alice", 95);
  ]
printfn "%A" grades
let averageGrade grades = 
  let total = List.sumBy snd grades
  let count = List.length 
  total / count
printfn "%d" (averageGrade grades)

let removeDuplicates list = List.distinct list // important, easy alternative than using a set
printfn "%A" (removeDuplicates [1;2;3;4;5;5;6;6;7;8;9;9;10])

let x = Some 10
let y = None
printfn "%A" x
printfn "%A" y

let rec fibonacci n =
  match n with
  | 0 -> 0
  | 1 -> 1
  | _ -> fibonacci (n - 1) + fibonacci (n - 2)
printfn "%d" (fibonacci 10)

let leftFold list = List.fold (fun acc x -> acc + x) 0 list
printfn "%d" (leftFold [1..10])

let evenNumbers = seq { for i in 0..20 do if i % 2 = 0 then yield i }
printfn "%A" evenNumbers

let isSorted list = List.sort list = list
printfn "%b" (isSorted [1;2;3;4;5;6;7;8;9;10])

let median list = 
  let sortedList = List.sort list
  let length = List.length sortedList
  if length % 2 = 0 then 
    let middle1 = List.item (length / 2 - 1) sortedList
    let middle2 = List.item (length / 2) sortedList
    (middle1 + middle2) / 2
  else List.item (length / 2) sortedList

printfn "%d" (median [1;2;3;4;5;6;7;8;9;10])

let partition list = 
  List.partition (fun x -> x % 2 = 0) list
printfn "%A" (partition [1..10])

let frequency list = 
  list
  |> List.groupBy id
  |> List.map (fun (k, v) -> k, List.length v)
printfn "%A" (frequency [1;2;3;4;5;5;6;6;7;8;9;9;10])

let removeLast list = 
  match list with
  | [] -> []
  | _::[] -> []
  | head::tail -> head::(removeLast tail)