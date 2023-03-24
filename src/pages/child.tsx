import React, { memo } from 'react'

function Child ({Learning}:any) {
    console.log("child component")
  return (
    <></>
  )
}

export default memo (Child)