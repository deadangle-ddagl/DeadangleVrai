// app/account/page.tsx
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function AccountPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return <p>Non connecté.</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Bienvenue, {user.email}</h2>
      <LogoutButton />
    </div>
  );
}
