import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { motion } from 'framer-motion';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

function LoginPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      
      if (formData.email && formData.password) {
        // Simple mock validation
        if (!formData.email.includes('@')) {
          setError('Please enter a valid email address.');
          return;
        }
        
        // Success simulation
        localStorage.setItem('isAuthenticated', 'true');
        toast({
          title: "Welcome back! 👋",
          description: "Successfully logged in to Benefi.",
        });
        navigate('/'); // Redirect to home (dashboard placeholder)
      } else {
        setError('Please fill in all fields.');
      }
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Login - Benefi</title>
        <meta name="description" content="Login to your Benefi account" />
      </Helmet>

      <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
        {/* Left Side - Image/Brand */}
        <div className="hidden md:flex md:w-1/2 bg-[#1E3A5F] relative overflow-hidden items-center justify-center p-12 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] to-[#2D9B9B] opacity-90" />
          <div 
            className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-20"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1634715022648-13d43a4e9fe8)' }}
          />
          
          <div className="relative z-10 text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-6">Welcome Back</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              "Financial freedom is available to those who learn about it and work for it."
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex flex-col justify-center p-6 md:p-12 lg:p-24 relative">
          <Link to="/" className="absolute top-8 left-8 text-gray-500 hover:text-[#1E3A5F] flex items-center transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto"
          >
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-[#1E3A5F] mb-2">Sign In</h2>
              <p className="text-gray-500">Access your financial wellness dashboard</p>
            </div>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-6 border border-red-100">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-12"
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-[#2D9B9B] hover:underline font-medium">
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="h-12"
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-[#1E3A5F] hover:bg-[#152a45]"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>

            <div className="mt-8 text-center text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-[#2D9B9B] font-semibold hover:underline">
                Sign up
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;