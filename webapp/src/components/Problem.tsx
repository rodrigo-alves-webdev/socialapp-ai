import React from 'react';
import { Clock, Target, Brain } from 'lucide-react';

export function Problem() {
  const challenges = [
    {
      icon: Clock,
      title: "Time-Consuming Content Creation",
      description: "Spending hours creating posts, searching for images, and writing captions is holding your social media strategy back."
    },
    {
      icon: Target,
      title: "Low Engagement Rates",
      description: "Your posts aren't getting the engagement they deserve, despite your best efforts to create quality content."
    },
    {
      icon: Brain,
      title: "Creative Block",
      description: "Running out of ideas and struggling to maintain a consistent posting schedule across multiple platforms."
    }
  ];

  return (
    <section id="problems" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Common Challenges in Social Media Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the struggles of maintaining an engaging social media presence.
            Here are the challenges we help you overcome.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <challenge.icon className="w-12 h-12 text-purple-600 mb-6" />
              <h3 className="text-xl font-display font-bold mb-4">{challenge.title}</h3>
              <p className="text-gray-600">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}