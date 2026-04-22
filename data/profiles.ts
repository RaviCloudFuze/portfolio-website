export type CodingProfile = {
  id: "github" | "leetcode" | "codechef";
  name: string;
  handle: string;
  url: string;
  description: string;
  stat?: string;
};

export const codingProfiles: CodingProfile[] = [
  {
    id: "github",
    name: "GitHub",
    handle: "@dravitejachoudary6",
    // TODO: replace with your real GitHub URL if different.
    url: "https://github.com/RaviTejaDudipalli",
    description:
      "Side projects, backend experiments, and learning repos in Java & Spring Boot.",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "dravitejachoudary6",
    url: "https://leetcode.com/u/dravitejachoudary6",
    description:
      "Sharpening DSA and problem-solving with regular practice.",
  },
  {
    id: "codechef",
    name: "CodeChef",
    handle: "dravitejachoudary6",
    // TODO: replace with your real CodeChef URL if different.
    url: "https://www.codechef.com/users/ravitejad6",
    description:
      "Competitive programming — contest participation and archived solutions.",
  },
];
