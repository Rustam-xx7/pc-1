import React from 'react'
import { useSelector, useDispatch } from "react-redux";

const navbar = () => {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      i am a navbar , count is :{count}
    </div>
  )
}

export default navbar
