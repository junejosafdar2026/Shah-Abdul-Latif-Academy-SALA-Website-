import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 bg-stone-100 text-stone-800 rounded-2xl flex items-center justify-center mx-auto">
          <Shield size={32} />
        </div>
        <h1 className="text-4xl font-bold text-stone-800">Privacy Policy</h1>
        <p className="text-stone-500">Last updated: March 19, 2026</p>
      </div>

      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-stone-100 shadow-sm space-y-10">
        <section className="space-y-4">
          <div className="flex items-center gap-3 text-stone-800">
            <Eye size={24} className="text-emerald-600" />
            <h2 className="text-2xl font-bold">Information We Collect</h2>
          </div>
          <p className="text-stone-500 leading-relaxed">
            At SALA Academy, we collect minimal information necessary to provide you with a personalized learning experience. This includes your name, email address, and quiz performance data to track your progress.
          </p>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3 text-stone-800">
            <Lock size={24} className="text-blue-600" />
            <h2 className="text-2xl font-bold">How We Use Your Data</h2>
          </div>
          <p className="text-stone-500 leading-relaxed">
            Your data is used solely for educational purposes:
          </p>
          <ul className="list-disc list-inside text-stone-500 space-y-2 ml-4">
            <li>To personalize your dashboard and quiz recommendations.</li>
            <li>To provide you with progress reports and certificates.</li>
            <li>To send important academy updates and newsletters (if subscribed).</li>
            <li>To improve our platform's performance and user experience.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <div className="flex items-center gap-3 text-stone-800">
            <FileText size={24} className="text-amber-600" />
            <h2 className="text-2xl font-bold">Data Security</h2>
          </div>
          <p className="text-stone-500 leading-relaxed">
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration. Your trust is our priority.
          </p>
        </section>

        <section className="pt-8 border-t border-stone-100">
          <p className="text-stone-400 text-sm italic text-center">
            If you have any questions about our privacy practices, please contact us at privacy@sala-academy.edu
          </p>
        </section>
      </div>
    </div>
  );
}
