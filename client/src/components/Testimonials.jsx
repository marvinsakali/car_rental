import { assets } from "../assets/assets";
import Title from "./Title";

export default function Testimonials() {
  return (
    <div className=" px-6 md:px-10 lg:px-24 xl:px-44 flex flex-col items-center justify-center">
      <div className="text-center mb-18">
        <Title
          title="What Our Customers Say"
          subtitle="Discover why discerning travelers choose StayVenture for their luxury accommodations around the world."
        />
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Testimonial 1 */}
        <div className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <img key={index} src={assets.star_icon} alt="star icon" />
                ))}
            </div>
            <p>12 Jan 2025</p>
          </div>
          <p>
            "I've rented cars from various companies, but the experience with
            CarRental was exceptional."
          </p>
          <div className="flex items-center gap-2 pt-3">
            <img
              className="h-12 w-12 rounded-full"
              src={assets.testimonial_image_1}
              alt="Richard Nelson"
            />
            <p className="font-medium text-gray-800">Richard Nelson</p>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <img src={assets.star_icon} alt="star icon" />
              <img src={assets.star_icon} alt="star icon" />
              <img src={assets.star_icon} alt="star icon" />
              <img src={assets.star_icon} alt="star icon" />
              <img src={assets.star_icon} alt="star icon" />
            </div>
            <p>15 Mar 2025</p>
          </div>
          <p>
            “The design quality is top-notch. Perfect balance between simplicity
            and style. Highly recommend for any creative developer!”
          </p>
          <div className="flex items-center gap-2 pt-3">
            <img
              className="h-12 w-12 rounded-full"
              src={assets.testimonial_image_2}
              alt="Sophia Martinez"
            />
            <p className="font-medium text-gray-800">Sophia Martinez</p>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="w-full max-w-88 space-y-4 rounded-md border border-gray-200 bg-white p-3 text-gray-500 transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <img src={assets.star_icon} alt="star icon" />
              <img src={assets.star_icon} alt="star icon" />
              <img src={assets.star_icon} alt="star icon" />
              <img src={assets.star_icon} alt="star icon" />
              <img src={assets.star_icon} alt="star icon" />
            </div>
            <p>20 Feb 2025</p>
          </div>
          <p>
            “Absolutely love the reusability of these components. My workflow
            feels 10x faster now with cleaner and more consistent layouts.”
          </p>
          <div className="flex items-center gap-2 pt-3">
            <img
              className="h-8 w-8 rounded-full"
              src={assets.testimonial_image_2}
              alt="Ethan Roberts"
            />
            <p className="font-medium text-gray-800">Ethan Roberts</p>
          </div>
        </div>
      </div>
    </div>
  );
}
