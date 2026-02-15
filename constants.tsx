
import { Service, Project, Testimonial, PricingPlan, ProcessStep, FAQItem } from './types';

export const TECH_STACK = [
  { name: 'HTML5', icon: '🌐', color: '#E34F26' },
  { name: 'CSS3', icon: '🎨', color: '#1572B6' },
  { name: 'JavaScript', icon: '📜', color: '#F7DF1E' },
  { name: 'React', icon: '⚛️', color: '#61DAFB' },
  { name: 'TypeScript', icon: 'TS', color: '#3178C6' },
  { name: 'Node.js', icon: 'JS', color: '#339933' },
  { name: 'Python', icon: '🐍', color: '#3776AB' },
  { name: 'Next.js', icon: 'N', color: '#FFFFFF' },
  { name: 'Tailwind', icon: '🌊', color: '#06B6D4' },
  { name: 'Three.js', icon: '3D', color: '#FFFFFF' },
];

export const SERVICES: Service[] = [
  {
    id: '1',
    icon: '🎨',
    title: 'Visual Identity',
    description: 'We craft immersive brand experiences through avant-garde design and psychological design principles.',
    features: ['Logo Evolution', 'Design Systems', 'Motion Branding', 'UI/UX Ecosystems'],
    priceRange: '₹15,000 - ₹45,000'
  },
  {
    id: '2',
    icon: '⚛️',
    title: 'Web Engineering',
    description: 'Architecting high-performance, SEO-centric digital engines using the latest web standards and frameworks.',
    features: ['Next.js / React', 'Three.js Visuals', 'headless CMS', 'Web3 Integration'],
    priceRange: '₹30,000 - ₹90,000'
  },
  {
    id: '3',
    icon: '🧬',
    title: 'App Development',
    description: 'Engineering native-feel cross-platform mobile experiences that live at the intersection of utility and beauty.',
    features: ['Flutter Mastery', 'React Native', 'Swift/Kotlin', 'Cloud Architecture'],
    priceRange: '₹60,000 - ₹2,50,000'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Real Estate',
    category: 'web',
    description: 'A revolutionary property portal with AI-driven valuation algorithms.',
    longDescription: 'Nexus is a high-performance real estate ecosystem that utilizes custom neural networks to provide real-time property valuation. The platform features an immersive 3D walkthrough engine built on Three.js, allowing prospective buyers to explore properties from anywhere in the world. Engineered for speed and massive data throughput.',
    image: 'https://images.unsplash.com/photo-1460472178825-e5240623abe5?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'PostgreSQL', 'Three.js']
  },
  {
    id: '2',
    title: 'Aura Fintech',
    category: 'dev',
    description: 'Next-generation banking dashboard with complex data visualization.',
    longDescription: 'Aura redefines personal finance with a focus on data transparency. We built a high-frequency data processing layer that syncs thousands of transactions per second. The UI focuses on military-grade security patterns and a "command-center" aesthetic, giving users absolute control over their digital assets.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800',
    tags: ['Vue.js', 'Web3', 'Node.js']
  },
  {
    id: '3',
    title: 'Pulse Health',
    category: 'mobile',
    description: 'Comprehensive fitness ecosystem utilizing wearable data for predictive health insights.',
    longDescription: 'Pulse is an end-to-end health monitoring solution. It integrates with major wearable devices via custom APIs to collect biometric data. Our proprietary ML models then analyze this data to predict potential health risks and offer personalized wellness routines. The app features a sleek, dark-mode interface optimized for high-intensity tracking.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    tags: ['Flutter', 'Firebase', 'Analytics']
  },
  {
    id: '4',
    title: 'Vanguard Identity',
    category: 'branding',
    description: 'A futuristic rebrand for a security firm focusing on cyber-resilience.',
    longDescription: 'Vanguard required an identity that felt both impenetrable and cutting-edge. We developed a generative logo system that evolves based on real-time security data, paired with a high-contrast color palette of "obsidian" and "neon-pulse". The branding package includes full motion assets and a digital-first design manual.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
    tags: ['Branding', 'Motion', 'Identity']
  },
  {
    id: '5',
    title: 'Lumina Dashboard',
    category: 'uiux',
    description: 'A glassmorphic administrative interface for smart-city management.',
    longDescription: 'Lumina is an exercise in complex information hierarchy. We designed a dashboard that aggregates data from thousands of IoT sensors across a city grid. Using advanced glassmorphism and depth-mapping UI techniques, we reduced user cognitive load while maintaining a futuristic, high-fidelity aesthetic.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    tags: ['UI/UX', 'Figma', 'Prototyping']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Rajesh Kumar',
    role: 'CEO, Quantum Startups',
    content: 'The level of sophistication TechOl brings to the table is unmatched. They dont just build websites; they build digital legacies.',
    avatar: 'RK'
  },
  {
    id: '2',
    author: 'Elena Vance',
    role: 'CMO, Global Reach',
    content: 'Vihaans vision for design is prophetic. The UI they delivered increased our conversion rate by over 200%.',
    avatar: 'EV'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: '1',
    number: '01',
    title: 'Deep Discovery',
    description: 'We dive deep into your brand DNA, market positioning, and target demographics to find the unique "why" behind your project.',
    icon: '🔍'
  },
  {
    id: '2',
    number: '02',
    title: 'Strategic Blueprint',
    description: 'Architecture before aesthetics. We map out every user flow, data structure, and technical requirement.',
    icon: '📐'
  },
  {
    id: '3',
    number: '03',
    title: 'Craft & Code',
    description: 'Our development phase combines pixel-perfect design with robust, high-performance engineering.',
    icon: '🛠️'
  },
  {
    id: '4',
    number: '04',
    title: 'Rigorous Polishing',
    description: 'Quality assurance at every breakpoint. We ensure your digital product is bulletproof before launch.',
    icon: '✨'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What makes TechOl different from other agencies?",
    answer: "We blend deep technical engineering with high-concept design. Most agencies focus on one; we master both to create digital products that are as fast as they are beautiful."
  },
  {
    question: "How long does a typical web project take?",
    answer: "A standard high-end website usually takes 4-8 weeks from discovery to deployment, depending on complexity and integrations."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We view our clients as long-term partners and offer dedicated maintenance and scaling packages."
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Essence',
    price: '15,000',
    description: 'Ideal for establishing a professional digital footprint.',
    features: ['5 Pages Design', 'SEO Foundation', 'Mobile Optimized', '1 Month Support']
  },
  {
    id: 'pro',
    name: 'Ascent',
    price: '35,000',
    description: 'The standard for high-growth modern businesses.',
    features: ['12 Pages Design', 'Advanced Animations', 'CMS Integration', '3 Months Support'],
    featured: true
  },
  {
    id: 'enterprise',
    name: 'Infinite',
    price: '95,000',
    description: 'Fully custom enterprise-grade digital ecosystems.',
    features: ['35 Pages Design', 'API Architecture', 'E-commerce Engine', 'Priority 24/7 Support']
  }
];
