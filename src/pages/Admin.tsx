import React from 'react';
import { motion } from 'motion/react';
import { Settings, Users, FileText, Plus, Search, Filter, MoreVertical } from 'lucide-react';

export default function Admin() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-stone-800">Admin Dashboard</h1>
          <p className="text-stone-500">Manage quizzes, students, and platform settings.</p>
        </div>
        <button className="px-6 py-3 bg-stone-800 text-white font-bold rounded-xl hover:bg-stone-900 transition-all flex items-center gap-2 self-start">
          <Plus size={20} />
          Create New Quiz
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Students', value: '5,234', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
          { label: 'Active Quizzes', value: '128', icon: FileText, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Avg. Score', value: '76%', icon: Settings, color: 'text-amber-600', bg: 'bg-amber-50' },
          { label: 'New Today', value: '42', icon: Plus, color: 'text-purple-600', bg: 'bg-purple-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-10 h-10 ${stat.bg} ${stat.color} rounded-lg flex items-center justify-center`}>
                <stat.icon size={20} />
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+12%</span>
            </div>
            <p className="text-stone-400 text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-stone-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white rounded-[2rem] border border-stone-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-stone-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-xl font-bold">Recent Student Activity</h2>
          <div className="flex gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
              <input 
                type="text" 
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </div>
            <button className="p-2 bg-stone-50 border border-stone-200 rounded-xl text-stone-500 hover:bg-stone-100">
              <Filter size={18} />
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-stone-50/50 text-stone-400 text-[10px] font-bold uppercase tracking-widest">
                <th className="px-8 py-4">Student</th>
                <th className="px-8 py-4">Quiz Topic</th>
                <th className="px-8 py-4">Score</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {[
                { name: 'Ahmed Khan', topic: 'Algebraic Expression', score: '85%', date: '2 mins ago', status: 'Completed' },
                { name: 'Sana Malik', topic: 'Parts of Speech', score: '92%', date: '15 mins ago', status: 'Completed' },
                { name: 'Zubair Ali', topic: 'Quadratic Equation', score: '45%', date: '1 hour ago', status: 'Failed' },
                { name: 'Fatima Shah', topic: 'Tenses', score: '100%', date: '2 hours ago', status: 'Completed' },
                { name: 'Bilal Ahmed', topic: 'Trigonometry', score: '78%', date: 'Yesterday', status: 'Completed' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-stone-50/30 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center text-stone-500 font-bold text-xs">
                        {row.name.charAt(0)}
                      </div>
                      <span className="text-sm font-bold text-stone-800">{row.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-stone-500">{row.topic}</td>
                  <td className="px-8 py-5">
                    <span className={`text-sm font-bold ${parseInt(row.score) > 80 ? 'text-emerald-600' : parseInt(row.score) > 50 ? 'text-blue-600' : 'text-red-600'}`}>
                      {row.score}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm text-stone-400">{row.date}</td>
                  <td className="px-8 py-5">
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      row.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-1 text-stone-300 hover:text-stone-600">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 border-t border-stone-100 text-center">
          <button className="text-sm font-bold text-emerald-600 hover:underline">View All Activity</button>
        </div>
      </div>
    </div>
  );
}
