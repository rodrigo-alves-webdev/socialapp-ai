import React from 'react';

export function FAQ() {
  const faqs = [
    {
      question: "How does the free trial work?",
      answer: "Start with a 14-day free trial of our Professional plan. No credit card required. You'll get full access to all features to test the platform thoroughly."
    },
    {
      question: "Do I need technical knowledge to use SocialPost AI?",
      answer: "Not at all! Our platform is designed to be user-friendly and intuitive. If you can use social media, you can use SocialPost AI."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. No long-term contracts, no questions asked."
    },
    {
      question: "Which social media platforms are supported?",
      answer: "We support all major platforms including Instagram, Facebook, Twitter, LinkedIn, and Pinterest."
    },
    {
      question: "How does the AI image generation work?",
      answer: "Our AI analyzes your brand style and creates custom images that match your aesthetic. You can provide text prompts or let the AI suggest ideas."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer email support for all plans, with priority support and dedicated account managers for higher tiers."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about SocialPost AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-display font-bold mb-4">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}