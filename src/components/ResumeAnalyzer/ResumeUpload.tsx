import React from "react";

interface ResumeUploadProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const ResumeUpload = ({ file, setFile }: ResumeUploadProps) => {
  return (
    <div className="flex w-full min-w-0 flex-col gap-3">
      <label
        htmlFor="file-upload"
        className="text-sm font-medium text-slate-300"
      >
        Choose a file:
      </label>

      <input
        type="file"
        id="file-upload"
        name="file-upload"
        accept=".pdf,application/pdf"
        className="block w-full min-w-0 max-w-full cursor-pointer rounded-xl border border-white/15 bg-slate-900/70 p-2 text-sm text-slate-200 file:mr-2 file:rounded-lg file:border-0 file:bg-purple-500/20 file:px-3 file:py-2 file:text-sm file:font-medium file:text-purple-300"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      {file && (
        <p className="break-all text-sm text-emerald-300">
          Selected: {file.name}
        </p>
      )}
    </div>
  );
};

export default ResumeUpload;
