interface ApplicationSearchProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const ApplicationSearch = ({
  search,
  setSearch,
}: ApplicationSearchProps) => {
  return (
    <div className="relative w-full max-w-l">
      {/* Search Icon */}
      <svg
        className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m21 21-4.35-4.35m2.35-5.65a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        />
      </svg>

      {/* Input */}
      <input
        type="text"
        placeholder="Search applications..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
      />
    </div>
  );
};

export default ApplicationSearch;