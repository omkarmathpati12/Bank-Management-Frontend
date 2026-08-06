export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-10">
      <div className="px-8 md:px-16 lg:px-24 flex flex-col md:flex-row justify-between">

        <div>
          <h2 className="text-3xl font-bold text-white">
            SmartBank
          </h2>

          <p className="mt-3 text-gray-400 max-w-sm">
            Secure, fast, and reliable banking services for everyone.
          </p>
        </div>

        <div className="mt-8 md:mt-0">
          <h3 className="text-white font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

      </div>

      <div className="text-center mt-8 text-gray-500 border-t border-gray-700 pt-5">
        © 2026 SmartBank. All rights reserved.
      </div>
    </footer>
  );
}