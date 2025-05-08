import React from 'react';
import { Mail, Send } from 'lucide-react';

interface ContactProps {
  formData: {
    name: string;
    email: string;
    message: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

const Contact: React.FC<ContactProps> = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-indigo-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to start your next project? Reach out to us through any of these channels:
            </p>
            
            <div className="space-y-6">
              <a href="https://wa.me/1234567890" className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-green-500 text-white rounded-full">
                  <Send size={20} />
                </div>
                <div>
                  <h3 className="font-bold">WhatsApp</h3>
                  <p className="text-gray-600">Connect with us on WhatsApp</p>
                </div>
              </a>
              
              <a href="https://t.me/pixelated" className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-blue-500 text-white rounded-full">
                  <Send size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Telegram</h3>
                  <p className="text-gray-600">Message us on Telegram</p>
                </div>
              </a>
              
              <a href="mailto:hello@pixelated.studio" className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="p-3 bg-indigo-600 text-white rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-600">hello@pixelated.studio</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="How can we help you?"
                />
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
