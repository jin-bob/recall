export default function InfoSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:justify-between">
      <div className="flex-1">
        <h1 className="text-2xl">
          Hi, my name is Eugene, i am Software Developer.
        </h1>

        <div className="space-y-3 text-lg">
          <p className="text-zinc-500">
            Frontend Developer with 4 years of experience building modern web
            applications.
          </p>

          <p>
            I have great experience of ReactJS, TypeScript and
            performance-oriented UI-development.
          </p>

          <p>
            Also have experience with NextJS, analytics integration and
            high-traffic platforms.
          </p>

          <p>
            Worked on enterprise-level products, startups, and educational
            platforms.
          </p>
        </div>
      </div>

      <a
        href="https://www.linkedin.com/in/mdbobskiy/"
        target="_blank"
        rel="noreferrer noopener"
        className="transition hover:saturate-75"
      >
        <img
          src="src/assets/avatar.webp"
          alt="avatar"
          className="size-[256px] rounded-full"
        />
      </a>
    </div>
  );
}
