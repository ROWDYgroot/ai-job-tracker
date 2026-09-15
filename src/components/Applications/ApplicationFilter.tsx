interface ApplicationFilterProps {
  selected: string;
  setSelected: (value: string) => void;
}

const ApplicationFilter = ({
  selected,
  setSelected,
}: ApplicationFilterProps) => {
  const tabs = [
    { id: 1, label: "All", value: "ALL" },
    { id: 2, label: "Applied", value: "Applied" },
    { id: 3, label: "Interview", value: "Interview" },
    { id: 4, label: "Rejected", value: "Rejected" },
    { id: 5, label: "Offer", value: "Offer" },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex min-w-max gap-2 rounded-xl p-1">
        {tabs.map((tab) => {
          const isSelected = selected === tab.value;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelected(tab.value)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isSelected
                  ? "bg-white text-purple-700 shadow-sm"
                  : "text-gray-600 hover:bg-white/70 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ApplicationFilter;