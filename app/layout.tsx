import { SessionProvider } from "next-auth/react"
import "../pages/styles.css"
import { ReactNode } from "react";
import {auth} from "@/auth";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default async function Layout({children}: {  children: ReactNode }) {
  const session = await auth()
  return (
      <html>
        <body>
          <SessionProvider session={session}>
            { children }
          </SessionProvider>
        </body>
      </html>
  )
}
