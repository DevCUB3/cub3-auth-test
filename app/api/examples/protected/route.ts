// This is an example of to protect an API route

import { auth } from "@/auth"

export async function GET() {
  const session = await auth()

  if (session) {
    return Response.json({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  }

  return Response.json({
    error: "You must be signed in to view the protected content on this page.",
  })
}
