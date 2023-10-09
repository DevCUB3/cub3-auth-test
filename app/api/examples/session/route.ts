// This is an example of how to access a session from an API route

import { auth } from "@/auth"

export async function GET() {
  const session = await auth()
  return Response.json(session);
}
