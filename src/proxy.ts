// import { NextResponse, NextRequest } from 'next/server'
// import { auth } from './lib/auth'
// import { headers } from 'next/headers'

// export async function proxy(request: NextRequest) {
//   const session = await auth.api.getSession({
//     headers: await headers()
//   })
//   if (!session) {
//     return NextResponse.redirect(new URL('/auth/signin', request.url))
//   }
  
// }

// export const config = {
//   matcher: ['/allNav/admin', '/allNav/allDestinations', '/allNav/destinations', '/allNav/allDestinations/:path' ],
// }

import { NextResponse, NextRequest } from 'next/server'
import { auth } from './lib/auth'
import { headers } from 'next/headers'

export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session) {
    const signInUrl = new URL('/auth/signin', request.url)
    const response = NextResponse.redirect(signInUrl)

    response.headers.set('Cache-Control', 'no-store')
    return response
  }

  const response = NextResponse.next()
  response.headers.set('Cache-Control', 'no-store')
  return response
}

export const config = {

  matcher: [
    '/allNav/admin',
    '/allNav/admin/:path*',
    '/allNav/allDestinations',
    '/allNav/allDestinations/:path*',
    '/allNav/destinations',
    '/allNav/destinations/:path*',
  ],
}