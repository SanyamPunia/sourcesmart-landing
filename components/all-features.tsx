import { MaxWidthWrapper } from "./max-width-wrapper";
import { Badge } from "./badge";
import {
  Box,
  BarChartIcon as ChartBar,
  PieChartIcon as ChartPie,
  File,
  Search,
  Plus,
  Users,
} from "lucide-react";

const features = [
  {
    name: "Dashboard Overview",
    icon: ChartPie,
    description:
      "Get a comprehensive view of your procurement processes and key metrics at a glance.",
  },
  {
    name: "Supplier Discovery Module",
    icon: Search,
    description:
      "Find and evaluate potential suppliers with AI-powered search and analysis tools.",
  },
  {
    name: "RFQ Management",
    icon: File,
    description:
      "Streamline your Request for Quotation process with automated workflows and tracking.",
  },
  {
    name: "Predictive Market Analysis",
    icon: ChartBar,
    description:
      "Leverage AI to forecast market trends and make data-driven procurement decisions.",
  },
  {
    name: "Inventory Optimization",
    icon: Box,
    description:
      "Optimize your inventory levels to reduce costs and improve supply chain efficiency.",
  },
  {
    name: "Relationship Management",
    icon: Users,
    description:
      "Build and maintain strong relationships with your suppliers to ensure long-term success and collaboration.",
  },
];
const plusSignClass = "absolute text-zinc-300 text-xl font-light";

export default function AllFeatures() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-background px-4">
      <MaxWidthWrapper className="max-w-screen-xl">
        <div className="text-center mb-12">
          <Badge className="text-xs bg-white shadow-sm text-secondary-foreground mb-4">
            All Features
          </Badge>
          <h2 className="text-2xl md:text-3xl max-w-2xl mx-auto font-bold mb-4">
            Comprehensive Tools to Optimize Your Supply Chain
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
            Discover our full suite of AI-powered features designed to
            revolutionize your procurement process
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col space-y-2 border border-zinc-100 p-6 md:p-8 transition-all hover:bg-zinc-50 relative bg-white"
            >
              <span className={`${plusSignClass} top-2 left-2`}>
                <Plus className="size-3" />
              </span>
              <span className={`${plusSignClass} bottom-2 right-2`}>
                <Plus className="size-3" />
              </span>
              <feature.icon className="size-9 mb-4 p-2 bg-[#019963] rounded-md text-white" />
              <h3 className="text-lg text-zinc-800 font-semibold mb-2">
                {feature.name}
              </h3>
              <p className="text-sm text-zinc-600 tracking-wide">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
