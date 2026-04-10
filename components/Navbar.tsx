import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-2xl font-bold mr-8">My App</div>
        <ul className="flex space-x-8">
          <li><Link href="/" className="hover:text-yellow-300 transition-colors duration-300 text-lg font-semibold">Home</Link></li>
          <li><Link href="/about" className="hover:text-yellow-300 transition-colors duration-300 text-lg font-semibold">About Me</Link></li>
          <li><Link href="/contact" className="hover:text-yellow-300 transition-colors duration-300 text-lg font-semibold">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar