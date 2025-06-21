import Image, { StaticImageData } from 'next/image';

interface CourseHeroSectionProps {
  image: string | StaticImageData;
  title: string;
}

function splitTitle(title: string) {
  if (title.length <= 40) return [title];
  const midpoint = Math.floor(title.length / 2);
  let breakIndex = title.lastIndexOf(' ', midpoint);
  if (breakIndex === -1) breakIndex = midpoint;
  return [title.slice(0, breakIndex), title.slice(breakIndex).trim()];
}

const CourseHeroSection = ({ image, title }: CourseHeroSectionProps) => {
  const lines = splitTitle(title);
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-opacity-50 z-10 flex items-center justify-center">
        <h1 className="text-white text-4xl sm:text-3xl md:text-5xl font-bold text-center px-4">
          {lines.map((line, i) => (
            <span key={i} className="block">{line}</span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default CourseHeroSection; 