export interface TradeCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  slug: string;
}

export interface JobListing {
  id: number;
  title: string;
  company: string;
  location: string;
  type: 'Vollzeit' | 'Teilzeit' | 'Ausbildung';
  posted: string;
  salary_range?: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContentSectionData {
  title: string;
  content: string[]; // Array of paragraphs
}