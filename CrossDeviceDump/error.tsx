import { useRouteError } from 'react-router'
export default function NotFound() {
  const error = useRouteError() as Error;
  console.error(error);
  const errorMessage = error.toString();
  return (
    <>
      <div id="" className='items-center justify-center'>
        <h1 className='underline-[#]/50 text-green-500/75 text-2xl'>
          404: Not Found
        </h1>
        <p className='text-sm text-emerald-900/90'>
          The page you are looking for does not exist.
        </p>
        <i className='text-gray-500'>
          {errorMessage}
        </i>
      </div>
    </>
  )
}