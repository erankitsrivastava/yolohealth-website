export interface NavLink {
  label: string;
  href: string;
}

export interface ContentConfig {
  site: {
    title: string;
    description: string;
    favicon: string;
  };
  navbar: {
    logo: { src: string; alt: string; text: string; tagline: string };
    links: NavLink[];
    cta: { label: string; href: string };
  };
  hero: {
    badge: string;
    headline: string;
    subtext: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    trustText: string;
    trustAvatars: { initials: string; color: string }[];
    kioskImage: { src: string; alt: string };
    featureCards: FeatureCard[];
  };
  partners: {
    label: string;
    logos: { name: string; src: string; alt: string }[];
  };
  flow: {
    sectionLabel: string;
    headline: string;
    subtext: string;
    steps: FlowStep[];
  };
  aiReports: {
    sectionLabel: string;
    headline: string;
    subtext: string;
    features: { icon: string; title: string; description: string }[];
    appLinks: { googlePlay: { label: string; href: string }; appStore: { label: string; href: string } };
    phoneImage: { src: string; alt: string };
  };
  clinicSystem: {
    sectionLabel: string;
    headline: string;
    subtext: string;
    features: string[];
    dashboardImage: { src: string; alt: string };
  };
  setup: {
    sectionLabel: string;
    headline: string;
    subtext: string;
    options: SetupOption[];
  };
  fitsBest: {
    sectionLabel: string;
    headline: string;
    subtext: string;
    useCases: UseCase[];
    cta: { label: string; href: string };
  };
  impact: {
    sectionLabel: string;
    headline: string;
    subtext: string;
    stats: Stat[];
  };
  testimonials: {
    sectionLabel: string;
    headline: string;
    subtext: string;
    items: Testimonial[];
  };
  insights: {
    sectionLabel: string;
    headline: string;
    subtext: string;
    articles: Article[];
  };
  faq: {
    sectionLabel: string;
    headline: string;
    subtext: string;
    ctaText: string;
    cta: { label: string; href: string };
    items: { question: string; answer: string }[];
  };
  ctaBanner: {
    headline: string;
    subtext: string;
    cta: { label: string; href: string };
    image: { src: string; alt: string };
  };
  footer: {
    logo: { text: string; tagline: string };
    description: string;
    socialLinks: { platform: string; href: string }[];
    columns: { heading: string; links: NavLink[] }[];
    copyright: string;
  };
}

export interface FeatureCard {
  id: string;
  title: string;
  metrics?: { label: string; value: string; color: string }[];
  tests?: { name: string; status: string; progress: number }[];
  doctorName?: string;
  specialty?: string;
  rating?: string;
  liveLabel?: string;
  timer?: string;
  doctorImage?: string;
  score?: string;
  scoreLabel?: string;
  indicators?: { label: string; color: string }[];
  items?: string[];
}

export interface FlowStep {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface SetupOption {
  id: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  cta: { label: string; href: string };
}

export interface UseCase {
  label: string;
  description: string;
  image: { src: string; alt: string };
}

export interface Stat {
  value: string;
  label: string;
  sublabel: string;
  highlighted: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  organization: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface Article {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: { src: string; alt: string };
  href: string;
}
