import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface YearlyLeaderboardPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Yearly Leaderboard" },
    { name: "description", content: "Yearly leaderboard" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
  };
}

export default function YearlyLeaderboardPage({
  loaderData,
}: YearlyLeaderboardPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">{loaderData.year} Leaderboard</h1>
    </div>
  );
}
