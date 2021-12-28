import TheHeader from '@/components/TheHeader';
import ProjectSection from '@/sections/ProjectSection';

const index = () => {
  return (
    <div className="font-commissioner">
      <TheHeader />
      <main className="px-6 relative -top-14">
        <ProjectSection />
      </main>
    </div>
  );
};

export default index;
