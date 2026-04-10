export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        <h1 className="text-6xl font-bold text-center text-purple-800 mb-12 animate-pulse">Contact Me</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-purple-200">
            <h2 className="text-3xl font-semibold text-purple-800 mb-8 text-center">Get In Touch</h2>
            <div className="space-y-6">
              <div className="text-center">
                <p className="font-bold text-purple-700 text-lg">Email</p>
                <p className="text-gray-600 text-xl">bhavyarajsinh@example.com</p>
              </div>

              <div className="text-center">
                <p className="font-bold text-green-700 text-lg">Phone</p>
                <p className="text-gray-600 text-xl">+1 (555) 123-4567</p>
              </div>

              <div className="text-center">
                <p className="font-bold text-blue-700 text-lg">Location</p>
                <p className="text-gray-600 text-xl">New York, NY</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-2xl border-2 border-pink-200">
            <h2 className="text-3xl font-semibold text-pink-800 mb-8 text-center">Send a Message</h2>
            <form className="space-y-6">
              <div className="text-left">
                <label className="block text-gray-700 mb-2 font-bold text-lg">Name</label>
                <input type="text" name="name" className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 text-lg" placeholder="Your Name" />
              </div>
              <div className="text-left">
                <label className="block text-gray-700 mb-2 font-bold text-lg">Email</label>
                <input type="email" name="email" className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 text-lg" placeholder="your@email.com" />
              </div>
              <div className="text-left">
                <label className="block text-gray-700 mb-2 font-bold text-lg">Message</label>
                <textarea name="message" rows={6} className="w-full p-4 border-2 border-gray-300 rounded-xl focus:ring-4 focus:ring-pink-300 focus:border-pink-500 text-lg" placeholder="Your message here..."></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl text-xl transition-all duration-300 transform hover:scale-105">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}