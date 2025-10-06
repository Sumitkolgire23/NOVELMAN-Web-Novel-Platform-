import { motion } from "motion/react";
import { Facebook, Twitter, Instagram, Youtube, Mail, MessageCircle, Heart, Book, Users, Crown } from "lucide-react";

const footerLinks = {
  platform: {
    title: "Platform",
    links: [
      "About Us",
      "How It Works", 
      "Community Guidelines",
      "Content Policy",
      "Author Program",
      "Ranking System"
    ]
  },
  support: {
    title: "Support",
    links: [
      "Help Center",
      "Contact Us",
      "Report Content",
      "Technical Support",
      "FAQ",
      "Feedback"
    ]
  },
  legal: {
    title: "Legal",
    links: [
      "Terms of Service",
      "Privacy Policy",
      "Cookie Policy",
      "Copyright Policy",
      "Disclaimer",
      "Age Rating Guide"
    ]
  },
  discover: {
    title: "Discover",
    links: [
      "Featured Novels",
      "New Releases",
      "Top Rated",
      "Completed Stories",
      "Author Spotlight",
      "Reading Lists"
    ]
  }
};

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: MessageCircle, label: "Discord", href: "#" }
];

const quickStats = [
  { icon: Book, value: "50K+", label: "Novels" },
  { icon: Users, value: "2M+", label: "Readers" },
  { icon: Crown, value: "10K+", label: "Authors" },
  { icon: Heart, value: "500M+", label: "Likes" }
];

export function Footer() {
  return (
    <motion.footer 
      className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,107,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* Top Section - Brand & Quick Stats */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between mb-12 pb-8 border-b border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Brand */}
          <div className="mb-8 lg:mb-0">
            <motion.div 
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center">
                <Book className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white text-2xl font-bold">Novelman</h3>
            </motion.div>
            <p className="text-gray-400 text-sm max-w-md">
              Discover amazing stories, connect with passionate readers, and support talented authors in the ultimate web novel platform.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-2 border border-gray-700/50">
                  <stat.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div className="text-white font-bold text-lg">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([key, section], sectionIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + sectionIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 text-lg">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={link}>
                    <motion.a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block"
                      whileHover={{ x: 5, color: "#FF6B6B" }}
                      transition={{ duration: 0.2 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div 
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-white font-semibold text-xl mb-2">Stay Updated</h4>
              <p className="text-gray-400 text-sm">Get notified about new releases, author updates, and platform features.</p>
            </div>
            <div className="flex gap-3 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-80">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                />
              </div>
              <motion.button
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section - Social Links & Copyright */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-gray-800/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {/* Social Links */}
          <div className="flex items-center gap-4 mb-6 lg:mb-0">
            <span className="text-gray-400 text-sm mr-2">Follow us:</span>
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-gray-800/50 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 border border-gray-700/50"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-gray-400 text-sm mb-1">
              © 2024 Novelman. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Made with <Heart className="w-3 h-3 inline text-red-500 mx-1" /> for novel lovers worldwide
            </p>
          </div>
        </motion.div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-orange-600/10 via-red-600/5 to-transparent blur-3xl"></div>
    </motion.footer>
  );
}