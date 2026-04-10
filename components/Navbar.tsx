import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-xl sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide hover:scale-105 transition duration-300">
          My App
        </div>

        {/* Menu */}
        <ul className="flex gap-10 text-lg font-semibold">

          <li>
            <Link 
              href="/" 
              className="relative group transition duration-300"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link 
              href="/about" 
              className="relative group transition duration-300"
            >
              About Me
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li>
            <Link 
              href="/contact" 
              className="relative group transition duration-300"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar