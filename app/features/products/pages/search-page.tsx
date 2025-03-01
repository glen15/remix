import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface SearchPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Products Search" },
    { name: "description", content: "Search for products" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export default function SearchPage({ loaderData }: SearchPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Products Search</h1>
    </div>
  );
}
