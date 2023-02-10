import React from "react";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function BasePanel({ title, children }: Props) {
  return (
    <div className="p-4 bg-white-400 dark:bg-black-700 rounded-sm">
      <h2 className="pb-2 text-lg">
        {title}
      </h2>
      {children}
    </div>
  );
}