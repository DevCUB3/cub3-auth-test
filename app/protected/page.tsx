import { auth } from "@/auth";
import {ProtectedView} from "@/app/protected/protected-view";

export default async function ProtectedPage() {
  const session = await auth();

  return <ProtectedView session={session} />;
}
