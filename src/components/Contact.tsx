import React, { useState } from 'react';
import { Mail, Phone, Send, User } from 'lucide-react';
import AnimatedText from './ui/AnimatedText';
import ScrollReveal from './ui/ScrollReveal';
import { toast } from 'sonner';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return <section id="contact" className="relative overflow-hidden bg-slate-900 py-0">
      <div className="section-container mx-0 py-[76px]">
        <ScrollReveal>
          <p className="text-primary font-medium mb-4 text-center">Contact</p>
        </ScrollReveal>
        
        <ScrollReveal delay={0.2}>
          <h2 className="heading text-center mb-16">
            <AnimatedText text="Get In Touch" className="inline-block" />
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h3 className="font-semibold text-2xl mb-6">Contact Information</h3>
              
              <div className="glass p-6 rounded-xl bg-gray-900">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:avinashchandan12@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      avinashchandan12@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass p-6 rounded-xl bg-gray-900">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+917903734549" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 7903734549
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <p className="text-muted-foreground">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="left">
            <div className="glass p-6 rounded-xl bg-gray-900">
              <h3 className="font-semibold text-2xl mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <div className="relative">
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                
                <div>
                  <div className="relative">
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full p-4 pl-12 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  </div>
                </div>
                
                <div>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required rows={5} className="w-full p-4 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition" />
                </div>
                
                <button type="submit" disabled={isSubmitting} className="button-primary w-full flex items-center justify-center">
                  {isSubmitting ? 'Sending...' : <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>}
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>;
};
export default Contact;