import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ENGLISH_TOPICS, MATH_TOPICS } from '../constants';
import QuizEngine from '../components/QuizEngine';
import { Question } from '../types';
import { ArrowLeft, Loader2 } from 'lucide-react';

// Mock function to generate questions based on topic
// In a real app, this would fetch from an API or a database
const getQuestionsForTopic = (topicId: string): Question[] => {
  // Simple generic questions for demo
  return [
    {
      id: '1',
      text: `Which of the following is a key concept in ${topicId.replace(/-/g, ' ')}?`,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 0,
      explanation: 'This is a sample explanation for the correct answer.'
    },
    {
      id: '2',
      text: `What is the primary rule for ${topicId.replace(/-/g, ' ')}?`,
      options: ['Rule 1', 'Rule 2', 'Rule 3', 'Rule 4'],
      correctAnswer: 1,
      explanation: 'Rule 2 is the most important rule in this context.'
    },
    {
      id: '3',
      text: `Identify the correct application of ${topicId.replace(/-/g, ' ')} in a sentence or equation.`,
      options: ['Application X', 'Application Y', 'Application Z', 'None of the above'],
      correctAnswer: 2,
      explanation: 'Application Z correctly demonstrates the principle.'
    }
  ];
};

export default function TopicQuiz() {
  const { category, topicId } = useParams<{ category: string; topicId: string }>();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);

  const topics = category === 'english' ? ENGLISH_TOPICS : MATH_TOPICS;
  const topic = topics.find(t => t.id === topicId);

  React.useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, [topicId]);

  if (!topic) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Topic Not Found</h2>
        <button 
          onClick={() => navigate(-1)}
          className="text-emerald-600 font-bold hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-4">
        <Loader2 size={40} className="text-emerald-600 animate-spin" />
        <p className="text-stone-400 font-medium">Preparing your quiz...</p>
      </div>
    );
  }

  const questions = getQuestionsForTopic(topicId!);

  return (
    <div>
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-stone-500 hover:text-stone-800 font-medium mb-8 transition-colors"
      >
        <ArrowLeft size={18} />
        Back to Topics
      </button>

      <QuizEngine 
        title={topic.title}
        questions={questions}
        onComplete={(score) => {
          console.log(`Quiz completed with score: ${score}`);
        }}
      />
    </div>
  );
}
