import React from "react";

interface ResumeUploadProps {
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

const ResumeUpload = ({ file, setFile }: ResumeUploadProps) => {
  return (
    <div className="flex flex-col gap-3">
      <label
        htmlFor="file-upload"
        className="text-sm font-medium text-gray-700"
      >
        Choose a file:
      </label>

      <input
        type="file"
        id="file-upload"
        name="file-upload"
        accept=".pdf"
        className="rounded-md border border-gray-300 p-2 text-sm"
        onChange={(e) => setFile(e.target.files?.[0] ?? null)}
      />

      {file && <p className="text-sm text-gray-600">{file.name}</p>}
    </div>
  );
};

export default ResumeUpload;
