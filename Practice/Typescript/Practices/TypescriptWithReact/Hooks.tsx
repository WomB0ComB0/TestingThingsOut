"use client"

import React, { useState } from "react"

export default function Post() {
  const [postTitle, setPostTitle] = useState<string | null>("")
  const changeTitle = () => { setPostTitle(null)}
  return (
    <div>
      <h1>{postTitle}</h1>
    </div>
  )
}