import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface CategoryPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Category Products" },
    { name: "description", content: "Products by category" },
  ];
}

export function loader({ params }: Route.LoaderArgs) {
  return {
    category: params.category,
  };
}

export default function CategoryPage({ loaderData }: CategoryPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">{loaderData.category} Products</h1>
    </div>
  );
}
