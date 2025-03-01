import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface DailyLeaderboardPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Daily Leaderboard" },
    { name: "description", content: "Daily leaderboard" },
  ];
  }

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    month: params.month,
    day: params.day
  };
}

export default function DailyLeaderboardPage({ loaderData }: DailyLeaderboardPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">
        {loaderData.year} {loaderData.month} {loaderData.day} Leaderboard
      </h1>
    </div>
  );
}
