import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface ProductsPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Products" },
    { name: "description", content: "All products" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export default function ProductsPage({ loaderData }: ProductsPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Products</h1>
    </div>
  );
}
