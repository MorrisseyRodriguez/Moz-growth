import React, { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ShineBorder } from './ui/ShineBorder';

interface ContactFormProps {
  buttonText?: string;
  reassurance?: string;
}

const ContactForm = ({
  buttonText = 'Book Discovery Call',
  reassurance = '15-minute strategic assessment. No sales pitch.',
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    company_name: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setError('');

    const templateParams = {
      name: formData.name,
      company_name: formData.company_name,
      email: formData.email,
    };

    try {
      await emailjs.send('service_uvrkx7k', 'template_giwu14v', templateParams, 'OZo1S52ylqKZv5AWM');
      await emailjs.send('service_uvrkx7k', 'template_bqbjmhk', templateParams, 'OZo1S52ylqKZv5AWM');
      setIsSubmitted(true);
      setFormData({ name: '', company_name: '', email: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setError('Something went wrong. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <ShineBorder
        borderRadius={16}
        color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
        duration={14}
        className="w-full min-w-0 p-8 text-center"
      >
        <CheckCircle className="w-14 h-14 text-blue-400 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Got it.</h3>
        <p className="text-gray-400 mb-6">
          I'll review your info and follow up within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
        >
          Submit another request
        </button>
      </ShineBorder>
    );
  }

  return (
    <div>
      <ShineBorder
        borderRadius={16}
        color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
        duration={14}
        className="w-full min-w-0"
      >
        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="company_name" className="block text-sm font-medium text-gray-400 mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              required
              placeholder="Your company name"
              className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-dark-700 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-colors"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-bold text-base transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 mt-2"
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                {buttonText}
              </>
            )}
          </button>
        </form>
      </ShineBorder>

      <p className="text-sm text-gray-500 text-center mt-4">{reassurance}</p>
    </div>
  );
};

export default ContactForm;
