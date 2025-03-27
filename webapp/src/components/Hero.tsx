import React from 'react';
import { Wand2 } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-24">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-70" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            Create and Publish <span className="gradient-text">Perfect Posts</span><br />
            in Minutes with AI
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Automate your social media strategy with AI-powered content creation.
            Generate stunning visuals, write engaging captions, and schedule posts
            across all your platforms.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary inline-flex items-center">
              <Wand2 className="w-5 h-5 mr-2" />
              Start Creating for Free
            </button>
            <button className="btn-secondary">
              Watch Demo
            </button>
          </div>

          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80"
              alt="SocialPost AI Dashboard"
              className="rounded-xl shadow-2xl border border-gray-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}