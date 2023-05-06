"uee client"
import React from "react"
type PostProps = {
  id: number
  title: string
  toggle?: 'closed' | 'open'
}

export default function Post({id, title, toggle}: PostProps) {
  return (
    <div>
      <h1>Hello</h1>
      <button></button>
    </div>
  )
}