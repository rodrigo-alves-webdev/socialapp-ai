import React from 'react';
import { Check } from 'lucide-react';

export function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for individuals and small businesses",
      features: [
        "50 AI-generated images per month",
        "100 AI-written captions",
        "Basic scheduling tools",
        "2 social media accounts",
        "Basic analytics",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "79",
      description: "Ideal for growing businesses and creators",
      features: [
        "200 AI-generated images per month",
        "Unlimited AI-written captions",
        "Advanced scheduling tools",
        "10 social media accounts",
        "Advanced analytics",
        "Priority support",
        "Brand kit integration",
        "Custom templates"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "199",
      description: "For large teams and agencies",
      features: [
        "Unlimited AI-generated images",
        "Unlimited AI-written captions",
        "Advanced scheduling tools",
        "Unlimited social media accounts",
        "Custom analytics",
        "24/7 priority support",
        "Brand kit integration",
        "Custom templates",
        "API access",
        "Dedicated account manager"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your social media needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`
              bg-white p-8 rounded-xl shadow-sm border border-gray-100
              ${plan.popular ? 'ring-2 ring-purple-600 shadow-lg' : ''}
            `}>
              {plan.popular && (
                <div className="text-purple-600 text-sm font-semibold mb-4">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-display font-bold">${plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 px-6 rounded-lg font-semibold
                ${plan.popular 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }
              `}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}