interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="mb-2 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="text-sm leading-6 text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;