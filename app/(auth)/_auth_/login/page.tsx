// app/(auth)/login/page.tsx
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Connexion</h1>
      <LoginForm />
    </div>
  );
}
