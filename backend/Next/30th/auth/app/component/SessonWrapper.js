"use client";
import { SessionProvider } from "next-auth/react";


const SessonWrapper = ({children}) => {
  return (
    <div>
      <SessionProvider>{children}</SessionProvider>
    </div>
  )
}

export default SessonWrapper
