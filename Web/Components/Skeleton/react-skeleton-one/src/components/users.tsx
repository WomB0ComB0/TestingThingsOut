import React from 'react'

type Post ={
  id: number,
  title: string,
  body: string
  userId: number
}
interface Props {
  isLoading: boolean;
  posts: any[];
}
export default function Users(props: Props) {
  console.log(props.posts)
  return (
    <div className="text-red-900">
      Users Component
    </div>
  )
}
