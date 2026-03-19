import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ChevronRight, Search } from 'lucide-react';
import { MATH_TOPICS } from '../constants';
import { motion } from 'motion/react';

export default function MathQuiz() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredTopics = MATH_TOPICS.filter(topic => 
    topic.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-stone-800 mb-4">Mathematics Topics</h1>
        <p className="text-stone-500 text-lg">Select a topic to start practicing your math skills.</p>
      </div>

      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={20} />
        <input 
          type="text" 
          placeholder="Search topics..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-4 bg-white border border-stone-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTopics.map((topic, i) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Link 
              to={`/quiz/math/${topic.id}`}
              className="group flex items-center justify-between p-6 bg-white border border-stone-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Calculator size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">{topic.title}</h3>
                  <p className="text-xs text-stone-400 uppercase tracking-widest font-medium">Math Category</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-stone-300 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredTopics.length === 0 && (
        <div className="text-center py-20 bg-stone-50 rounded-3xl border-2 border-dashed border-stone-200">
          <p className="text-stone-400 font-medium">No topics found matching your search.</p>
        </div>
      )}
    </div>
  );
}
