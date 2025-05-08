import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  category: string;
  image: string;
}

interface PortfolioProps {
  projects: Project[];
}

const Portfolio: React.FC<PortfolioProps> = ({ projects }) => {
  return (
    <section id="work" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of our recent work delivering exceptional results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <Image 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 opacity-100 md:opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="text-indigo-300 font-medium">{project.category}</span>
                <h3 className="text-xl md:text-2xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}</div>
          
          <div className="text-center mt-12">
            <button className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
              View all projects
            </button>
          </div>
        </div>
      </section>
  );
};

export default Portfolio;
