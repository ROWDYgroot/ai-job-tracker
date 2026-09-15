interface StatsCardProps {
  title: string;
  count: number;
}

const StatsCard = ({ title, count }: StatsCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <p className="text-sm font-medium text-gray-500">
        {title}
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
        {count}
      </h1>
    </div>
  );
};

export default StatsCard;