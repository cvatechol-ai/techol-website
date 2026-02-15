
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'web' | 'mobile' | 'branding' | 'dev' | 'uiux';
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}