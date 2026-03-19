import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, ArrowRight, GraduationCap, Users, Trophy, Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="space-y-16 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2.5rem] bg-stone-900 text-white p-8 md:p-16">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-emerald-500 to-transparent" />
          <div className="grid grid-cols-8 gap-4 p-8">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-white/20" />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-500/30"
          >
            <Star size={14} />
            Welcome to SALA Academy
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-[1.1]"
          >
            Master English & Mathematics with <span className="text-emerald-500">Confidence.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg mb-10 leading-relaxed"
          >
            Interactive quizzes, comprehensive study materials, and expert guidance by Safdar Junejo. Start your learning journey today.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/english-quiz" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2">
              English Quizzes
              <ArrowRight size={20} />
            </Link>
            <Link to="/math-quiz" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all backdrop-blur-sm border border-white/10 flex items-center gap-2">
              Math Quizzes
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { icon: GraduationCap, label: 'Topics Covered', value: '30+', color: 'text-blue-600', bg: 'bg-blue-50' },
          { icon: Trophy, label: 'Quizzes Taken', value: '10k+', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { icon: Users, label: 'Active Students', value: '5k+', color: 'text-amber-600', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm flex items-center gap-6"
          >
            <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
              <stat.icon size={32} />
            </div>
            <div>
              <p className="text-stone-400 text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              <p className="text-3xl font-bold text-stone-800">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Categories Section */}
      <section>
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">Explore Categories</h2>
            <p className="text-stone-500">Choose a subject to start your practice session.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/english-quiz" className="group relative overflow-hidden bg-white rounded-[2rem] p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[4rem] transition-all group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-200">
                <BookOpen size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">English Grammar</h3>
              <p className="text-stone-500 mb-6 leading-relaxed">
                Master parts of speech, tenses, articles, and advanced grammar rules with our structured quizzes.
              </p>
              <div className="flex items-center gap-2 text-emerald-600 font-bold">
                View Topics
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          <Link to="/math-quiz" className="group relative overflow-hidden bg-white rounded-[2rem] p-8 border border-stone-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[4rem] transition-all group-hover:scale-110" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                <Calculator size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">Mathematics</h3>
              <p className="text-stone-500 mb-6 leading-relaxed">
                From basic arithmetic to complex algebra and geometry. Practice problems designed for clarity.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-bold">
                View Topics
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* About Safdar Junejo */}
      <section className="bg-stone-100 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">
        <div className="w-48 h-48 bg-stone-300 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-xl">
          <img 
            src="https://picsum.photos/seed/teacher/400/400" 
            alt="Safdar Junejo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">About the Founder</h2>
          <p className="text-stone-600 text-lg leading-relaxed mb-6">
            Safdar Junejo founded Shah Abdul Latif Academy (SALA) with a vision to make quality education accessible to everyone. With years of experience in teaching, he has developed a unique methodology to simplify complex concepts in English and Mathematics.
          </p>
          <Link to="/about" className="text-emerald-600 font-bold flex items-center gap-2 hover:underline">
            Learn more about Safdar Junejo
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
