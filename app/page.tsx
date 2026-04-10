export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-6">
      
      <div className="text-center p-12 bg-white shadow-2xl rounded-3xl max-w-xl">

        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Welcome to My Full-Stack App
        </h1>

        <p className="text-gray-600 mb-8 leading-relaxed">
          This is a Next.js application designed with modern UI styling,
          optimized performance, and clean structure. It demonstrates
          full-stack development concepts including components,
          routing, and deployment on Vercel.
        </p>

        <button className="px-8 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:scale-110 hover:shadow-lg transition duration-300">
          Get Started
        </button>

      </div>

    </main>
  )
}