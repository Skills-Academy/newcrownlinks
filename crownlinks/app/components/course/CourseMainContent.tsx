import Image, { StaticImageData } from 'next/image';

const CourseMainContent = ({
  overview,
  whoFor,
  whatLearn,
  requirements,
  card
}: {
  overview: string;
  whoFor: string[];
  whatLearn: string;
  requirements: string;
  card: {
    image: string | StaticImageData;
    instructor: string;
    duration: string;
    lessons: number;
    enrolled: number;
    access: string;
    price: string;
    oldPrice: string;
  }
}) => (
  <section className="w-full max-w-none bg-white py-8 sm:py-12 md:py-16 px-2 sm:px-6 md:px-12 flex flex-col lg:flex-row gap-8 md:gap-12">
    <div className="flex-1 min-w-0">
      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Overview</h3>
      <p className="mb-5 sm:mb-8 text-base sm:text-lg text-gray-700">{overview}</p>
      <h4 className="font-semibold mb-2 sm:mb-2 text-lg sm:text-xl">Who is this course for?</h4>
      <ul className="mb-5 sm:mb-8 list-disc list-inside text-base sm:text-lg text-gray-700">
        {whoFor.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <h4 className="font-semibold mb-2 sm:mb-2 text-lg sm:text-xl">What you will learn</h4>
      <p className="mb-5 sm:mb-8 text-base sm:text-lg text-gray-700">{whatLearn}</p>
      <h4 className="font-semibold mb-2 sm:mb-2 text-lg sm:text-xl">Requirements</h4>
      <p className="text-base sm:text-lg text-gray-700">{requirements}</p>
    </div>
    <aside className="w-full max-w-full sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto flex-shrink-0">
      <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl p-6 sm:p-8 md:p-12 sticky top-8">
        <div className="w-full h-48 sm:h-56 md:h-64 relative mb-6 md:mb-8">
          <Image src={card.image} alt="Course" layout="fill" objectFit="cover" className="rounded-lg md:rounded-xl" />
        </div>
        <div className="flex justify-between text-base md:text-lg mb-3 md:mb-4">
          <span className="text-gray-500">Instructor</span>
          <span className="font-semibold">{card.instructor}</span>
        </div>
        <div className="flex justify-between text-base md:text-lg mb-3 md:mb-4">
          <span className="text-gray-500">Duration</span>
          <span>{card.duration}</span>
        </div>
        <div className="flex justify-between text-base md:text-lg mb-3 md:mb-4">
          <span className="text-gray-500">Lessons</span>
          <span>{card.lessons}</span>
        </div>
        <div className="flex justify-between text-base md:text-lg mb-3 md:mb-4">
          <span className="text-gray-500">Enrolled</span>
          <span>{card.enrolled} STUDENTS</span>
        </div>
        <div className="flex justify-between text-base md:text-lg mb-4 md:mb-6">
          <span className="text-gray-500">Access</span>
          <span>{card.access}</span>
        </div>
        <div className="flex items-end gap-2 mb-5 md:mb-8">
          <span className="text-2xl md:text-4xl font-bold">{card.price}</span>
          <span className="text-gray-400 line-through text-lg md:text-2xl">{card.oldPrice}</span>
        </div>
        <button className="w-full bg-[#1976d2] text-white font-semibold py-2 md:py-4 rounded-lg md:rounded-xl text-base md:text-xl mb-3 md:mb-4">Add to cart</button>
        <button className="w-full border border-[#1976d2] text-[#1976d2] font-semibold py-2 md:py-3 rounded-lg md:rounded-xl mb-3 md:mb-4 text-base md:text-lg">Apply coupon codes</button>
        <div className="text-xs md:text-base text-center text-gray-500 mt-2">30-Days Money-Back Guarantee</div>
      </div>
    </aside>
  </section>
);

export default CourseMainContent; 