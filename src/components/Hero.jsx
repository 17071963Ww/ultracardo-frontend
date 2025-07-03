import bannerImage from '../assets/banner1.png';

export default function Hero() {
  const scrollToProducts = () => {
    const section = document.getElementById('products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[98vh] min-h-[500px]">
      <img
        src={bannerImage}
        alt="Banner ShopCenter"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Bem-vindo à UltraCardo
        </h2>
        <p className="text-2xl md:text-3xl mb-8 text-gray-200">
          Encontre os melhores produtos com design moderno e qualidade superior
        </p>
        <a
          href="https://youtu.be/dQw4w9WgXcQ?feature=shared"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-white text-black py-4 px-10 rounded-2xl font-semibold hover:bg-gray-200 transition">
            Ver Vídeo ▶︎
          </button>
        </a>
      </div>

      <div
        onClick={scrollToProducts}
        className="relative bottom-24 left-1/2 transform -translate-x-1/2 w-[350px] h-[100px] cursor-pointer"
      >
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <polygon fill="#000000" points="0,100 100,100 50,0" />
        </svg>
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full z-10 top-14 animate-[bounce_1.5s_infinite]"
          preserveAspectRatio="none"
        >
          <polygon fill="#ffffff" points="41,0 59,0 50,39" />
        </svg>
      </div>
    </section>
  );
}
