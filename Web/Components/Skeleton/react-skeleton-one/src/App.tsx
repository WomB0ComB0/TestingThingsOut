import React from 'react';
import './App.css';
import Posts from './components/posts';
import { useQuery } from 'react-query';

const usePosts = () => {
  const {isLoading, data}  = useQuery (
    ['USERS'],
    () => fetch('https://jsonplaceholder.typicode.com/posts').then(posts => posts.json()).then(posts => posts),
    {
      enabled: true,
      refetchOnWindowFocus: false
    })
  return {isLoading, posts: data}
}
function App() {
  const {isLoading, posts} = usePosts()
  return (
    <div className='w-[100vw] h-[100vh] border-2 overflow-scroll border-red-900 flex flex-row items-center justify-center py-2'>
      <Posts isLoading={isLoading} posts={posts}/>
    </div>
  );
}

export default App;
