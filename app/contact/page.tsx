export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact</h1>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <p className="text-gray-600 mb-6">Get in touch with me!</p>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input type="text" name="name" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" name="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Message</label>
              <textarea name="message" rows={4} className="w-full p-2 border border-gray-300 rounded"></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}