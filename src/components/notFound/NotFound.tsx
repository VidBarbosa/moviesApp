import { Link } from 'react-router-dom';

export const NotFoundComponent = () => {
  return (
    <div className="bg-gradient-to-b from-[#12141C] to-black flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-6xl font-bold text-gray-200">404</h1>
      <p className="text-xl text-white">¡😰 Lo sentimos... ! No encontramos lo que estas buscando</p>
      <Link to="/" className="mt-4 py-3 px-8 bg-indigo-500 rounded-full font-bold cursor-pointer transition duration-300 ease-in-out transform hover:-translate-y-1">
        Volver al inicio
      </Link>
    </div>
  );
};

