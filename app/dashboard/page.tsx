import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies })
  const { data: user } = await supabase.auth.getUser()
  const { data: products } = await supabase.from('products').select('*')

  return (
    <div>
      <h1>Bienvenue {user.user?.email}</h1>
      {/* Votre dashboard */}
    </div>
  )
}
