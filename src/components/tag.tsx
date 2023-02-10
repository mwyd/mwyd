import React from "react";

interface Props {
  title: string;
}

export default function Tag({ title }: Props) {
  return (
    <div className="px-2 py-1 text-xs rounded-sm bg-lightgrey-700 dark:bg-darkgrey-200">
      {title}
    </div>
  );
}