'use client'
import { supabase } from '@/lib/supabase'

export default function RegisterPage() {
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({
      email: 'user@example.com',
      password: 'password',
      options: {
        data: {
          username: 'newuser',
          ddagl: 200 // Crédit initial
        }
      }
    })
  }

  return (
    <form onSubmit={handleRegister}>
      {/* Votre formulaire ici */}
    </form>
  )
}
