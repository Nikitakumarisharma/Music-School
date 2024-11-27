'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";
import anjuimage from "./anju dp.jpg"
import ishudp from "./ishika dp.jpg"
import nikitadp from "./dp.png"
import nikita from "./nikita.jpg"

const people = [
    {
      id: 1,
      name: 'Nikita sharma',
      designation: 'Vocal Coach',
      image:nikitadp,
    },
    {
      id: 2,
      name: 'Anju Rani',
      designation: 'Guitar Instructor',
      image:anjuimage,
    },
    {
      id: 3,
      name: 'Ishika Kamboj',
      designation: 'Piano Teacher',
      image:ishudp,
    },
    {
      id: 4,
      name: 'Naincy',
      designation: 'Drumming Expert',
      image: nikita,
    },
  ];

const Mentor = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Instructors</h2>
            <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={people} />
            </div>
        </WavyBackground>
    </div>
  )
}

export default Mentor;
