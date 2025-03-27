import React from 'react';
import { Zap, TrendingUp, Clock } from 'lucide-react';

export function Solution() {
  const benefits = [
    {
      icon: Zap,
      title: "AI-Powered Automation",
      description: "Let artificial intelligence handle the heavy lifting of content creation and scheduling."
    },
    {
      icon: TrendingUp,
      title: "Increased Engagement",
      description: "Generate content that resonates with your audience and drives meaningful interactions."
    },
    {
      icon: Clock,
      title: "Save Valuable Time",
      description: "Reduce content creation time by 90% while maintaining high-quality output."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            The Smart Solution for Social Media Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SocialPost AI transforms your social media workflow with powerful automation
            and intelligent content creation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                <benefit.icon className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}