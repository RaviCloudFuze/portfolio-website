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
    handle: "@RaviTejaDudipalli",
    url: "https://github.com/RaviTejaDudipalli",
    description:
      "Side projects, backend experiments, and learning repos in Java and Spring Boot.",
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
    handle: "ravitejad6",
    url: "https://www.codechef.com/users/ravitejad6",
    description:
      "Competitive programming, contest participation, and archived solutions.",
  },
];
