import React from 'react'
const PanelLayout = ({children}) => {
  return (
    <div className='w-full max-w-3xl overflow-hidden bg-white shadow-lg rounded-xl'>
      <div className='px-4 py-5 sm:p-6'> {children} </div>
    </div>
  )
}
export default PanelLayout