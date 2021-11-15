import React, { FC } from 'react'
import Todos from './todo/Todos'

type TopProps = {}

const Top: FC<TopProps> = () => {
  return (
    <div>
      <h1>Top</h1>
      <Todos />
    </div>
  )
}

export default Top
