import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { Send } from 'lucide-react';

function ContactFormSection() {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors]             = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim())
      newErrors.name = 'Name is required';
    else if (formData.name.trim().length < 2)
      newErrors.name = 'Please enter your full name';

    if (!formData.email.trim())
      newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim()))
      newErrors.email = 'Please enter a valid email address';

    if (!formData.company.trim())
      newErrors.company = 'Company name is required';

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const digits = formData.phone.replace(/\D/g, '');
      if (digits.length < 7)
        newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim())
      newErrors.message = 'Please tell us about your needs';
    else if (formData.message.trim().length < 10)
      newErrors.message = 'Message is too short — please provide a bit more detail';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: 'Please fix the errors below',
        description: 'All fields marked with * are required.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const API_BASE = import.meta.env.VITE_API_URL || 'https://sales-app.benefi.ph';
      const res = await fetch(`${API_BASE}/api/public/enquiry`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(formData),
        signal:  AbortSignal.timeout(10000),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.message || `Server error (${res.status}). Please try again.`);
      }

      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
      setErrors({});

      toast({
        title: 'Request received!',
        description: "Thank you for your interest in BeneFi. We'll be in touch shortly.",
      });
    } catch (err) {
      const isNetwork = err.name === 'TimeoutError' || err.name === 'TypeError';
      toast({
        title: 'Submission failed',
        description: isNetwork
          ? 'Connection error. Please check your internet and try again, or email us at sales@benefi.ph.'
          : (err.message || 'Something went wrong. Please email sales@benefi.ph directly.'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Early Access
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Join the waitlist and be among the first to experience BeneFi when we launch.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />
                {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />
                {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="company">Company Name *</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className={errors.company ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />
                {errors.company && <p className="text-sm text-red-600">{errors.company}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+63 9XX XXX XXXX"
                  className={errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}
                />
                {errors.phone && <p className="text-sm text-red-600">{errors.phone}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell us about your needs *</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How many employees does your company have? What benefits challenges are you trying to solve?"
                rows={5}
                className={errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}
              />
              {errors.message && <p className="text-sm text-red-600">{errors.message}</p>}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#E8B86B] to-[#2D9B9B] hover:from-[#D4A574] hover:to-[#1E8080] text-white font-semibold py-6 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {isSubmitting ? 'Sending...' : (
                <>Request Early Access <Send className="ml-2 h-5 w-5" /></>
              )}
            </Button>

            <p className="text-center text-sm text-gray-400">
              By submitting, you agree to be contacted by the BeneFi team.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactFormSection;
