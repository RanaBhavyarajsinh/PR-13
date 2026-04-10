export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 flex items-center justify-center text-white px-6">

      <div className="text-center">

        <h1 className="text-5xl font-bold mb-6">
          My Portfolio
        </h1>

        <p className="text-lg mb-8">
          Welcome! I am a Computer Engineering student passionate about web development.
        </p>

        <div className="space-x-4">

          <a href="/about" className="bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold">
            About
          </a>

          <a href="/contact" className="bg-white text-purple-700 px-5 py-2 rounded-lg font-semibold">
            Contact
          </a>

        </div>

      </div>

    </main>
  )
}