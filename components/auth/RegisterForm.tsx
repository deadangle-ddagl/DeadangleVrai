// components/auth/RegisterForm.tsx
"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Vérifie ta boîte mail pour confirmer !");
    }
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Créer un compte</button>
      {message && <p>{message}</p>}
    </form>
  );
}
