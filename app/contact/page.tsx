export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 py-24 px-6 flex items-center justify-center">
      
      <div className="w-full max-w-5xl">

        {/* Heading */}
        <h1 className="text-6xl font-extrabold text-center mb-16 text-white tracking-wide">
          Contact Me
        </h1>

        {/* Card */}
        <div className="bg-white/95 shadow-2xl rounded-3xl p-14 border border-purple-100">
          
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
            Let&apos;s Connect 🤝
          </h2>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:scale-105 transition duration-300 shadow-md">
              <p className="text-2xl mb-3">📧</p>
              <p className="text-lg font-bold text-purple-700">Email</p>
              <p className="text-gray-700 mt-2">bhavyarajsinh@example.com</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:scale-105 transition duration-300 shadow-md">
              <p className="text-2xl mb-3">📱</p>
              <p className="text-lg font-bold text-blue-700">Phone</p>
              <p className="text-gray-700 mt-2">0000000000</p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:scale-105 transition duration-300 shadow-md">
              <p className="text-2xl mb-3">📍</p>
              <p className="text-lg font-bold text-pink-700">Location</p>
              <p className="text-gray-700 mt-2">India</p>
            </div>

          </div>

          {/* Paragraph */}
          <div className="mt-14 text-center max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed">
              I am always open to connecting with new people, discussing creative ideas, 
              and working on exciting projects related to web development and technology. 
              Whether you have a collaboration opportunity, internship offer, or any 
              technical discussion, feel free to reach out. I enjoy building innovative 
              solutions and continuously improving my skills through practical experience.
            </p>

            <p className="text-gray-600 mt-6 leading-relaxed">
              You can contact me through email or phone for academic collaboration, 
              project development, or professional networking. I will try to respond 
              as quickly as possible and provide helpful support for your queries.
            </p>
          </div>

          {/* Button */}
          <div className="text-center mt-12">
            <button className="px-10 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:scale-110 hover:shadow-lg transition duration-300">
              Send Message
            </button>
          </div>

        </div>

      </div>

    </main>
  );
}