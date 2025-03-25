import React from 'react';
import { 
  Image, Type, Calendar, BarChart3, Palette, Hash, 
  Globe, Shield, Zap, MessageSquare 
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Image,
      title: "AI Image Generation",
      description: "Create stunning visuals perfectly matched to your brand style."
    },
    {
      icon: Type,
      title: "Smart Captions",
      description: "Generate engaging captions with optimized hashtags and CTAs."
    },
    {
      icon: Calendar,
      title: "Automated Scheduling",
      description: "Schedule posts at optimal times for maximum engagement."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Track performance metrics and optimize your strategy."
    },
    {
      icon: Palette,
      title: "Brand Kit Integration",
      description: "Maintain consistent branding across all your content."
    },
    {
      icon: Hash,
      title: "Hashtag Research",
      description: "Find trending hashtags that reach your target audience."
    },
    {
      icon: Globe,
      title: "Multi-Platform Support",
      description: "Publish to all major social media platforms seamlessly."
    },
    {
      icon: Shield,
      title: "Content Compliance",
      description: "Ensure your content meets platform guidelines automatically."
    },
    {
      icon: Zap,
      title: "Quick Editing",
      description: "Make last-minute adjustments with our intuitive editor."
    },
    {
      icon: MessageSquare,
      title: "AI Post Ideas",
      description: "Get creative content suggestions when you need inspiration."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Powerful Features for Social Media Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to create, manage, and grow your social media presence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <feature.icon className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-display font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}