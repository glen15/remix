import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface CategoriesPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Categories" },
    { name: "description", content: "Product categories" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export default function CategoriesPage({ loaderData }: CategoriesPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Categories</h1>
    </div>
  );
}
