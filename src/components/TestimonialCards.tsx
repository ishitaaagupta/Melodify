'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    quote:
      "This music school provided me with the discipline and creativity to compose my own music. The experience has been truly life-changing!",
    name: "Jordan Smith",
    title: "Composition Student",
  },
  {
    quote:
      "The mentorship here is incredible. My instructor helped me refine my drumming technique, and I feel more confident than ever.",
    name: "Daniel Carter",
    title: "Drum Student",
  },
  {
    quote:
      "I never imagined I could improve so much in just a few months. The structured lessons and supportive teachers made all the difference!",
    name: "Olivia Martinez",
    title: "Cello Student",
  },
  {
    quote:
      "From stage presence to vocal technique, this school covers everything an aspiring artist needs. I feel fully prepared for live performances!",
    name: "Rachel Green",
    title: "Vocal Performance Student",
  },
  {
    quote:
      "I was a complete beginner when I joined, and now I'm composing my own melodies. The step-by-step guidance was exactly what I needed!",
    name: "Liam Reynolds",
    title: "Piano Student",
  },
  {
    quote:
      "The music production classes introduced me to industry-standard software and techniques. I now produce tracks with confidence!",
    name: "Nathan Scott",
    title: "Music Production Student",
  },
  {
    quote:
      "The environment here fosters both creativity and technical mastery. I've grown so much as a violinist thanks to my amazing mentors!",
    name: "Sophia Williams",
    title: "Violin Student",
  },
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials