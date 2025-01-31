import { MaxWidthWrapper } from "./max-width-wrapper";
import { Badge } from "./badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Procurement Manager, TechCorp",
    content:
      "SourceSmart has revolutionized our procurement process. The AI-driven insights have helped us reduce costs by 30% and improve supplier relationships significantly.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Supply Chain Director, GlobalTrade Inc.",
    content:
      "The predictive analytics feature is a game-changer. We've been able to optimize our inventory levels and respond to market changes proactively.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, Innovate Logistics",
    content:
      "Implementing SourceSmart was the best decision we made this year. The ROI has been impressive, and the platform's ease of use has improved team productivity.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-gray-50 border px-4">
      <MaxWidthWrapper className="max-w-screen-xl">
        <div className="text-center mb-12">
          <Badge className="text-xs bg-white shadow-sm text-secondary-foreground mb-4">
            Customer Success Stories
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
            See how SourceSmart is transforming procurement processes for
            businesses worldwide
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-sm border border-zinc-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-zinc-600 mb-4 tracking-wide">
                  {testimonial.content}
                </p>
              </div>
              <div>
                <p className="font-semibold text-zinc-800">
                  {testimonial.name}
                </p>
                <p className="text-xs text-zinc-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
