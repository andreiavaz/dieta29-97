/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ObjectionItem {
  id: string;
  emoji: string;
  title: string;
  situation: string;
  solution: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  retailPrice: number;
}

export interface FoodItem {
  id: string;
  name: string;
  category: "protein" | "vegetable" | "carb" | "healthy-fat";
  potency: string; // effect on GLP-1 / satiety / muscles
  benefits: string;
  icon: string;
}
