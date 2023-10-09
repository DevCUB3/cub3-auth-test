// This is an example of to protect an API route

import { auth } from "@/auth"
import {NextRequest, NextResponse} from "next/server";

export default async function handler(
    req: NextRequest,
    res: NextResponse
) {
  const session = await auth()

  if (session) {
    return JSON.stringify({
      content:
        "This is protected content. You can access this content because you are signed in.",
    })
  }

  return JSON.stringify({
    error: "You must be signed in to view the protected content on this page.",
  })
}
