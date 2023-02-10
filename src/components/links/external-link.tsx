import React from "react";
import { ExternalLink as ExternalLinkType } from "../../types/link";

export default function ExternalLink({ title, url }: ExternalLinkType) {
  return (
    <a
      className="link-text link-text--external text-xs"
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {title}
    </a>
  );
}