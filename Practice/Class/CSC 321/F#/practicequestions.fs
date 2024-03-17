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
