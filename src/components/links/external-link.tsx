import React from "react";
import { ExternalLink as ExternalLinkType } from "../../types/external-link";

const ExternalLink: React.FC<ExternalLinkType> = ({ title, url }) => {
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

export default ExternalLink;