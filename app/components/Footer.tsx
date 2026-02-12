'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="border-t border-gray-800 px-6 py-12 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Brand */}
          <motion.div className="col-span-1" variants={itemVariants}>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">task</span>
              <span className="text-orange">opedia</span>
            </div>
            <p className="text-gray-400 text-sm">
              Global Talent Solutions Powered by Bangladesh
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <motion.a 
                  href="#home" 
                  className="hover:text-orange transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Home
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#why-bangladesh" 
                  className="hover:text-orange transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Why Bangladesh
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#services" 
                  className="hover:text-orange transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#how-it-works" 
                  className="hover:text-orange transition-colors"
                  whileHover={{ x: 5 }}
                >
                  How It Works
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <motion.a 
                  href="#services" 
                  className="hover:text-orange transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Offshore Recruitment
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#services" 
                  className="hover:text-orange transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Managed Freelance
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#services" 
                  className="hover:text-orange transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Dedicated Teams
                </motion.a>
              </li>
              <li>
                <motion.a 
                  href="#services" 
                  className="hover:text-orange transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Career Placement
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@taskopedia.com</li>
              <li>Coming Soon: Social Links</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p>&copy; {currentYear} taskopedia.com - All rights reserved</p>
        </motion.div>
      </div>
    </footer>
  );
}
