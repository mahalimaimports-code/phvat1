"use client";

import { useRef } from "react";

type FileImportButtonProps = {
  label: string;
  accept?: string;
  className?: string;
  onImported?: (file: File) => void;
};

export default function FileImportButton({
  label,
  accept,
  className,
  onImported,
}: FileImportButtonProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    onImported?.(file);
    event.target.value = "";
  };

  return (
    <>
      <button type="button" onClick={handleClick} className={className}>
        {label}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={handleChange}
      />
    </>
  );
}
