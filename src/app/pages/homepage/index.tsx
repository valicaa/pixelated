"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navigation from '@/ui/homepage/Navigation';
import Services from '@/ui/homepage/Services';
import Portfolio from '@/ui/homepage/Portfolio';
import About from '@/ui/homepage/About';
import Contact from '@/ui/homepage/Contact';
import Footer from '@/ui/homepage/Footer';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = ['home', 'services', 'work', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const services = [
    {
      title: 'Brand Strategy',
      description: 'We craft identities that resonate with your audience and establish a strong market presence.',
      icon: '✨'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centric design that creates intuitive, engaging digital experiences.',
      icon: '🎨'
    },
    {
      title: 'Web Development',
      description: 'Custom websites and applications built with cutting-edge technologies.',
      icon: '💻'
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic campaigns that drive traffic, engagement, and conversions.',
      icon: '📈'
    }
  ];

  const projects = [
    {
      title: 'Vibrant Rebranding',
      category: 'Brand Identity',
      image: 'vibrantproject.svg'
    },
    {
      title: 'E-commerce Experience',
      category: 'Web Development',
      image: 'ecommerceproject.svg'
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      image: 'ecommerceproject.svg'
    },
    {
      title: 'Marketing Campaign',
      category: 'Digital Marketing',
      image: 'vibrantproject.svg'
    }
  ];

  const team = [
    {
      name: 'Alex Morgan',
      role: 'Creative Director',
      image: 'team.png'
    },
    {
      name: 'Sam Wilson',
      role: 'Lead Developer',
      image: 'team.png'
    },
    {
      name: 'Jamie Lee',
      role: 'Design Lead',
      image: 'team.png'
    }
  ];

  return (
    <div className="font-sans text-gray-800 min-h-screen">
      <Navigation
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        navItems={navItems}
        isScrolled={isScrolled}
      />
      <main>
        <section id="home" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-6 py-12 md:py-24">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  We bring <span className="text-indigo-600">creative ideas</span> to life
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  A digital creative agency focused on growing brands through 
                  strategic design, development, and marketing solutions.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-indigo-700 transition-colors"
                  >
                    Get in touch
                    <ArrowRight size={18} className="ml-2" />
                  </button>
                  <button 
                    onClick={() => scrollToSection('work')}
                    className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
                  >
                    View our work
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
              <Image src="heroImage.svg" alt="Creative Design" className='' width={500} height={400}/>
              </div>
            </div>
          </div>
        </section>
        <Services services={services} />
        <Portfolio projects={projects} />
        <About team={team} />
        <Contact 
          formData={formData} 
          handleInputChange={handleInputChange} 
          handleSubmit={handleSubmit} 
        />
        <Footer />
      </main>
    </div>
  );
}
