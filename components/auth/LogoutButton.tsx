// components/auth/LogoutButton.tsx
"use client";

import { supabase } from "@/lib/supabase";

export default function LogoutButton() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    location.reload();
  };

  return (
    <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
      Se déconnecter
    </button>
  );
}
