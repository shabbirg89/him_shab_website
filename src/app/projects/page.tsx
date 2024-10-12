// src/app/projects/page.tsx
import ProjectCard from '../components/ProjectCard';

const projects = [
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
  // Add more projects here
];

export default function Projects() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">All Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
}