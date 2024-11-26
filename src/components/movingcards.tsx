'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const data = [
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    name: "Franklin D. Roosevelt",
    title: "32nd President of the United States"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    name: "Albert Einstein",
    title: "Theoretical Physicist"
  },
  {
    quote: "Success is not the key to happiness. Happiness is the key to success.",
    name: "Albert Schweitzer",
    title: "Philosopher and Physician"
  },
  {
    quote: "Do what you can, with what you have, where you are.",
    name: "Theodore Roosevelt",
    title: "26th President of the United States"
  },
  {
    quote: "Strive not to be a success, but rather to be of value.",
    name: "Albert Eiinstein",
    title: "Theoretical Physicist"
  }
];

function Movingcards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10 text-white">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-8xl">
            <InfiniteMovingCards
                items={data}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default Movingcards