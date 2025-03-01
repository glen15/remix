import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface MonthlyLeaderboardPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Monthly Leaderboard" },
    { name: "description", content: "Monthly leaderboard" }
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month
  };
}

export default function MonthlyLeaderboardPage({ loaderData }: MonthlyLeaderboardPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">
        {loaderData.year} {loaderData.month} Leaderboard
      </h1>
    </div>
  );
}
