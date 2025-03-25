import React from 'react';
import { PenTool, MessageSquare, Calendar, BarChart } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: PenTool,
      title: "Create Images",
      description: "Generate custom visuals tailored to your brand using AI."
    },
    {
      icon: MessageSquare,
      title: "Write Captions",
      description: "Get AI-powered caption suggestions optimized for engagement."
    },
    {
      icon: Calendar,
      title: "Schedule Posts",
      description: "Plan and automate your posting schedule across platforms."
    },
    {
      icon: BarChart,
      title: "Track Results",
      description: "Monitor performance and optimize your strategy."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            How SocialPost AI Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple four-step process to transform your social media presence
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-purple-200 transform translate-y-8" />
              )}
              <div className="relative bg-white p-6 rounded-xl shadow-sm border border-gray-100 z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 mb-4">
                  <step.icon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
            alt="SocialPost AI Workflow"
            className="rounded-xl shadow-2xl border border-gray-200 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}