// app/(auth)/register/page.tsx
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Inscription</h1>
      <RegisterForm />
    </div>
  );
}
