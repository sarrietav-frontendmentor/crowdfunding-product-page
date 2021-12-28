import Button from '@/components/Button';
import TheHeader from '@/components/TheHeader';

const index = () => {
  return (
    <div className="font-commissioner">
      <TheHeader />
      <main className="px-6 relative -top-14">
        <section className="relative bg-white z-10 border rounded-lg px-5 py-10 space-y-6 flex flex-col place-content-center">
          <figure className="flex place-content-center absolute -top-7 inset-x-0">
            <img src="/logo-mastercraft.svg" alt="Bookmark icon" />
          </figure>
          <h1 className="font-bold text-xl text-center">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-gray-500 text-center">
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain
          </p>
          <div className="flex place-content-center space-x-3">
            <Button>Back this project</Button>
            <button>
              <figure>
                <img src="/icon-bookmark.svg" alt="Bookmark icon" />
              </figure>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default index;
