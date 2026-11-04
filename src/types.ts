export interface ConsultationForm {
  fullName: string;
  email: string;
  phone: string;
  portfolioSize: string;
  interest: string;
  preferredTime: string;
  notes?: string;
}

export interface StrategyDetail {
  id: string;
  title: string;
  subtitle: string;
  targetReturn: string;
  sharpeRatio: string;
  maxDrawdown: string;
  minInvestment: string;
  focus: string[];
  description: string;
}

export interface TelegramPost {
  id: string;
  time: string;
  category: string;
  title: string;
  summary: string;
  views: string;
  pinned?: boolean;
}

export interface BrokerFeature {
  title: string;
  description: string;
  highlight: string;
}
