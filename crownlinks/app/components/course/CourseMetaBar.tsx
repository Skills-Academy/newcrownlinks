import Image, { StaticImageData } from 'next/image';
import meta_circle from '@/app/assets/icons/Ellipse 541.png';

const Dot = () => (
  <span className="inline-flex items-center justify-center mx-2">
    <Image src={meta_circle} alt="separator" width={12} height={12} />
  </span>
);

const CourseMetaBar = ({ instructor, instructorImage, category, students, lastUpdated }: { instructor: string; instructorImage: string | StaticImageData; category: string; students: number; lastUpdated: string }) => (
  <div className="bg-white w-full border-b px-4 py-4 flex flex-wrap gap-4 items-center justify-between text-sm text-gray-700">
    <span className="flex items-center gap-2">
      <Image src={instructorImage} alt={instructor} width={32} height={32} className="rounded-full object-cover" />
      Created by <span className="font-semibold">{instructor}</span>
    </span>
    <Dot />
    <span>{category}</span>
    <Dot />
    <span>{students} Students Enrolled</span>
    <Dot />
    <span>Last Updated {lastUpdated}</span>
  </div>
);

export default CourseMetaBar; 