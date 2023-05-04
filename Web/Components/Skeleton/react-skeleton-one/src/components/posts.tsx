import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
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
  // Will add 6 loading skeletons
  const loadingState = [1, 2, 3, 4, 5, 6]
  return (
    <div className="border shadow-md w-[50vw] overflow-scroll">
      {
        props.isLoading ? 
          loadingState.map((_, index) => ( 
            <div className="border-b py-2 px-2" key={index}>
              <Skeleton count={1} width={40} style={{float: 'right'}}/>
              <Skeleton count={1} width={'50%'} height={'28px'}/>
              <Skeleton count={1} height={'15px 15px'} style={{marginTop: '10px'}}/>
            </div>
          ))
        :
        props?.posts?.slice(0,10).map(post => (
          <div className="border-b py-2 px-2" key={post.id}>
            <div className="text-xs text-right">User ID: {post.userId}</div>
            <div className="text-base text-slate-900">{post.title}</div>
            <div className="text-sm text-slate-500">{post.body}</div>
          </div>
        ))
      }
    </div>
  )
}
