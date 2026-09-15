interface ApplicationCardProps {
  id: string;
  company: string;
  role: string;
  status: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

const ApplicationCard = ({
  id,
  company,
  role,
  status,
  onDelete,
  onEdit
}: ApplicationCardProps) => {
  const statusStyles: Record<string, string> = {
    Interview: "bg-blue-100 text-blue-700",
    Applied: "bg-yellow-100 text-yellow-700",
    Rejected: "bg-red-100 text-red-700",
    Offer: "bg-green-100 text-green-700",
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

        {/* Company + Role */}
        <div className="flex min-w-0 flex-1 items-center gap-4">

          {/* Company Avatar */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-lg font-bold text-purple-600">
            {company.charAt(0).toUpperCase()}
          </div>

          {/* Details */}
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-gray-900">
              {company}
            </h3>

            <p className="mt-1 truncate text-sm text-gray-500">
              {role}
            </p>
          </div>
        </div>

        {/* Status + Delete */}
        <div className="flex items-center justify-between gap-4 sm:justify-end">

          {/* Status */}
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
              statusStyles[status] ?? "bg-gray-100 text-gray-700"
            }`}
          >
            {status}
          </span>

          {/* Edit */}
          <button
            type="button"
            onClick={() => onEdit(id)}
            className="rounded-lg px-3 py-1.5 text-xs font-medium text-blue-600 transition hover:bg-gray-50 hover:text-blue-700 active:bg-blue-100"
          >
            Edit
          </button>

          {/* Delete */}
          <button
            type="button"
            onClick={() => onDelete(id)}
            className="rounded-lg px-3 py-1.5 text-xs font-medium text-red-600 transition hover:bg-red-50 hover:text-red-700 active:bg-red-100"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

export default ApplicationCard;