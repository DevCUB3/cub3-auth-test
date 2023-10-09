import Layout from "../../components/layout"
import {auth} from "@/auth";

export default async function MePage() {
  const session = await auth()

  return (
    <Layout>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </Layout>
  )
}
