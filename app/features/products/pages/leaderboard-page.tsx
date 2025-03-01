import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface LeaderboardPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Leaderboard" },
    { name: "description", content: "Leaderboard" }
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export default function LeaderboardPage({ loaderData }: LeaderboardPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Leaderboard</h1>
    </div>
  );
} 