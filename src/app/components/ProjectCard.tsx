// src/components/ProjectCard.tsx
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, price, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <Image src={image} alt={title} width={400} height={300} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-gray-800">₹{price}</span>
        <Link href={`/projects/${id}`} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default ProjectCard;