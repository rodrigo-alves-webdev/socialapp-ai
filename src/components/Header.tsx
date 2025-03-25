import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function Header() {
  const navigate = useNavigate();

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Sparkles className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-display font-bold">SocialPost AI</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => navigate('/auth')} 
              className="btn-secondary"
            >
              Log in
            </button>
            <button 
              onClick={() => navigate('/auth')} 
              className="btn-primary"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}