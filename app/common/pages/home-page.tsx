import type { MetaFunction } from "@react-router/dev/types";

import { ProductCard } from "../../features/products/components/product-card";
import { Button } from "../components/ui/button";
import { PostCard } from "../../features/community/components/post-card";
import { IdeaCard } from "../../features/ideas/components/idea-card";
import { JobCard } from "../../features/jobs/components/job-card";
import { TeamCard } from "../../features/team/components/team-card";
import { Link } from "react-router";

export function meta(): MetaFunction {
  return [
    { title: "홈페이지" },
    {
      name: "description",
      content: "제품 디스커버리 플랫폼에 오신 것을 환영합니다",
    },
  ];
}

export const loader = () => {
  return {
    products: [],
    discussions: [],
    ideas: [],
  };
};

export default function HomePage({ loaderData }) {
  return (
    <div className="px-20 space-y-40">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Today's Products
          </h2>
          <p className="text-2xl font-light text-foreground/80">
            The best products made by our community today
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/products/leaderboard">Explore all products &rarr;</Link>
          </Button>
        </div>

        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`productId-${index}`}
            name="Product Name"
            description="Product Description"
            upvotes={120}
            comments={12}
            views={12}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Discussions
          </h2>
          <p className="text-2xl font-light text-foreground/80">
            The latest discussions from our community
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/community">Explore all discussions &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <PostCard
            key={index}
            id={`postId-${index}`}
            title="What is the best productivity tool?"
            author="Glen"
            authorAvatarUrl="https://github.com/shadcn.png"
            category="productivity"
            createdAt="2 hours ago"
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            IdeasGPT
          </h2>
          <p className="text-2xl font-light text-foreground/80">
            Find ideas for your next project
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/ideas">Explore all ideas &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 10 }).map((_, index) => (
          <IdeaCard
            id="ideaId"
            title="A startup that creates an AI-powered genrated personal trainer, delivering customized fitness plans and tracking of progress using a mobile app to track workouts and progress as well as providing a community of support and accountability."
            views={123}
            likes={123}
            createdAt="12 hours ago"
            claimed={index % 2 === 0}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Latest Jobs
          </h2>
          <p className="text-2xl font-light text-foreground/80">
            Find your dream jobs
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/jobs">Explore all jobs &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <JobCard
            key={index}
            id={`jobId-${index}`}
            company="Tesla"
            companyLogoURL="https://github.com/facebook.png"
            title="Software Engineer"
            createdAt="12 hours ago"
            type="Full-time"
            level="Senior"
            salary="$120,000 - $150,000"
            companyHq="San Francisco"
            state="CA"
            positionLocation="Remote"
          />
        ))}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <h2 className="text-5xl font-bold leading-tight tracking-tight">
            Find a team mate
          </h2>
          <p className="text-2xl font-light text-foreground/80">
            Join a team looking for a new member
          </p>
          <Button variant="link" asChild className="text-lg p-0">
            <Link to="/teams">Explore all teams &rarr;</Link>
          </Button>
        </div>
        {Array.from({ length: 7 }).map((_, index) => (
          <TeamCard
            id="teamId"
            leaderName="glen"
            leaderAvatarUrl="https://github.com/glen15.png"
            positions={[
              "Full-stack Developer",
              "AI Engineer",
              "Product Manager",
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
