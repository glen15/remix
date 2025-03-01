import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface WeeklyLeaderboardPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Weekly Leaderboard" },
    { name: "description", content: "Weekly leaderboard" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    year: params.year,
    week: params.week,
  };
}

export default function WeeklyLeaderboardPage({
  loaderData,
}: WeeklyLeaderboardPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">
        {loaderData.year} {loaderData.week} Leaderboard
      </h1>
    </div>
  );
}
