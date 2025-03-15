import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Определяем публичные маршруты
const isPublicRoute = createRouteMatcher(['/', '/api/webhooks/stripe'])

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect() // Требует аутентификации для всех маршрутов, кроме публичных
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}