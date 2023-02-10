import React from "react";
import { ExternalLink as ExternalLinkType } from "../../types/link";
import useTheme from "../../hooks/use-theme";

export default function ImageLink({ title, url }: ExternalLinkType) {
  const { color: themeColor } = useTheme();

  return (
    <a
      className="flex items-center mx-2 link-image"
      href={url}
      title={title}
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="w-[20px] h-[20px]"
        src={`/img/${title}-${themeColor}.png`}
        alt={title}
      />
    </a>
  );
}