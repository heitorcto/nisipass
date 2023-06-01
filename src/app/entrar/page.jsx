import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Entrar() {
  return (
    <div className="flex justify-center h-screen place-items-center bg-gradient-to-l from-blue-950 to-purple-900">
      <div className={`flex flex-col gap-8 items-center bg-white rounded-md p-5 md:px-10`}>
        <div className="flex flex-col items-center">
          <Logo altura="130" />
          <div className="text-2xl font-semibold">
            NisiPass
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <input type="text" className="h-10 md:h-12 md:text-xl w-60 md:w-80 pl-1 border border-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-md" placeholder="E-mail" />
          <input type="text" className="h-10 md:h-12 md:text-xl w-60 md:w-80 pl-1 border border-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 rounded-md" placeholder="Senha" />
        </div>
        <Link href="/cofre">
          <div className="bg-purple-950 cursor-pointer p-3 rounded-md text-white hover:bg-purple-900 transition duration-200">
            Entrar
          </div>
        </Link>
        <div>Não possui uma conta? <Link href="/" className="text-purple-800 font-semibold">Cadastre-se!</Link></div>
      </div>
    </div>
  );
}
