export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            Hi! I'm a developer passionate about building full-stack applications with modern technologies.
          </p>
          <p className="text-gray-600">
            This app demonstrates Next.js with TypeScript, optimized bundle size, and environment management.
          </p>
        </div>
      </div>
    </main>
  )
}