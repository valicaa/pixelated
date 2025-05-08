import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface AboutProps {
  team: TeamMember[];
}

const About: React.FC<AboutProps> = ({ team }) => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Agency</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2018, Pixelated is a collective of passionate designers, 
              developers, and strategists dedicated to creating meaningful digital 
              experiences that drive results.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe in the power of collaboration, innovation, and attention to detail. 
              Our approach combines strategic thinking with creative execution to deliver 
              solutions that not only look beautiful but also perform exceptionally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-3 gap-4">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <Image
                    src={`/${member.image}`}
                    alt={member.name} 
                    width={600}
                    height={600}
                    className="w-full aspect-square object-cover rounded-lg mb-3"
                  />
                  <h4 className="font-bold">{member.name}</h4>
                  <p className="text-gray-600 text-sm">{member.role}</p>
                </div>
              ))}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
