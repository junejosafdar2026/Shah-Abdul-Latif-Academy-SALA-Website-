export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  category: 'english' | 'math';
  questions: Question[];
}

export interface Topic {
  id: string;
  title: string;
  category: 'english' | 'math';
}
