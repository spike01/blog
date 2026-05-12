import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "spike01.com",
  EMAIL: "spike zero one at gmail dot com",
  NUM_POSTS_ON_HOMEPAGE: 10,
  NUM_WORKS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Putting the liability in reliability",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Half-baked thoughts",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Production systems I have known and loved",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "Weird and wonderful",
};

export const SOCIALS: Socials = [
  { 
    NAME: "bsky",
    HREF: "https://bsky.app/profile/spike01.bsky.social",
  },
  {
    NAME: "mastodon",
    HREF: "https://hachyderm.io/@spike01",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/spike01"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/spikelindsey",
  }
];
