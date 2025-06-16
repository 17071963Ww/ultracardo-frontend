import bannerImage from '../assets/banner.png';

export default function Hero() {
return (
    <section className="w-full h-[85vh] min-h-[400px] relative">
        <img
            src={bannerImage}
            alt="Banner ShopCenter"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">Bem-vindo à UltraCardo</h2>
            <p className="text-xl md:text-2xl mb-6 text-gray-200">Encontre os melhores produtos com design moderno e qualidade superior</p>
            <a href='https://youtu.be/dQw4w9WgXcQ?feature=shared'>
            <button className="bg-white text-black py-3 px-8 rounded-xl font-semibold hover:bg-gray-200 transition">
                Ver Video ▶️
            </button>
            </a>
        </div>
    </section>
);
}
