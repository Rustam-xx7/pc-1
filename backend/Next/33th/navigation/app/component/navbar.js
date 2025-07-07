"use client"

import { usePathname } from 'next/navigation'
import React from 'react'

const navbar = () => {
    const pathname = usePathname()
  return (
    <div>
      <div>This is My nav bar .</div>
      <div>You are inside {pathname}</div>
    </div>
  )
}

export default navbar
