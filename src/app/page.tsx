import Link from 'next/link'

export default function Home() {
  return (
    <section className="grid min-h-[80vh] place-items-center px-6 text-center">
      <div className="max-w-2xl">
        {/* Hero Content */}
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Take the Next Step in Your Career
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
          Track applications, stay on top of interviews, and land your dream job with NextSteps.
        </p>

        {/* Call to Action */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/auth/signup"
            className="rounded-lg bg-black px-5 py-3 text-white dark:bg-white dark:text-black"
          >
            Get Started
          </Link>
          <Link
            href="/auth/login"
            className="rounded-lg border px-5 py-3"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  )
}
