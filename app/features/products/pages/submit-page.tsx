import type { Route } from "~/types";
import type { MetaFunction } from "react-router";

interface SubmitPageProps extends Route.ComponentProps {}

export function meta(): MetaFunction {
  return [
    { title: "Products Submit" },
    { name: "description", content: "Submit a new product" },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function SubmitPage({
  loaderData,
  actionData,
}: SubmitPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Products Submit</h1>
    </div>
  );
}
