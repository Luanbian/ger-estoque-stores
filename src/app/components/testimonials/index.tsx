import type { Showcase } from "@/features/showcase/types";

interface Props {
  data: {
    testimonials: Showcase["testimonials"];
  };
}

export const Testimonials = ({ data }: Props) => {
  const { testimonials } = data;

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-12 mb-6">
        {testimonials.title}
      </h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
        {testimonials.sections.map((section, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
            <p className="text-gray-700">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
