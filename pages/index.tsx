import TheHeader from '@/components/TheHeader';
import DataSection from '@/sections/DataSection';
import ProjectSection from '@/sections/ProjectSection';

const index = () => {
  return (
    <div className="font-commissioner">
      <TheHeader />
      <main className="px-6 relative -top-14 space-y-8">
        <ProjectSection />
        <DataSection />
      </main>
    </div>
  );
};

export default index;
