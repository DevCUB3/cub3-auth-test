// This is an example of how to access a session from an API route

import { auth } from "@/auth"
import {NextRequest, NextResponse} from "next/server";

export default async function handler(
  req: NextRequest,
  res: NextResponse
) {
  const session = await auth()
  return JSON.stringify(session, null, 2)
}
