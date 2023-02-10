import { ExternalLink } from "./link";

export type Project = {
  name: string;
  description: string;
  tags: string[];
  links: ExternalLink[]
}