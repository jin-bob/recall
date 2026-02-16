import Header from '@/pages/welcome/header';
import ProjectsSection from '@/pages/welcome/projects-section';
import InfoSection from '@/pages/welcome/info-section';
import Footer from '@/pages/welcome/footer';

export default function Welcome() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />

      <main className="mx-auto max-w-[1440px] flex-1 space-y-8 px-6 py-4">
        <InfoSection />

        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}
