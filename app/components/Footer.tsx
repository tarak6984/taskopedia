export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 px-6 py-12 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">task</span>
              <span className="text-orange">opedia</span>
            </div>
            <p className="text-gray-400 text-sm">
              Global Talent Solutions Powered by Bangladesh
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-orange transition-colors">Home</a></li>
              <li><a href="#why-bangladesh" className="hover:text-orange transition-colors">Why Bangladesh</a></li>
              <li><a href="#services" className="hover:text-orange transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="hover:text-orange transition-colors">How It Works</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-orange transition-colors">Offshore Recruitment</a></li>
              <li><a href="#services" className="hover:text-orange transition-colors">Managed Freelance</a></li>
              <li><a href="#services" className="hover:text-orange transition-colors">Dedicated Teams</a></li>
              <li><a href="#services" className="hover:text-orange transition-colors">Career Placement</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@taskopedia.com</li>
              <li>Coming Soon: Social Links</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} taskopedia.com - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
