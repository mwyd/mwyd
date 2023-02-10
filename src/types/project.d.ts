import { ExternalLink } from "./external-link";

export type Project = {
  name: string;
  description: string;
  tags: string[];
  links: ExternalLink[]
}