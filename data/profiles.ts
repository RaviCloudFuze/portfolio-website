export type CodingProfile = {
  id: string;
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
    handle: "@ravitejadudipalli",
    url: "https://github.com/ravitejadudipalli",
    description: "Open source contributions, side projects, and learning repos.",
    stat: "60+ repos",
  },
  {
    id: "leetcode",
    name: "LeetCode",
    handle: "ravitejadudipalli",
    url: "https://leetcode.com/ravitejadudipalli/",
    description: "Daily problem solving — DS&A, SQL, and system design.",
    stat: "500+ solved",
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    handle: "ravitejadudipalli",
    url: "https://www.hackerrank.com/ravitejadudipalli",
    description: "5-star in Problem Solving, Java and SQL tracks.",
    stat: "5★ Java · SQL",
  },
];
