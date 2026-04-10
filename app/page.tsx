export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to My Full-Stack App</h1>
        <p className="text-gray-600 mb-6">This is a Next.js application with optimized bundle size and environment management.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </main>
  )
}