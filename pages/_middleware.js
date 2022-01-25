import { NextResponse as nextResponse } from "next/server"
const wwwSubdomain = "www."

export function middleware(nextRequest, _fetchEvent) {
  const currentEnv = process.env.NODE_ENV

  if (currentEnv !== "production") return nextResponse.next()

  if (
    nextRequest.headers.get("x-forwarded-proto") !== "https" ||
    nextRequest.nextUrl.hostname.startsWith(wwwSubdomain)
  ) {
    return nextResponse.redirect(`https://${nextRequest.nextUrl.hostname.replace(wwwSubdomain, "")}${nextRequest.nextUrl.pathname}`, 301)
  }

  return nextResponse.next()
}
