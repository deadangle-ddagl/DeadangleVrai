'use client'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({
      email: 'user@example.com',
      password: 'password'
    })
    if (!error) router.push('/dashboard')
  }

  return (
    <form onSubmit={handleLogin}>
      {/* Votre formulaire ici */}
    </form>
  )
}
