import React from 'react'
const Maintesting: React.FC = () => {
  const testing = ({title}: {title: string | ""}) => {
    return (
      <React.fragment>
        {title}
        {testing2({description: "testing2"})}
      </React.fragment>
    )
  }
  const testing2 = ({description}: {description: string | ""}) => {
    return (
      <React.fragment>
        {description}
      </React.fragment>
    )
  }
  return (
    <React.fragment>
      MainTesting
      {testing({title: "testing"})}
    </React.fragment>
  )
}
export default Maintesting