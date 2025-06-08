'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { LogoutButton } from '@/components/auth/LogoutButton';

export default function AccountPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Compte utilisateur</h1>
      <p>Email : {email}</p>
      <LogoutButton />
    </div>
  );
}
