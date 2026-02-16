import Header from '@/pages/welcome/header';
import ProjectsSection from '@/pages/welcome/projects-section';

export default function Welcome() {
  return (
    <>
      <Header />

      <main className="mx-auto px-6 py-4">
        <h1>Hi, my name is Eugene, i am Software Developer</h1>

        <p>
          Frontend Developer with 4 years of experience building modern web
          applications
        </p>

        <ProjectsSection />
      </main>
    </>
  );
}
