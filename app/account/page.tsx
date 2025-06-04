// app/account/page.tsx
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LogoutButton from "@/components/auth/LogoutButton";

export default async function AccountPage() {
  const supabase = createServerComponentClient({ cookies });
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return (
      <div className="p-4 text-red-600">
        Non connecté. <a href="/(auth)/login" className="underline">Se connecter</a>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-xl font-bold">Bienvenue, {user.email}</h1>
      <LogoutButton />
    </div>
  );
}
