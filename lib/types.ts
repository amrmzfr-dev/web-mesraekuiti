export interface TreatmentTier {
  id: string;
  name: string;
  duration: string;
  tagline: string;
  description: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitTile {
  icon: string;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface WhatIsOzoneColumn {
  icon: string;
  title: string;
  body: string;
}

export interface ComparisonRow {
  feature: string;
  basic: string | boolean;
  standard: string | boolean;
  premium: string | boolean;
}

export interface OperatorBenefit {
  counter?: number;
  suffix?: string;
  label?: string;
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sub: string;
}
