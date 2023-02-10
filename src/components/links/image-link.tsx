import React, { useContext } from "react";
import ThemeContext from "../theme/theme-context";
import { ExternalLink as ExternalLinkType } from "../../types/external-link";

const ImageLink: React.FC<ExternalLinkType> = ({ title, url }) => {
  const { themeColor } = useContext(ThemeContext);

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

export default ImageLink;