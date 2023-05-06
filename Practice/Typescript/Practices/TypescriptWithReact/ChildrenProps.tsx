import React from 'react'

type ChildrenProps = {
  children: React.ReactNode
}
export default function RootLayout({children} : {children: React.ReactNode} ) {
  return (
    <html lang="en">
      <head/>
      <body>
        {children}
      </body>
    </html>
  )
}
