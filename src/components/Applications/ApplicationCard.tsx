interface ApplicationCardProps {
  id: string;
  company: string;
  role: string;
  status: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
  onDetails: (id: string) => void;
}

const ApplicationCard = ({
  id,
  company,
  role,
  status,
  onDelete,
  onEdit,
  onDetails
}: ApplicationCardProps) => {
  const statusStyles: Record<string, string> = {
    Interview: "bg-blue-50 text-blue-700 ring-blue-200",
    Applied: "bg-amber-50 text-amber-700 ring-amber-200",
    Rejected: "bg-red-50 text-red-700 ring-red-200",
    Offer: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  };

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/50 sm:p-6">
      {/* Company details and status */}
      <div className="flex items-start gap-4">
        {/* Company avatar */}
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-100 text-xl font-bold text-purple-700 ring-4 ring-purple-50 transition-colors group-hover:bg-purple-200">
          {company?.trim().charAt(0).toUpperCase() || "?"}
        </div>

        {/* Company name and role */}
        <div className="min-w-0 flex-1 pt-1">
          <h3
            title={company}
            className="break-words text-base font-bold leading-6 text-gray-900"
          >
            {company}
          </h3>

          <p
            title={role}
            className="mt-1 break-words text-sm leading-5 text-gray-500"
          >
            {role}
          </p>
        </div>

        {/* Status badge */}
        <span
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ring-1 ring-inset ${
            statusStyles[status] ?? "bg-gray-50 text-gray-600 ring-gray-200"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-gray-100" />

      {/* Actions */}
      <div className="mt-auto flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-gray-400">
          Application
        </span>

        <div className="flex items-center gap-2">
          {/* Details */}
          <button
            type="button"
            onClick={() => onDetails(id)}
            className="rounded-lg border border-purple-200 bg-purple-50 px-3 py-2 text-sm font-semibold text-purple-700 transition hover:bg-purple-100 active:scale-95"
          >
            Details
          </button>

          {/* Edit */}
          <button
            type="button"
            onClick={() => onEdit(id)}
            className="rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 transition hover:border-purple-200 hover:bg-purple-50 hover:text-purple-700 active:scale-95"
          >
            Edit
          </button>

          {/* Delete */}
          <button
            type="button"
            onClick={() => onDelete(id)}
            className="rounded-lg border border-red-100 bg-red-50 px-3.5 py-2 text-sm font-semibold text-red-600 transition hover:border-red-200 hover:bg-red-100 active:scale-95"
          >
            Delete
          </button>
        </div>

      </div>
    </article>
  );
};

export default ApplicationCard;
