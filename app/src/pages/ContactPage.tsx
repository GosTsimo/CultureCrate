import { useState } from 'react';
import { Mail, MapPin, Send, Clock, Globe } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };
  

  return (
    <div className="bg-cream min-h-screen pt-24 pb-16">
      <div className="section-padding">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-navy font-semibold mb-4">
            Contact Us
          </h1>
          <p className="font-body text-navy/60 text-lg">
            We'd love to hear from you. Whether you have a question about our boxes, need help with your subscription, or just want to say hello.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-base text-navy font-semibold mb-1">Email</h3>
                <p className="font-body text-sm text-navy/60">hello@culturecrate.com</p>
                <p className="font-body text-sm text-navy/60">support@culturecrate.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-base text-navy font-semibold mb-1">Address</h3>
                <p className="font-body text-sm text-navy/60">123 Cultural Lane</p>
                <p className="font-body text-sm text-navy/60">New York, NY 10001</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-base text-navy font-semibold mb-1">Hours</h3>
                <p className="font-body text-sm text-navy/60">Mon - Fri: 9AM - 6PM EST</p>
                <p className="font-body text-sm text-navy/60">Sat - Sun: 10AM - 4PM EST</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-base text-navy font-semibold mb-1">Social</h3>
                <p className="font-body text-sm text-navy/60">@culturecrate on all platforms</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 shadow-sm text-center">
                <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                  <Send className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-display text-2xl text-navy font-semibold mb-3">Message Sent!</h3>
                <p className="font-body text-navy/60">Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-10 shadow-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block font-body text-sm text-navy mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-navy mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block font-body text-sm text-navy mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="mb-6">
                  <label className="block font-body text-sm text-navy mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-cream/50 border border-cream-dark rounded-lg font-body text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <button type="submit" className="btn-gold w-full sm:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
