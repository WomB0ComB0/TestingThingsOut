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