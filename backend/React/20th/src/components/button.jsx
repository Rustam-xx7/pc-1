import React , {useContext}from 'react'
import Component1 from './component1'
import { counterContext } from '../context/context'

const button = () => {
    const value = useContext(counterContext)
  return (
    <div>
      <button onClick = {() => value.setCount((value.count) = value.count + 1)} ><span><Component1/></span>I am a Button</button>
    </div>
  )
}

export default button
