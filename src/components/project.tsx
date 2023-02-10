import React from "react";
import Tag from "./tag";
import ExternalLink from "./links/external-link";
import { Project as ProjectType } from "../types/project";
import BasePanel from "./containers/base-panel";

export default function Project({ name, description, tags, links }: ProjectType) {
  return (
    <BasePanel title={name}>
      <p className="text-sm pb-3">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 pb-3">
        {tags.map((tag, i) =>
          <Tag
            key={`tag-${i}`}
            title={tag}
          />
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {links.map((data, i) =>
          <ExternalLink
            key={`link-${i}`}
            {...data}
          />
        )}
      </div>
    </BasePanel>
  );
}