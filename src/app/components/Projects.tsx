// src/app/components/Projects.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Project {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProjectCard: React.FC<Project> = ({ title, description, price, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-gray-800">₹{price}</span>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Arduino-based Smart Home Kit",
      description: "Build your own smart home system with this comprehensive Arduino kit.",
      price: 2999,
      image: "/images/smart-home-kit.jpg"
    },
    {
      id: 2,
      title: "Raspberry Pi Weather Station",
      description: "Create a fully functional weather station using Raspberry Pi.",
      price: 3499,
      image: "/images/weather-station.jpg"
    },
    {
      id: 3,
      title: "DIY Drone Kit",
      description: "Assemble and program your own drone with this complete kit.",
      price: 5999,
      image: "/images/drone-kit.jpg"
    },
  ]);

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Hardware Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;