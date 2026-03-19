import React from 'react';
import { motion } from 'motion/react';
import { Bell, Calendar, ArrowRight } from 'lucide-react';

export default function Updates() {
  const updates = [
    {
      id: 1,
      date: 'March 15, 2026',
      title: 'New Mathematics Quizzes Added',
      description: 'We have added 50 new questions to the Trigonometry and Geometry sections. Test your skills now!',
      category: 'Math'
    },
    {
      id: 2,
      date: 'March 10, 2026',
      title: 'English Grammar Workshop',
      description: 'Join our live online workshop on "Mastering Tenses" this Sunday at 10:00 AM. Registration is free for all SALA students.',
      category: 'English'
    },
    {
      id: 3,
      date: 'March 05, 2026',
      title: 'Platform Performance Improvements',
      description: 'We have updated our quiz engine to be faster and more responsive on mobile devices.',
      category: 'System'
    },
    {
      id: 4,
      date: 'February 28, 2026',
      title: 'New Writing Skills Module',
      description: 'A comprehensive guide and practice set for essay writing and formal letters is now available in the English section.',
      category: 'English'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Latest Updates</h1>
        <p className="text-stone-500 text-lg">Stay informed about new features, quizzes, and academy news.</p>
      </div>

      <div className="space-y-6">
        {updates.map((update, i) => (
          <motion.div
            key={update.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                update.category === 'Math' ? 'bg-blue-50 text-blue-600' : 
                update.category === 'English' ? 'bg-emerald-50 text-emerald-600' : 
                'bg-stone-100 text-stone-500'
              }`}>
                {update.category}
              </span>
              <div className="flex items-center gap-1 text-stone-400 text-xs font-medium">
                <Calendar size={14} />
                {update.date}
              </div>
            </div>
            <h3 className="text-xl font-bold text-stone-800 mb-3">{update.title}</h3>
            <p className="text-stone-500 leading-relaxed mb-6">{update.description}</p>
            <button className="text-stone-800 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Read More
              <ArrowRight size={18} />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-emerald-600 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
            <Bell size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold">Subscribe to Newsletter</h3>
            <p className="text-emerald-100">Get updates delivered straight to your inbox.</p>
          </div>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <input 
            type="email" 
            placeholder="Email address"
            className="flex-1 md:w-64 px-5 py-4 bg-white/10 border border-white/20 rounded-2xl focus:outline-none focus:bg-white/20 transition-all placeholder:text-emerald-200"
          />
          <button className="px-6 py-4 bg-white text-emerald-600 font-bold rounded-2xl hover:bg-emerald-50 transition-all">
            Join
          </button>
        </div>
      </div>
    </div>
  );
}
