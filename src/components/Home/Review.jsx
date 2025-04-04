import Marquee from "../ui/marquee";
import FlipText from "../ui/flip-text";

const reviews = [
  {
    "name": "Aarav",
    "username": "@aarav",
    "body": "The events organized by TDS NSUT are exceptional. The hands-on workshops are a game changer!",
    "img": "https://api.dicebear.com/9.x/identicon/svg?seed=Aarav"
  },
  {
    "name": "Ishita",
    "username": "@ishita",
    "body": "Being part of TDS NSUT has boosted my coding skills immensely. The guidance here is unmatched!",
    "img": "https://api.dicebear.com/9.x/identicon/svg?seed=Ishita"
  },
  {
    "name": "Rohan",
    "username": "@rohan",
    "body": "The community is amazing! The hackathons and tech talks really broaden your perspective.",
    "img": "https://api.dicebear.com/9.x/identicon/svg?seed=Rohan"
  },
  {
    "name": "Meera",
    "username": "@meera",
    "body": "I love how TDS NSUT makes learning so fun and interactive. Joining was the best decision!",
    "img": "https://api.dicebear.com/9.x/identicon/svg?seed=Meera"
  },
  {
    "name": "Kabir",
    "username": "@kabir",
    "body": "From coding competitions to guest lectures, TDS NSUT is the hub of tech brilliance.",
    "img": "https://api.dicebear.com/9.x/identicon/svg?seed=Kabir"
  },
  {
    "name": "Ananya",
    "username": "@ananya",
    "body": "The mentorship program at TDS NSUT is outstanding. It helped me land my first internship!",
    "img": "https://api.dicebear.com/9.x/identicon/svg?seed=Ananya"
  }
]

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={`relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 
        border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] 
        dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]`}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div>
    <div className="flex animate-on-scroll flex-col md:flex-row justify-center items-center gap-5 p-5 w-full">
    <FlipText
      className="text-4xl font-bold -tracking-widest text-blue-500 md:text-7xl md:leading-[5rem]"
      word="Reviews"
    />
    </div>
    <div className="relative flex h-auto w-full flex-col items-center justify-center overflow-hidden md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </div>
  );
};

export default MarqueeDemo;
