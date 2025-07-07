// type one .

// import { NextResponse } from 'next/server'
 
// // This function will redirect the req ...
// export function middleware(request) {
//   return NextResponse.redirect(new URL('/home', request.url))
// }
 
// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*', // /:path* means anything after that .
// }

// type two .

import { NextResponse } from 'next/server'
 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/home', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/home')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}