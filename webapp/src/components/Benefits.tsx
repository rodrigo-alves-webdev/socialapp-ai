import React from 'react';
import { ArrowUp, Clock, Award } from 'lucide-react';

export function Benefits() {
  const stats = [
    {
      icon: ArrowUp,
      value: "50%",
      label: "Increase in Engagement",
      description: "Average improvement in post engagement rates"
    },
    {
      icon: Clock,
      value: "10x",
      label: "Faster Content Creation",
      description: "Speed up your content workflow dramatically"
    },
    {
      icon: Award,
      value: "100%",
      label: "Brand Consistency",
      description: "Maintain perfect brand alignment across all posts"
    }
  ];

  return (
    <section className="py-20 bg-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Transform Your Social Media Results
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Join thousands of businesses achieving remarkable results with SocialPost AI
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-xl bg-purple-800">
              <stat.icon className="w-12 h-12 text-purple-300 mx-auto mb-4" />
              <div className="text-5xl font-display font-bold text-purple-100 mb-2">
                {stat.value}
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-purple-200">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}