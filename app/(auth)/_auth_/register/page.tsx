import RegisterForm from '@/components/auth/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Créer un compte</h2>
      <RegisterForm />
    </div>
  )
}
