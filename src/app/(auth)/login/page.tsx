import { AuthCard } from "@/components/auth/AuthCard";
import { LoginForm } from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <AuthCard title="Login to your account">
        <LoginForm />
      </AuthCard>
    </div>
  );
}
