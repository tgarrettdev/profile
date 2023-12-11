import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white sticky top-0 z-50 bg-grey">
      <div className="nav-container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold hover:text-gray-300">Home</Link>
        <div className="flex gap-4">
          <a href="#bio" className="hover:text-gray-300">Bio</a>
          <a href="#timeline" className="hover:text-gray-300">Timeline</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
