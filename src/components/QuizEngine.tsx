import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, RotateCcw, Award } from 'lucide-react';
import { Question } from '../types';

interface QuizEngineProps {
  title: string;
  questions: Question[];
  onComplete?: (score: number) => void;
}

export default function QuizEngine({ title, questions, onComplete }: QuizEngineProps) {
  const [currentStep, setCurrentStep] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState<number | null>(null);
  const [isAnswered, setIsAnswered] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [showResults, setShowResults] = React.useState(false);

  const currentQuestion = questions[currentStep];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    const correct = selectedOption === currentQuestion.correctAnswer;
    if (correct) {
      setScore(prev => prev + 1);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      onComplete?.(score);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100 text-center max-w-2xl mx-auto"
      >
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Award size={40} />
        </div>
        <h2 className="text-3xl font-bold mb-2">Quiz Completed!</h2>
        <p className="text-stone-500 mb-8">You've finished the {title} quiz.</p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-stone-50 p-6 rounded-2xl">
            <p className="text-xs text-stone-400 uppercase tracking-wider font-bold mb-1">Score</p>
            <p className="text-3xl font-bold text-stone-800">{score} / {questions.length}</p>
          </div>
          <div className="bg-stone-50 p-6 rounded-2xl">
            <p className="text-xs text-stone-400 uppercase tracking-wider font-bold mb-1">Accuracy</p>
            <p className="text-3xl font-bold text-stone-800">{percentage}%</p>
          </div>
        </div>

        <div className="flex gap-4">
          <button 
            onClick={handleRestart}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-stone-100 text-stone-700 font-bold rounded-2xl hover:bg-stone-200 transition-all"
          >
            <RotateCcw size={20} />
            Try Again
          </button>
          <button 
            onClick={() => window.history.back()}
            className="flex-1 flex items-center justify-center gap-2 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 shadow-lg shadow-emerald-200 transition-all"
          >
            Back to Topics
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-stone-800">{title}</h2>
          <p className="text-stone-400 text-sm">Question {currentStep + 1} of {questions.length}</p>
        </div>
        <div className="w-32 h-2 bg-stone-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <motion.div 
        key={currentStep}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100"
      >
        <h3 className="text-xl font-medium mb-8 leading-relaxed">
          {currentQuestion.text}
        </h3>

        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option, index) => {
            let stateClass = "border-stone-100 hover:border-emerald-200 hover:bg-emerald-50/30";
            if (isAnswered) {
              if (index === currentQuestion.correctAnswer) {
                stateClass = "border-emerald-500 bg-emerald-50 text-emerald-700";
              } else if (selectedOption === index) {
                stateClass = "border-red-500 bg-red-50 text-red-700";
              } else {
                stateClass = "border-stone-100 opacity-50";
              }
            } else if (selectedOption === index) {
              stateClass = "border-emerald-500 bg-emerald-50 text-emerald-700";
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionSelect(index)}
                disabled={isAnswered}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all text-left font-medium ${stateClass}`}
              >
                <span>{option}</span>
                {isAnswered && index === currentQuestion.correctAnswer && <CheckCircle2 size={20} className="text-emerald-500" />}
                {isAnswered && selectedOption === index && index !== currentQuestion.correctAnswer && <XCircle size={20} className="text-red-500" />}
              </button>
            );
          })}
        </div>

        {isAnswered && currentQuestion.explanation && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-stone-50 rounded-2xl mb-8 border border-stone-100"
          >
            <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">Explanation</p>
            <p className="text-stone-600 text-sm leading-relaxed">{currentQuestion.explanation}</p>
          </motion.div>
        )}

        <div className="flex justify-end">
          {!isAnswered ? (
            <button
              onClick={handleCheckAnswer}
              disabled={selectedOption === null}
              className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-200 transition-all"
            >
              Check Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-8 py-4 bg-stone-800 text-white font-bold rounded-2xl hover:bg-stone-900 transition-all"
            >
              {currentStep === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
