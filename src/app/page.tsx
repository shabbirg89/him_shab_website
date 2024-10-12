// src/app/page.tsx
import Link from 'next/link';
import ProjectCard from './components/ProjectCard';

const featuredProjects = [
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
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to HardwareHub</h1>
            <p className="text-xl mb-8">Discover and build amazing hardware projects</p>
            <Link href="/projects" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300">
              Explore Projects
            </Link>
          </div>
        </div>
        
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}