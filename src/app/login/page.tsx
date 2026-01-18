export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-sm rounded-xl border p-6">
        <h1 className="text-2xl font-bold">Sign in</h1>
        <p className="text-sm opacity-80 mt-2">Use GitHub to continue.</p>

        <a
          className="mt-6 inline-flex w-full items-center justify-center rounded-md border px-4 py-2"
          href="/api/auth/sign-in/social?provider=github"
        >
          Continue with GitHub
        </a>
      </div>
    </div>
  )
}