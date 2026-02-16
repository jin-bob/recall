import Header from '@/pages/welcome/header';
import ProjectsSection from '@/pages/welcome/projects-section';
import InfoSection from '@/pages/welcome/info-section';

export default function Welcome() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-[1440px] space-y-8 px-6 py-4">
        <InfoSection />

        <ProjectsSection />
      </main>
    </>
  );
}
