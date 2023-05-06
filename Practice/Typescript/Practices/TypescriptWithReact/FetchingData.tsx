import { Inter } from  "@next/font/google"
import Link from "next/link"
import React from "react"
const inter = Inter({subsets: ["latin"]})


// Specify the data type
type PostProps = {
  id: number
  title: string
  message?: string
}[]

// Specify the return type of the function getPosts
async function getPosts(): Promise<PostProps>{
  const rest = await fetch(`${process.env.BASE_URL}/api/getPosts`)
  if (!rest.ok) throw new Error("Error")
  return rest.json()
}

export default async function Home(){
  // Specify the data type
  const data = await getPosts()
  return (
    <main className={`${inter.className}`}>
      <Link href={"/dashboard"}>Go to dashboard</Link>
      {data.map((post) => (
        <Post id={post.id} title={post.title} toggle="open"/>
      ))}
    </main>
  )
}