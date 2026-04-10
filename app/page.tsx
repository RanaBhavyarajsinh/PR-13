export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-24 px-6 flex items-center justify-center">
      
      <div className="w-full max-w-5xl">

        <h1 className="text-6xl font-extrabold text-center mb-16 text-white">
          Contact Me
        </h1>

        <div className="bg-white shadow-2xl rounded-3xl p-14">

          <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
            Let&apos;s Connect
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="p-8 rounded-2xl bg-purple-50 shadow-md">
              <p className="text-lg font-bold text-purple-700">Email</p>
              <p className="text-gray-700">bhavyarajsinh@example.com</p>
            </div>

            <div className="p-8 rounded-2xl bg-indigo-50 shadow-md">
              <p className="text-lg font-bold text-indigo-700">Phone</p>
              <p className="text-gray-700">0000000000</p>
            </div>

            <div className="p-8 rounded-2xl bg-pink-50 shadow-md">
              <p className="text-lg font-bold text-pink-700">Location</p>
              <p className="text-gray-700">India</p>
            </div>

          </div>

          <div className="mt-14 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              Feel free to contact me for collaboration, project discussions, or any technical queries.
              I am always interested in learning new technologies and working on innovative ideas.
            </p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              You can reach me anytime via email or phone. I will try to respond as soon as possible.
            </p>
          </div>

        </div>

      </div>

    </main>
  )
}