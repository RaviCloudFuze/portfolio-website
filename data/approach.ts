export type ApproachPrinciple = {
  id: string;
  title: string;
  body: string;
};

export const approachPrinciples: ApproachPrinciple[] = [
  {
    id: "api-contracts",
    title: "API contracts first",
    body: "Sketch the request/response shape and error surface before opening an IDE. The contract is the smallest thing that's hardest to change later, so it gets the most thought.",
  },
  {
    id: "service-boundaries",
    title: "Boundaries that match the data",
    body: "Microservices only earn their cost when ownership of data is clean. I'd rather ship a well-bounded modular monolith than a distributed mud-ball.",
  },
  {
    id: "database-is-the-system",
    title: "The database is the system",
    body: "Index for the queries you actually run, model state transitions explicitly, and never trust the application layer to enforce invariants the DB can.",
  },
  {
    id: "perf-measured",
    title: "Performance is measured, not assumed",
    body: "Profile the hot path, fix the read amplification, then talk about caches and queues in that order.",
  },
  {
    id: "operate-what-you-build",
    title: "Operate what you build",
    body: "Logs, metrics, error budgets, and a rollback story are part of \"done.\" Nothing ships without an observability story.",
  },
];
