import { Link } from "react-router";
import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
} from "../../../common/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../common/components/ui/avatar";
import { Button } from "../../../common/components/ui/button";
import { DotIcon } from "lucide-react";

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl: string;
  category: string;
  createdAt: string;
}

export function PostCard({
  id,
  title,
  author,
  authorAvatarUrl,
  category,
  createdAt,
}: PostCardProps) {
  return (
    <Card className="bg-transparent hover:bg-card/50 transition-colors">
      <Link to={`/community/${id}`}>
        <CardHeader className="flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarFallback>{author[0]}</AvatarFallback>
            {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
          </Avatar>
          <div className="space-y-2">
            <CardTitle className="text-2xl font-semibold leading-none tracking-tight">
              {title}
            </CardTitle>
            <div className="flex gap-2 text-sm leading-tight text-muted-foreground">
              <span>{author} on</span>
              <span>{category}</span>
              <DotIcon className="size-4" />
              <span>{createdAt}</span>
            </div>
          </div>
        </CardHeader>
      </Link>
      <CardFooter className="flex justify-end">
        <Button variant="link">Reply &rarr;</Button>
      </CardFooter>
    </Card>
  );
}
