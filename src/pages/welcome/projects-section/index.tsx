import ProjectCard from '@/pages/welcome/projects-section/project-card.tsx';

const PROJECTS_INFO = [
  {
    id: 0,
    name: 'ShutterStock',
    description:
      'Shutterstock is a leading global provider of high-quality licensed images, videos, and music.',
    image: 'shutterstock',
    link: 'https://www.shutterstock.com/',
    techs: [
      'NextJS',
      'react-i18next',
      'React Testing Library',
      'Jenkins Pipeline',
      'GraphQL',
      'Custom Analytics',
      'axios',
      'Redux',
    ],
  },
  {
    id: 1,
    name: 'Marvelous.Works',
    description:
      'Marvelous. works is a sales outreach and collaborative selling platform for media sales teams.',
    image: 'marvelous',
    link: 'https://marvelous.works/',
    techs: [
      'TanStack Query',
      'TanStack Table',
      'Google Auth 2.0',
      'Web Sockets',
      'Google Analytics',
      'Zod',
      'Formik',
      'React Hook Forms',
      'Yup',
      'react-quill',
      'Styled Components',
      'SCSS',
      'CSS-in-JS (Emotion)',
      'Swagger',
      'axios',
    ],
  },
  {
    id: 2,
    name: 'SkyBox',
    description:
      'Startup, platform for Instagram and Tik-Tok influencers and companies.',
    image: 'skybox',
    techs: [
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'Zod',
      'React Hook Forms',
      'Firebase Authentication',
      'TanStack Query',
      'TanStack Table',
      'Swagger',
      'recharts',
      'axios',
      'Facebook API',
    ],
  },
  {
    id: 3,
    name: 'Futurepedia',
    description:
      'Futurepedia is an online platform focused on helping people and businesses discover, learn about, and use AI tools and technologies.',
    image: 'futurepedia',
    link: 'https://www.futurepedia.io/',
    techs: [
      'TypeScript',
      'NextJS',
      'Apollo Client',
      'Tailwind CSS',
      'Sanity CMS',
      'Google Analytics',
      'mixpanel',
      'Vimeo',
    ],
  },
];

export default function ProjectsSection() {
  return (
    <div className="w-full space-y-6 text-center">
      <div className="text-2xl font-semibold">Projects experience:</div>

      <div className="flex w-full flex-col flex-wrap items-center justify-center gap-4 md:flex-row md:items-start md:justify-around md:gap-8">
        {PROJECTS_INFO.map(({ id, name, description, image, link, techs }) => (
          <ProjectCard
            key={id}
            image={image}
            content={description}
            link={link}
            title={name}
            techs={techs}
          />
        ))}
      </div>
    </div>
  );
}
