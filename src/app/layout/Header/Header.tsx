export default function Header() {
  return (
    <div className="fixed top-0 w-full max-w-[500px] bg-blue-600 text-white shadow-md z-10">
      <div className="w-full mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-lg font-semibold">My App</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
