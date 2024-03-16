open System 
open MathNet.Numerics.Distributions

let rand = Random()

// uniform
let generateUniform(n: int): float list =
  [for _ in 1..n -> rand.NextDouble()]

let outputUniform = generateUniform 10

// normal

let rec generateNormal (n: int): float list =
  let u1 = rand.NextDouble()
  let u2 = rand.NextDouble()
  let z0 = sqrt(-2.0 * log u1) * cos(2.0 * Math.PI * u2)
  let z1 = sqrt(-2.0 * log u1) * sin(2.0 * Math.PI * u2)
  if n <= 1 then [z0]
  else z0 :: z1 :: generateNormal (n - 2)

let randomNumbers2 = generateNormal 10
printfn "%A" randomNumbers2

// order a list
let randomNumbersSorter = generateNormal 10 |> List.sort

// Calculate mean
let mean = List.average outputUniform

// Calculate median
let sortedNumbers = List.sort outputUniform

let media =
  match List.length sortedNumbers with
  | len when len % 2 = 0 ->
    let mid = len / 2
    (sortedNumbers.[mid - 1] + sortedNumbers.[mid]) / 2.0
  | len ->
    sortedNumbers.[len / 2]
  
// Minimum and Maximum
let minimum = List.min outputUniform
let maximum = List.max outputUniform

// Standard deviation
let deviation = 
  let squaredDifferences = List.map(fun x -> (x - mean) ** 2.0) outputUniform
  sqrt (List.sum squaredDifferences / float (List.length squaredDIfferences))

printfn "Mean: %f" mean
printfn "Median: %f" media
printfn "Minimum: %f" minimum
printfn "Maximum: %f" maximum
printfn "Standard Deviation: %f" deviation

// reverse a list
let rec reverseList (list: 'a list): 'a list =
  match list with
  | [] -> []
  | head :: tail -> reverseList tail @ [head]

let myList = [1;2;3;4;5]
let reversedList = reverseList myList

printfn "Original list: %A" myList
printfn "Reversed list: %A" reversedList

// remove duplicates from a list
let removeDuplicates(seq:seq<int>) (remaining: int seq) : seq<int> = 
  match Seq.toList remaining with
  | [] -> Seq.empty
  | head :: tail when Set.contains head acc -> removeDuplicatesHelper acc (Seq.skip 1 remaining)
  | head :: tail -> Seq.append (Seq.singleton head) (removeDuplicatesHelper (Set.add head acc)(Seq.skip 1 remaining))
removeDuplicatesHelper Set.empty seq

// Define  a type for dishes
type Dish = { Name: string; Price: float }

// Define a function to calculate the price including tax
let priceWithTax (price: float): float =
  price * (1.1) // 10% tax

// Define a list of dishes
let dishes = [
  { Name = "Pizza"; Price = 10.0 }
  { Name = "Pasta"; Price = 8.0 }
  { Name = "Salad"; Price = 5.0 }
  { Name = "Burger"; Price = 15.75 }
]

// Map the prices to include tax
let pricesWithTax = List.map(fun dish ->  { dish with Price = priceWithTax dish.Price }) dishes

// FIlter out dishes with a final price less than $10
let cheapDishes = List.filter(fun dish -> dish.Price < 10.0) pricesWithTax

// Print the cheap dishes
cheapDishes |> List.iter(fun dish -> printfn "Name: %s, Price: %f" dish.Name dish.Price)

// Define a type for houses
type House = { Bedrooms: int; Floors; int; HasPool: bool; Price: float }

// Define a sequence of houses
let houses =
  seq{
    yield { Bedrooms = 3; Floors = 2; HasPool = false; Price = 250000.0 }
    yield { Bedrooms = 4; Floors = 1; HasPool = true; Price = 300000.0 }
    yield { Bedrooms = 2; Floors = 3; HasPool = false; Price = 200000.0 }
    yield { Bedrooms = 5; Floors = 2; HasPool = true; Price = 400000.0 }
    yield { Bedrooms = 3; Floors = 1; HasPool = false; Price = 275000.0 }
  }

// Filter out houses with 2 bedrooms, 1 floor, and a pool

let filteredHouses = 
  houses
  |> Seq.filter(fun house -> house.Bedrooms = 2 && house.Floors = 1 && house.hasPool)

// Calculate the average price of the filtered houses
let totalPrices = filteredHouses |> Seq.map(fun house -> house.Price) |> Seq.sum
let averagePrice = totalPrices / float (Seq.length filteredHouses)

// print the average price
printfn "Average price of 2 bedroom homes with 1 floor and a pool:  $%.2f" averagePrice

// Define a type for animals
type Animals = {
  Species: string
  Habitat: string
  FootCondition: string
  isEndangered: bool
  AverageWeight: float
  AverageLifespan: int
}

// Define a sequence of animals
let animals = 
  seq {
    yield { Species = "Tiger"; Habitat = "Jungle"; FootCondition = "Paws"; isEndangered = true; AverageWeight = 500.0; AverageLifespan = 15 }
    yield { Species = "Elephant"; Habitat = "Savannah"; FootCondition = "Hooves"; isEndangered = true; AverageWeight = 10000.0; AverageLifespan = 60 }
    yield { Species = "Panda"; Habitat = "Forest"; FootCondition = "Paws"; isEndangered = true; AverageWeight = 250.0; AverageLifespan = 20 }
    yield { Species = "Giraffe"; Habitat = "Savannah"; FootCondition = "Hooves"; isEndangered = false; AverageWeight = 1500.0; AverageLifespan = 25 }
    yield { Species = "Lion"; Habitat = "Savannah"; FootCondition = "Paws"; isEndangered = false; AverageWeight = 400.0; AverageLifespan = 12 }
  }

// Example usage
for animals in animals do
  printfn "Species: %s, Habitat: %s, Food Consumption: %.1f, Endangered: %b, Average Weight: %.1f, Average Lifespan: %d" animals.Species animals.Habitat animals.FootCondition animals.isEndangered animals.AverageWeight animals.AverageLifespan

// Map the food consumption to double it
let doubleFoodConsumption = 
  animals
  |> Seq.map(fun animal -> { animal with AverageWeight = animal.AverageWeight * 2.0 })

// Filter animals with a lifespan less than 25 and project attributes
let selectedAttributes = 
  doubledFoodConsumptionAnimals
  |> Seq.filter(fun animal -> animal.AverageLifespan < 25)
  |> Seq.map(fun animal -> (animal.Species, animal.Habitat, animal.AverageLifespan))

// Print the selected attributes
for (species habitat lifespan) in selectedAttributes do
  printfn "Species: %s, Habitat: %s, Average Lifespan: %d" species habitat lifespan