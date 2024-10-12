// src/app/projects/[id]/page.tsx
import Image from 'next/image';

// This would typically come from a database or API
const getProjectById = (id: string) => {
  const projects = [
    {
      id: '1',
      title: "Arduino-based Smart Home Kit",
      description: "Build your own smart home system with this comprehensive Arduino kit. This project allows you to automate your home, control lights, monitor temperature and humidity, and even add voice control capabilities.",
      price: 2999,
      image: "/images/smart-home-kit.jpg",
      features: [
        "Arduino Uno board",
        "Various sensors (temperature, humidity, motion)",
        "Relay modules for controlling appliances",
        "Detailed instruction manual and code samples",
      ],
      difficulty: "Intermediate",
      estimatedTime: "10-15 hours",
    },
    // Add more projects here
  ];

  return projects.find(project => project.id === id);
};

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src={project.image} alt={project.title} width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{project.title}</h1>
            <p className="text-gray-600 mb-6">{project.description}</p>
            <p className="text-2xl font-bold text-gray-800 mb-6">₹{project.price}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mb-6">
              Add to Cart
            </button>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Features:</h2>
              <ul className="list-disc list-inside">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <p><strong>Difficulty:</strong> {project.difficulty}</p>
              <p><strong>Estimated Time:</strong> {project.estimatedTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}