import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Welcome Message */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-2xl font-display font-bold">
              SocialPost AI
            </span>
          </div>
          <h2 className="text-2xl font-display font-bold text-gray-900">
            {isLogin ? "Welcome back!" : "Create your account"}
          </h2>
          <p className="text-gray-600 mt-2">
            {isLogin 
              ? "Sign in to continue to your account" 
              : "Get started with SocialPost AI"}
          </p>
        </div>

        {/* Auth Forms Container */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden relative">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="w-full"
            >
              {isLogin ? (
                <LoginForm onSwitchToRegister={() => paginate(1)} />
              ) : (
                <RegisterForm onSwitchToLogin={() => paginate(-1)} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Links */}
        <div className="mt-8 text-center text-sm text-gray-600">
          <a href="#" className="hover:text-purple-600">Terms of Service</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-purple-600">Privacy Policy</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-purple-600">Contact Support</a>
        </div>
      </div>
    </div>
  );
}