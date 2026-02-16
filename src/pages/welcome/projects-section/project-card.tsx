import { Link } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils.ts';
import ProjectCardFooter from '@/pages/welcome/projects-section/project-card-footer.tsx';

export type ProjectCardType = PropsWithChildren<{
  title: string;
  link?: string;
  content: string;
  image: string;
  techs: string[];
}>;

export default function ProjectCard({
  title,
  link,
  content,
  image,
  techs,
}: ProjectCardType) {
  return (
    <Card className="mobl:w-[300px] box-border flex min-h-[314px] w-[240px] flex-col">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center gap-1 hover:text-zinc-400',
              !link && 'invisible'
            )}
          >
            <div className="pb-0.5">visit</div>

            <Link className="flex size-3" />
          </a>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col items-center gap-1">
        <p className="flex-1 text-start">{content}</p>
        <img
          src={`src/assets/project-logos/${image}-logo.svg`}
          alt="project-image"
          className="max-w-[240px]"
        ></img>
      </CardContent>
      <ProjectCardFooter techs={techs} />
    </Card>
  );
}
