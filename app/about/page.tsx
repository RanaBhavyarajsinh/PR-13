export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center px-6 py-20">

      <div className="bg-white shadow-2xl rounded-3xl p-12 max-w-3xl text-center">

        <h1 className="text-5xl font-extrabold text-purple-700 mb-8">
          About Me
        </h1>

        <p className="text-gray-700 text-lg leading-relaxed">
          I{"'"}m a Computer Engineering student passionate about web development and problem solving.
          I enjoy building full stack applications using modern technologies like Next.js,
          React, and Node.js.
        </p>

        <p className="text-gray-600 mt-6 leading-relaxed">
          My goal is to continuously improve my technical skills and gain practical experience
          by working on real-world projects. I like learning new technologies and creating
          user-friendly applications that solve meaningful problems.
        </p>

      </div>

    </main>
  )
}