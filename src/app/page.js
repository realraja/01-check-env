// import Image from "next/image";
import HomeSection1 from "@/components/HomeSection1";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    {/* Header */}
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">MyWebsite</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#home" className="hover:underline">Home</Link></li>
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#services" className="hover:underline">Services</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>

    {/* Hero Section */}
    <HomeSection1 />

    {/* Features Section */}
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 17.93V19h-2v.93A8.001 8.001 0 014 12H2.07A10.002 10.002 0 0011 21.93zM2.07 11H4a8.001 8.001 0 0115.93 0H22a10.002 10.002 0 00-9-9.93V5h2V2.07A10.002 10.002 0 002.07 11zm17.93 2h-1.93A8.001 8.001 0 015 12H3.07A10.002 10.002 0 0020 13zm-8-1a5 5 0 110-10 5 5 0 010 10z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Feature One</h4>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 17.93V19h-2v.93A8.001 8.001 0 014 12H2.07A10.002 10.002 0 0011 21.93zM2.07 11H4a8.001 8.001 0 0115.93 0H22a10.002 10.002 0 00-9-9.93V5h2V2.07A10.002 10.002 0 002.07 11zm17.93 2h-1.93A8.001 8.001 0 015 12H3.07A10.002 10.002 0 0020 13zm-8-1a5 5 0 110-10 5 5 0 010 10z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Feature Two</h4>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 17.93V19h-2v.93A8.001 8.001 0 014 12H2.07A10.002 10.002 0 0011 21.93zM2.07 11H4a8.001 8.001 0 0115.93 0H22a10.002 10.002 0 00-9-9.93V5h2V2.07A10.002 10.002 0 002.07 11zm17.93 2h-1.93A8.001 8.001 0 015 12H3.07A10.002 10.002 0 0020 13zm-8-1a5 5 0 110-10 5 5 0 010 10z"/>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-2">Feature Three</h4>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}
