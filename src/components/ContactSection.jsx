import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Facebook, Youtube, Linkedin, Globe, CheckCircle2 } from 'lucide-react';

export default function ContactSection({ theme }) {
  const isDark = theme === 'dark';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className={`py-12 ${isDark ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Contact Hero Banner matching screenshot */}
        <div className={`rounded-3xl p-8 sm:p-12 border ${
          isDark 
            ? 'bg-gradient-to-r from-blue-950/60 via-indigo-950/40 to-slate-900 border-indigo-900/40' 
            : 'bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-blue-100 shadow-sm'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
                Get in Touch
              </span>
              <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Contact Us <br />
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                  We're Here to Help
                </span>
              </h1>
              <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                Have a question, suggestion or need support? Feel free to reach out to us. We'd love to hear from you!
              </p>
            </div>

            {/* Illustration graphic with envelope matching screenshot */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-40 h-32 bg-blue-500 rounded-2xl p-4 text-white shadow-xl flex items-center justify-center transform hover:scale-105 transition-transform">
                <Mail className="w-16 h-16 text-white" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-emerald-400 flex items-center justify-center text-white shadow-md">
                  <Phone className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2-Column Contact Form & Information Panel matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form */}
          <div className={`lg:col-span-7 p-6 sm:p-8 rounded-3xl border ${
            isDark 
              ? 'bg-[#131b2e] border-slate-800' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <h2 className={`text-xl font-extrabold mb-6 ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-500 mx-auto animate-bounce" />
                <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Message Sent Successfully!</h3>
                <p className="text-xs text-slate-400">Thank you for reaching out. We will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className={`w-full rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 border transition-all ${
                      isDark 
                        ? 'bg-slate-900/80 border-slate-700 text-white' 
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className={`w-full rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 border transition-all ${
                      isDark 
                        ? 'bg-slate-900/80 border-slate-700 text-white' 
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Select Subject
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 border transition-all ${
                      isDark 
                        ? 'bg-slate-900/80 border-slate-700 text-white' 
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  >
                    <option value="">Choose a subject...</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feature">Feature Request</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className={`w-full rounded-xl px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 border transition-all ${
                      isDark 
                        ? 'bg-slate-900/80 border-slate-700 text-white' 
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-rose-500 via-purple-600 to-indigo-600 hover:from-rose-600 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-rose-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Information matching screenshot */}
          <div className={`lg:col-span-5 p-6 sm:p-8 rounded-3xl border flex flex-col justify-between ${
            isDark 
              ? 'bg-[#131b2e] border-slate-800' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="space-y-6">
              <h2 className={`text-xl font-extrabold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Contact Information
              </h2>

              <div className="space-y-5">
                
                {/* Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Our Office</h3>
                    <p className={`text-xs mt-0.5 leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      123 Tech Park, Green Street,<br />
                      Pune - 411001, Maharashtra, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Email Us</h3>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      support@pdftools.com
                    </p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Call Us</h3>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      +91 98765 43210 <br />
                      <span className="text-[10px] text-slate-400">(Mon - Fri, 9 AM - 6 PM)</span>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Working Hours</h3>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      Monday - Friday <br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6 border-t border-slate-800/60 mt-6">
              <h4 className={`text-xs font-bold mb-3 ${isDark ? 'text-white' : 'text-slate-900'}`}>Follow Us</h4>
              <div className="flex items-center gap-3">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:opacity-90">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-red-600 text-white flex items-center justify-center hover:opacity-90">
                  <Youtube className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-blue-700 text-white flex items-center justify-center hover:opacity-90">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href="https://pdftools.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center hover:opacity-90">
                  <Globe className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
