import { ChangeEvent, useState } from "react";

type PostProps = { 
  id: number
  title: string
}
export default function Post({id, title}: PostProps) {
  const [newTitle, setNewTitle] = useState("")
  // const changeTitle = (e: React.MouseEvent) => {
  //   setNewTitle("wooooo")
    
  // }
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle} onClick={e => e.}>Click me</button>
    </div>
  )
}