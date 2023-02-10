import React from "react";

interface TagProps {
  title: string;
}

const Tag: React.FC<TagProps> = ({ title }) => {
  return (
    <div className="px-2 py-1 text-xs rounded-sm bg-lightgrey-700 dark:bg-darkgrey-200">
      {title}
    </div>
  );
}

export default Tag;