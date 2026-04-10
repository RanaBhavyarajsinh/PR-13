export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-indigo-100 py-16">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-16 animate-bounce">
          Contact Me
        </h1>

        <div className="grid md:grid-cols-1 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-12 rounded-3xl shadow-2xl border-4 border-gradient-to-r from-pink-300 to-purple-300 transform hover:scale-105 transition-all duration-500">
            <h2 className="text-4xl font-bold text-purple-800 mb-12 text-center">Get In Touch</h2>
            <div className="space-y-8">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl">
                <p className="font-extrabold text-blue-700 text-2xl mb-2">Email</p>
                <p className="text-gray-700 text-xl font-semibold">bhavyarajsinh@example.com</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl">
                <p className="font-extrabold text-green-700 text-2xl mb-2">Phone</p>
                <p className="text-gray-700 text-xl font-semibold">+1 (555) 123-4567</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl">
                <p className="font-extrabold text-purple-700 text-2xl mb-2">Location</p>
                <p className="text-gray-700 text-xl font-semibold">New York, NY</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600 italic">
                "Feel free to reach out for collaborations, questions, or just to say hello!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}