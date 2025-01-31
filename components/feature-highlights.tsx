import { MaxWidthWrapper } from "./max-width-wrapper";
import { Badge } from "./badge";
import { ChartBarIcon, CogIcon, LightbulbIcon, Plus } from "lucide-react";
import { Fragment } from "react";

const plusSignClass = "absolute text-zinc-300 text-xl font-light";

const features = [
  {
    title: "Procure Smarter",
    description:
      "Find the right suppliers and avoid surcharges with AI-driven insights.",
    icon: LightbulbIcon,
  },
  {
    title: "Predict with Confidence",
    description:
      "Demand and price predictions to help you buy, sell, or hold stock at the right time.",
    icon: ChartBarIcon,
  },
  {
    title: "Optimize Your Business",
    description:
      "Integrated AI to make your supply chain more effective and cost-efficient.",
    icon: CogIcon,
  },
];

export default function FeatureHighlights() {
  return (
    <section
      className="relative overflow-hidden py-20 bg-background px-4"
      id="features"
    >
      <MaxWidthWrapper className="max-w-screen-xl">
        <div className="text-center mb-12">
          <Badge className="bg-gray-100/20 shadow-sm text-xs text-secondary-foreground mb-4">
            Key Features
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Why Choose Our <span className="">Platform?</span>
          </h2>
          <p className="text-sm md:text-base text-zinc-800 mb-8 max-w-2xl mx-auto">
            Discover how we can help you achieve your goals
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 relative">
          <div className="absolute right-0 top-20 w-32 h-32 bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 blur-3xl md:blur-2xl"></div>
          {features.map((feature, index) => (
            <Fragment key={index}>
              <div
                className={`flex flex-col space-y-2 border-l-4 p-6 border-zinc-100 md:border md:p-10 transition-all hover:bg-zinc-50 relative bg-white`}
              >
                <span className={`${plusSignClass} top-2 left-2`}>
                  <Plus className="size-3" />
                </span>
                <span className={`${plusSignClass} bottom-2 right-2`}>
                  <Plus className="size-3" />
                </span>
                <feature.icon className="size-9 mb-4 p-2 bg-[#019963] rounded-md text-white" />
                <h3 className="text-lg text-zinc-800 font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-zinc-600 tracking-wide">
                  {feature.description}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
