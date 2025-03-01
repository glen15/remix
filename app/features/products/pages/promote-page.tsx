import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface PromotePageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Products Promotion" },
    { name: "description", content: "Promote your products" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function PromotePage({
  loaderData,
  actionData,
}: PromotePageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Products Promotion</h1>
    </div>
  );
}
