import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Target, Users, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-5xl mx-auto space-y-20 pb-20">
      {/* Hero */}
      <section className="text-center space-y-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-24 h-24 bg-emerald-600 rounded-3xl flex items-center justify-center text-white mx-auto shadow-xl shadow-emerald-200"
        >
          <GraduationCap size={48} />
        </motion.div>
        <h1 className="text-4xl md:text-5xl font-bold text-stone-800">About SALA Academy</h1>
        <p className="text-stone-500 text-xl max-w-3xl mx-auto leading-relaxed">
          Empowering students through structured learning and interactive practice. Founded by Safdar Junejo, we are committed to educational excellence.
        </p>
      </section>

      {/* Mission/Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Target size={28} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-stone-500 leading-relaxed">
            To provide a comprehensive digital learning platform that simplifies complex subjects like English Grammar and Mathematics, making them accessible and engaging for students of all levels.
          </p>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm">
          <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
            <Award size={28} />
          </div>
          <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-stone-500 leading-relaxed">
            To become a leading educational hub in the region, recognized for our innovative approach to teaching and our contribution to the academic success of our students.
          </p>
        </div>
      </section>

      {/* The Founder */}
      <section className="bg-white rounded-[3rem] overflow-hidden border border-stone-100 shadow-xl flex flex-col lg:flex-row">
        <div className="lg:w-2/5 h-80 lg:h-auto bg-stone-200">
          <img 
            src="https://picsum.photos/seed/safdar/800/1000" 
            alt="Safdar Junejo" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="lg:w-3/5 p-10 md:p-16 space-y-6">
          <div className="inline-block px-4 py-1 bg-stone-100 rounded-full text-xs font-bold text-stone-500 uppercase tracking-widest">The Founder</div>
          <h2 className="text-3xl font-bold text-stone-800">Safdar Junejo</h2>
          <p className="text-stone-600 text-lg leading-relaxed">
            With over a decade of experience in the educational sector, Safdar Junejo has dedicated his career to mentoring students and developing effective teaching tools. His passion for English and Mathematics led to the creation of Shah Abdul Latif Academy (SALA).
          </p>
          <p className="text-stone-600 text-lg leading-relaxed">
            He believes that education is the most powerful weapon which you can use to change the world, and SALA is his contribution towards that change.
          </p>
          <div className="pt-6 flex gap-8">
            <div>
              <p className="text-2xl font-bold text-stone-800">10+</p>
              <p className="text-stone-400 text-sm">Years Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-800">5000+</p>
              <p className="text-stone-400 text-sm">Students Mentored</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Community */}
      <section className="text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">Join Our Community</h2>
          <p className="text-stone-500 max-w-2xl mx-auto">Be part of a growing network of learners and educators striving for excellence.</p>
        </div>
        <div className="flex justify-center">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg">
                <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Student" referrerPolicy="no-referrer" />
              </div>
            ))}
            <div className="w-16 h-16 rounded-full border-4 border-white bg-emerald-600 flex items-center justify-center text-white font-bold shadow-lg">
              +5k
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
