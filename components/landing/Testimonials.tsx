import { Marquee } from "../ui/marquee";
import Testimonial from "../ui/Testimonial";
import reviews from "../../app/reviews";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export default function MarqueeDemo() {
  return (
    <div className="relative flex w-screen flex-col items-center justify-center overflow-hidden">
      <Marquee className="[--duration:5]">
        {firstRow.map((review) => (
          <div className="px-2" key={review.username}>
            <Testimonial {...review} />
          </div>
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:5]">
        {secondRow.map((review) => (
          <div key={review.username} className="px-2">
            <Testimonial {...review} />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black to-transparent"></div>
    </div>
  );
}
