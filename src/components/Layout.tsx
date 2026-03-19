import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Calculator, Home, Info, Mail, Shield, Bell, User, LogIn, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'English Quiz', path: '/english-quiz', icon: BookOpen },
    { name: 'Math Quiz', path: '/math-quiz', icon: Calculator },
    { name: 'Updates', path: '/updates', icon: Bell },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Contact', path: '/contact', icon: Mail },
    { name: 'Privacy', path: '/privacy', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-stone-100 rounded-lg lg:hidden"
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div>
                <h1 className="text-lg font-bold leading-none">SALA</h1>
                <p className="text-[10px] text-stone-500 uppercase tracking-widest font-medium">Shah Abdul Latif Academy</p>
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.slice(0, 3).map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${location.pathname === item.path ? 'text-emerald-600' : 'text-stone-600'}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link to="/login" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">
              <LogIn size={18} />
              <span className="hidden sm:inline">Login</span>
            </Link>
            <Link to="/admin" className="p-2 text-stone-400 hover:text-stone-600 transition-colors">
              <User size={20} />
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto flex">
        {/* Sidebar for Mobile */}
        <AnimatePresence>
          {isSidebarOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsSidebarOpen(false)}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              />
              <motion.aside
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                exit={{ x: -300 }}
                className="fixed top-0 left-0 bottom-0 w-64 bg-white z-50 shadow-xl lg:hidden p-6"
              >
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                  <span className="font-bold">SALA Academy</span>
                </div>
                <nav className="space-y-1">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        location.pathname === item.path 
                        ? 'bg-emerald-50 text-emerald-700' 
                        : 'text-stone-600 hover:bg-stone-50'
                      }`}
                    >
                      <item.icon size={18} />
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </motion.aside>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1 px-4 py-8 min-h-[calc(100vh-4rem)]">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-stone-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                <span className="font-bold text-xl">SALA Academy</span>
              </div>
              <p className="text-stone-500 text-sm max-w-sm leading-relaxed">
                Shah Abdul Latif Academy (SALA) is dedicated to providing high-quality educational resources and interactive quizzes for students to master English and Mathematics.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-stone-500">
                <li><Link to="/about" className="hover:text-emerald-600">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-emerald-600">Contact</Link></li>
                <li><Link to="/updates" className="hover:text-emerald-600">Latest Updates</Link></li>
                <li><Link to="/privacy" className="hover:text-emerald-600">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-sm uppercase tracking-wider mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-stone-500">
                <li><Link to="/english-quiz" className="hover:text-emerald-600">English Grammar</Link></li>
                <li><Link to="/math-quiz" className="hover:text-emerald-600">Mathematics</Link></li>
                <li><Link to="/login" className="hover:text-emerald-600">Student Login</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
            <p>© 2026 Shah Abdul Latif Academy. By Safdar Junejo.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-stone-600">Privacy</Link>
              <Link to="/contact" className="hover:text-stone-600">Terms</Link>
              <Link to="/contact" className="hover:text-stone-600">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
